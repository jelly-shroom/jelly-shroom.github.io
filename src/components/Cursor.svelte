<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let cursorBlob: HTMLDivElement;
  let smallCircle: HTMLDivElement;

  const DOT_SCALE_FACTOR = 0.03;
  const NORMAL_DOT_SIZE = 30;
  const HOVER_DOT_SIZE = 60;

  const amount = 20;
  const sineDots = Math.floor(amount * 0.3);
  const width = 26;
  const idleTimeout = 150;
  let lastFrame = 0;
  let mousePosition = { x: 0, y: 0 };
  let dots: Dot[] = [];
  let timeoutID: number;
  let idle = false;

  class Dot {
    constructor(index = 0) {
      this.index = index;
      this.anglespeed = 0.03;
      this.lockX = 0;
      this.lockY = 0;
      this.angleX = 0;
      this.angleY = 0;
      this.x = 0;
      this.y = 0;
      this.scale = 1 - 0.03 * index;
      this.range = width / 2 - (width / 2) * this.scale + 2;
      this.limit = width * 0.75 * this.scale;
      this.element = document.createElement("span");
      cursorBlob?.appendChild(this.element);
    }

    lock() {
      this.lockX = this.x;
      this.lockY = this.y;
      this.angleX = Math.PI * 2 * Math.random();
      this.angleY = Math.PI * 2 * Math.random();
    }

    draw() {
      if (!idle || this.index <= sineDots) {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
      } else {
        this.angleX += this.anglespeed;
        this.angleY += this.anglespeed;
        this.y = this.lockY + Math.sin(this.angleY) * this.range;
        this.x = this.lockX + Math.sin(this.angleX) * this.range;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
      }
    }
  }

  function startIdleTimer() {
    timeoutID = window.setTimeout(goInactive, idleTimeout);
    idle = false;
  }

  function resetIdleTimer() {
    window.clearTimeout(timeoutID);
    startIdleTimer();
  }

  function goInactive() {
    idle = true;
    dots.forEach((dot) => dot.lock());
  }

  function buildDots() {
    for (let i = 0; i < amount; i++) {
      dots.push(new Dot(i));
    }
  }

  function trackMouseMovement(event: MouseEvent) {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
    resetIdleTimer();
  }

  // Add at the top with other state variables
  let isHovered = false;

  // Add these functions
  function onMouseHover() {
    const spans = cursorBlob?.getElementsByTagName("span");
    if (!spans) return;

    for (let i = 0; i < spans.length; i++) {
      spans[i].style.width = `${HOVER_DOT_SIZE}px`;
      spans[i].style.height = `${HOVER_DOT_SIZE}px`;
    }
  }

  function onMouseHoverOut() {
    if (cursorBlob) {
      const spans = cursorBlob.querySelectorAll("span");
      spans.forEach((span) => {
        span.style.width = "30px"; // Return to original width
        span.style.height = "30px"; // Return to original height
      });
    }
  }

  function render(timestamp: number) {
    const delta = timestamp - lastFrame;
    positioncursorBlob(delta);

    lastFrame = timestamp;
    requestAnimationFrame(render);
  }

  function positioncursorBlob(delta: number) {
    let x = mousePosition.x;
    let y = mousePosition.y;

    if (smallCircle) {
      smallCircle.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }

    dots.forEach((dot, index) => {
      const nextDot = dots[index + 1] || dots[0];
      dot.x = x;
      dot.y = y;
      dot.draw();

      if (!idle || index <= sineDots) {
        const dx = (nextDot.x - dot.x) * 0.35;
        const dy = (nextDot.y - dot.y) * 0.35;
        x += dx;
        y += dy;
      }
    });
  }

  onMount(() => {
    window.addEventListener("mousemove", trackMouseMovement);
    lastFrame = Date.now();
    const hoverableElements = document.querySelectorAll(
      'a, button, [role="button"], .hoverable'
    );
    hoverableElements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseHover);
      element.addEventListener("mouseleave", onMouseHoverOut);
    });
    buildDots();
    requestAnimationFrame(render);
  });

  onDestroy(() => {
    window.removeEventListener("mousemove", trackMouseMovement);

    const hoverableElements = document.querySelectorAll(
      'a, button, [role="button"], .hoverable'
    );
    hoverableElements.forEach((element) => {
      element.removeEventListener("mouseenter", onMouseHover);
      element.removeEventListener("mouseleave", onMouseHoverOut);
    });
    window.clearTimeout(timeoutID);
  });
</script>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
        result="goo"
      />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
  </defs>
</svg>

<div bind:this={cursorBlob} class="cursorBlob">
  <div bind:this={smallCircle} class="small-circle" />
</div>

<style lang="scss">
  .cursorBlob {
    pointer-events: none;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0;
    transform-origin: center center;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    top: 0;
    left: 0;
    z-index: 1000;
    filter: url("#goo");
    transition: transform 0.3s ease;

    :global(span) {
      position: absolute;
      display: block;
      width: var(--dot-size);
      height: var(--dot-size);
      border-radius: 100px;
      background-color: var(--glow-primary);
      transform-origin: center center;
      transition:
        width 0.3s ease,
        height 0.3s ease; // Add transition for smooth sizing
    }
  }

  .small-circle {
    z-index: inherit;
    position: fixed;
    width: 12px; // Smaller size
    height: 12px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255); // Different color to stand out
    transform-origin: center center;
    pointer-events: none;
  }
</style>
