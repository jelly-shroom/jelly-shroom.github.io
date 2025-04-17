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

  // Store latest mouse coordinates
  let mouseX = 0;
  let mouseY = 0;
  let rafId: number | null = null;

  // Flag for hover state
  let isHovered = false;

  function scheduleUpdate(e: MouseEvent) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Only schedule an update if one isn't already pending
    if (!rafId) {
      rafId = requestAnimationFrame(updatePosition);
    }
  }

  function updatePosition() {
    // Apply styles using the latest coordinates
    if (outline) {
      outline.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    }

    // Apply hover styles based on the flag
    if (outline) {
      if (isHovered) {
        outline.style.backgroundColor = expanded_bg;
        outline.style.width = expanded_size + "px";
        outline.style.height = expanded_size + "px";
        outline.style.borderWidth = "2px";
      } else {
        outline.style.backgroundColor = original_bg;
        outline.style.borderWidth = "1px";
        outline.style.width = original_size + "px";
        outline.style.height = original_size + "px";
      }
    }

    if (cursor) {
      // Use transform for the inner cursor as well
      cursor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    }

    // Allow the next frame to be requested
    rafId = null;
  }

  function onMouseHover() {
    isHovered = true;
    // No need to request update here, mousemove will trigger it
  }

  function onMouseHoverOut() {
    isHovered = false;
    // No need to request update here, mousemove will trigger it
  }
  onMount(() => {
    if (isTouchDevice) return;

    // Add mouse listeners for movement
    window.addEventListener("mousemove", scheduleUpdate);
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
      window.removeEventListener("mousemove", scheduleUpdate);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
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
    width: 50px; /* Original size */
    height: 50px; /* Original size */
    border-radius: 100%;
    border: 1px solid #ffffff; /* Original border */
    background-color: rgba(255, 105, 180, 0.7); /* Original background */
    box-shadow: 0 4px 15px rgba(251, 153, 194, 0.2);
    transition: all 200ms ease-out; /* Revert back to all */
    position: fixed;
    pointer-events: none;
    left: 0;
    top: 0;
    transform: translate(calc(-50% + 15px), -50%);
    z-index: 9999;
    will-change: transform; /* Optimize performance - removed backdrop-filter */
  }

  .cursor {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: rgb(255, 182, 193); /* Baby pink */
    /* opacity: 0.5; */
    position: fixed;
    top: 0;
    left: 0;
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
  @media (hover: none) {
    .outline,
    .cursor {
      display: none;
    }
  }
</style>
