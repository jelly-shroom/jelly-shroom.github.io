<script>
  import { onMount } from "svelte";
</script>

<div class="timeline-container">
  <div class="timeline-line" />

  <div class="column-contents">
    <slot />
  </div>
</div>

<style>
  .timeline-container {
    position: relative;
    height: 100%;
  }

  .timeline-line {
    position: absolute;
    left: 14px;
    width: 1px;
    height: 100%;
    background: var(--glow-primary);

    animation: illuminateLine 5s ease-out;
    z-index: 0;

    transform: translate(-50%, 0);
    transform-origin: top;
  }

  .column-contents {
    display: grid;
    margin-bottom: 4rem;

    grid-auto-flow: dense;
    gap: 2rem;
  }

  @keyframes illuminateLine {
    from {
      transform: translateX(-50%) scaleY(0);
    }
    to {
      transform: translateX(-50%) scaleY(1);
    }
  }

  @media screen and (max-width: 1400px) {
    .column-contents {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 800px) {
    .column-contents {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 600px) {
    .timeline-line {
      left: 50%;
    }
  }
</style>
