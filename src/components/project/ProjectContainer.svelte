<script>
  import { onMount } from "svelte";
  let timelineElement;
  let timelineLeft = 0;

  onMount(() => {
    if (timelineElement) {
      const rect = timelineElement.getBoundingClientRect();
      timelineLeft = rect.left;
      window.addEventListener("resize", () => {
        const newRect = timelineElement.getBoundingClientRect();
        timelineLeft = newRect.left;
      });
    }
  });
</script>

<div class="timeline-container">
  <div bind:this={timelineElement} class="timeline-line"></div>
  <div class="column-contents">
    <slot {timelineLeft} />
  </div>
</div>

<style>
  .timeline-container {
    position: relative;
    height: 100%;
  }

  .timeline-line {
    position: absolute;
    left: 8px;
    width: 2px;
    height: 100%;
    background: rgba(0, 244, 255, 0.3);
    z-index: 0;

    transform: translate(-50%, 0);
  }

  .column-contents {
    display: grid;
    margin-bottom: 4rem;

    grid-auto-flow: dense;
    gap: 2rem;
  }

  @media screen and (max-width: 1400px) {
    .column-contents {
      grid-template-columns: 1fr;
    }
  }
</style>
