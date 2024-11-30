<script>
  import { onMount, onDestroy } from "svelte";

  let particles = [];
  let animationFrameId;
  const MAX_PARTICLES = 100;

  function createParticle() {
    return {
      id: Math.random(),
      left: Math.random() * 100,
      speed: Math.random() * 100 + 300,
      opacity: Math.random() * 0.3 + 0.1,
      size: Math.random() * 2 + 1,
      //random position within viewport
      position: Math.random() * window.innerHeight,
      active: true,
    };
  }

  function updateParticles() {
    particles = particles.filter((p) => p.active);

    // Add new particles if we're below MAX_PARTICLES
    while (particles.length < MAX_PARTICLES) {
      particles.push(createParticle());
    }

    // Update positions - negative value to move upward
    particles = particles.map((p) => {
      p.position -= 100 / p.speed; // Negative for upward movement
      //if particle is out of viewport, set active to false
      if (p.position < -10) {
        p.active = false;
      }
      return p;
    });

    animationFrameId = requestAnimationFrame(updateParticles);
  }

  onMount(() => {
    updateParticles();
  });

  onDestroy(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });
</script>

<div class="particles">
  {#each particles as particle (particle.id)}
    <div
      class="particle"
      style="
          left: {particle.left}%;
          transform: translateY({particle.position}px);
          opacity: {particle.opacity};
          width: {particle.size}px;
          height: {particle.size}px;
        "
    />
  {/each}
</div>

<style>
  .particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    background: var(--glow-primary, #00f4ff);
    border-radius: 50%;
    box-shadow:
      0 0 4px var(--glow-primary, #00f4ff),
      0 0 8px var(--glow-primary, #00f4ff);
    will-change: transform;
    transition: opacity 0.3s ease;
  }
</style>
