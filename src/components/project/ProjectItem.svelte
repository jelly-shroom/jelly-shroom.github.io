<script lang="ts">
  import Tag from "../Tag.svelte";

  export let project: {
    title: string;
    description: string;
    alt: string;
    image: any;
    tags: string[];
    slug: string;
  };
  const { image, title, tags, description, alt, slug } = project;

  export let itemClass: string = "portfolio-item";
  if (alt == "hidden") {
    itemClass += " locked";
  }

  let isHovered = false;
  const handleHover = () => (isHovered = true);
  const handleLeave = () => (isHovered = false);
</script>

<div class="project-wrapper">
  <div class="timeline-dot" />

  <a href={`/projects/${slug}`} class={itemClass}>
    {#if itemClass.includes("locked")}
      <div class="lockedOverlay">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path
            d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 5.4777778 8 4.9453899 8.1913289 4.5683594 8.5683594 C 4.1913289 8.9453899 4 9.4777778 4 10 L 4 20 C 4 20.522222 4.1913289 21.05461 4.5683594 21.431641 C 4.9453899 21.808671 5.4777778 22 6 22 L 18 22 C 18.522222 22 19.05461 21.808671 19.431641 21.431641 C 19.808671 21.05461 20 20.522222 20 20 L 20 10 C 20 9.4777778 19.808671 8.9453899 19.431641 8.5683594 C 19.05461 8.1913289 18.522222 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"
          />
        </svg>
        <p>This project is not publicly available yet</p>
      </div>
    {/if}

    <img src={image.src} {alt} />

    <div class="content">
      <div class="description">
        <h2>
          {title}
        </h2>
        <div class="tagContainer">
          {#each tags as tag}
            <Tag {tag} />
          {/each}
        </div>
        <p>
          {@html description}
        </p>
      </div>
    </div>
    <div class="glow-overlay" />
  </a>
</div>

<style>
  .project-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
  }
  .portfolio-item {
    display: flex;
    background: rgba(0, 30, 43, 1);
    border-radius: 15px;
    position: relative;
    transition: all 0.7s ease;
    margin-bottom: 2rem;
    padding: 1rem;
    width: 100%;

    height: auto;
    animation: fadeTransitionIn 0.5s ease-out forwards;
  }

  .portfolio-item:hover {
    box-shadow:
      0 0 20px rgba(0, 244, 255, 0.5),
      0 0 4px 1px rgba(255, 255, 255, 1);
  }

  .portfolio-item:hover .glow-overlay {
    opacity: 1;
    animation: pulseGlow 2s infinite;
  }

  .tagContainer {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .glow-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, center) var(--mouse-y, center),
      rgba(0, 244, 255, 0.15),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.7s ease;
    pointer-events: none;
  }
  .content {
    padding: 1.5rem;
    color: var(--dim-text);
    gap: 1rem;
  }

  h2 :global() {
    color: white;
  }

  .portfolio-item > *:not(.lockedOverlay) {
    filter: saturate(0.3) contrast(0.5) brightness(0.8);
    transition: all 0.7s ease;
  }
  .portfolio-item:hover * {
    filter: saturate(1) contrast(1) brightness(1);
  }

  img {
    width: 600px;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;

    flex-shrink: 0;
    margin: auto 0;
  }

  .description {
    color: var(--dim-text);
    text-shadow: 0 0 10px rgba(0, 244, 255, 0.3);
  }

  .portfolio-item.locked {
    pointer-events: none;
  }

  .lockedOverlay {
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .timeline-dot {
    flex-shrink: 0;
    margin-left: 10px;
    top: 50%;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow:
      0 0 6px 4px var(--glow-primary),
      0 0 6px 1px var(--glow-primary);

    z-index: 100;
    transition: all 0.3s ease;
  }

  @keyframes pulseGlow {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.6;
    }
  }
</style>
