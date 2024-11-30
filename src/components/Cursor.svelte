<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let cursor: HTMLDivElement;
  let smallCircle: HTMLDivElement;

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
    index: number;
    anglespeed: number;
    x: number;
    y: number;
    scale: number;
    range: number;
    limit: number;
    element: HTMLSpanElement;
    lockX: number;
    lockY: number;
    angleX: number;
    angleY: number;

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
      this.element.style.transform = `scale(${this.scale})`;
      cursor?.appendChild(this.element);
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

  function onMouseMove(event: MouseEvent) {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
    resetIdleTimer();
  }

  function onTouchMove(event: TouchEvent) {
    mousePosition.x = event.touches[0].clientX;
    mousePosition.y = event.touches[0].clientY;
    resetIdleTimer();
  }

  function render(timestamp: number) {
    const delta = timestamp - lastFrame;
    positionCursor(delta);
    lastFrame = timestamp;
    requestAnimationFrame(render);
  }

  function positionCursor(delta: number) {
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
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    lastFrame = Date.now();
    buildDots();
    requestAnimationFrame(render);
  });

  onDestroy(() => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("touchmove", onTouchMove);
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

<div bind:this={cursor} class="cursor">
  <div bind:this={smallCircle} class="small-circle" />
</div>

<style lang="scss">
  .cursor {
    pointer-events: none;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    transform-origin: center center;
    mix-blend-mode: difference;
    top: 0;
    left: 0;
    z-index: 1000;
    filter: url("#goo");

    :global(span) {
      position: absolute;
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      background-color: var(--glow-primary);
      transform-origin: center center;
    }
  }

  .small-circle {
    z-index: inherit;
    position: absolute;
    width: 12px; // Smaller size
    height: 12px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255); // Different color to stand out
    transform-origin: center center;
    pointer-events: none;
  }
</style>
