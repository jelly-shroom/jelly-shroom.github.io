<script lang="ts">
  import { onMount } from "svelte";

  // Element references
  let outline: HTMLDivElement;
  let cursor: HTMLDivElement;

  let original_size = 50;
  let expanded_size = 120;
  let original_bg = "rgba(255, 105, 180, 0.7)"; // A more noticeable pink
  let expanded_bg = "rgba(255, 20, 147, 1)"; // A more vibrant pink shade

  let original_blur = "blur(1px)";
  let expanded_blur = "blur(0px)";

  // Detect touch devices
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  function moveCursor(e: MouseEvent) {
    if (isTouchDevice) return;

    // Update outline position
    outline.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;

    // Update cursor position
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }

  function onMouseHover() {
    if (outline) {
      outline.style.backgroundColor = expanded_bg; // Change background color
      outline.style.width = expanded_size + "px";
      outline.style.height = expanded_size + "px";
      outline.style.backdropFilter = expanded_blur; // Remove blur effect
      outline.style.borderWidth = "2px"; // Optional: Change border width
    }
  }

  function onMouseHoverOut() {
    if (outline) {
      outline.style.backgroundColor = original_bg; // Reset background color
      outline.style.borderWidth = "1px"; // Optional: Reset border width
      outline.style.width = original_size + "px";
      outline.style.height = original_size + "px";
      outline.style.backdropFilter = original_blur; // Reset blur effect
    }
  }
  onMount(() => {
    if (isTouchDevice) return;

    // Add mouse listeners for movement
    window.addEventListener("mousemove", moveCursor);
    outline.style.backgroundColor = original_bg; // Set initial background color

    // Add hover effects to all links and hoverable elements
    const hoverableElements = document.querySelectorAll(
      'a, button, [role="button"], .hoverable'
    );
    hoverableElements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseHover);
      element.addEventListener("mouseleave", onMouseHoverOut);
    });

    // Cleanup event listeners when component is destroyed
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverableElements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseHover);
        element.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  });
</script>

<div class="outline" bind:this={outline} />
<div class="cursor" bind:this={cursor} />

<style>
  .outline {
    mix-blend-mode: overlay;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid #ffffff;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px); /* For Safari support */
    box-shadow: 0 4px 15px rgba(251, 153, 194, 0.2);
    transition: all 200ms ease-out;
    position: fixed;
    pointer-events: none;
    left: 0;
    top: 0;
    transform: translate(calc(-50% + 15px), -50%);
    z-index: 9999;
    will-change: transform, backdrop-filter; /* Optimize performance */
  }

  .cursor {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: rgb(255, 182, 193); /* Baby pink */
    /* opacity: 0.5; */
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition:
      width 0.3s,
      height 0.3s,
      opacity 0.3s;
    z-index: 9999;
    will-change: transform; /* Optimize performance */
  }

  /* Ensure backdrop-filter works in browsers that support it */
  @supports (backdrop-filter: blur(2px)) or (-webkit-backdrop-filter: blur(2px)) {
    .outline {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  /* //disable cursor if touch device */
  @media (hover: none) {
    .outline,
    .cursor {
      display: none;
    }
  }
</style>
