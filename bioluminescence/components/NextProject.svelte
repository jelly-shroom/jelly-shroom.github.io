<script lang="ts">
  export let project: {
    title: string;
    description: string;
    image: any;
    alt: string;
    slug: string;
  };
  const { image, title, description, alt, slug } = project;
</script>

<div class="nextProjectContainer">
  <h2>Next Project</h2>

  <a class="nextProjectButton" href={`/bioluminescence/projects/${slug}`}>
    <img src={image.src} {alt} />
    <div>
      <h2>
        {title}
      </h2>
      <p>
        {@html description}
      </p>
    </div>
  </a>
</div>

<style>
  a {
    font-weight: 400;
    text-decoration: none;
  }
  .nextProjectContainer {
    margin: 8rem auto;
    width: 40%;
  }

  .nextProjectButton {
    border: 1px solid rgba(255, 255, 255, 0.5);

    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 25px;

    margin-top: 1rem;

    padding: 0.5rem;
    display: flex;
    transition: 0.25s;
  }

  .nextProjectButton div {
    margin: 0.5rem 1rem;
  }

  .nextProjectButton h2 {
    color: rgba(255, 255, 255, 0.5);
    text-shadow: none;

    transition: 0.25s;
  }

  .nextProjectButton:hover {
    border: 1px solid white;
    color: var(--dim-text);
    background-color: #a4faff5e;
    box-shadow: 0 0 10px 0 var(--glow-primary);
  }
  .nextProjectButton:hover h2 {
    color: white;
    text-shadow: 0 0 6px 0 var(--glow-primary);
  }

  .nextProjectButton img {
    width: auto;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;

    flex-shrink: 0;
    margin: auto 0;

    filter: saturate(0.3) contrast(0.5) brightness(0.8);
    transition: all 0.7s ease;
  }

  .nextProjectButton:hover img {
    filter: saturate(1) contrast(1) brightness(1);
  }

  .nextProjectButton p :global(strong) {
    color: rgba(255, 255, 255, 0.5);
    transition: 0.25s;
  }

  .nextProjectButton:hover p :global(strong) {
    color: white;
  }

  @media screen and (max-width: 800px) {
    .nextProjectContainer {
      max-width: 90%;
    }
    .nextProjectButton {
      flex-direction: column;
    }

    .nextProjectButton h2,
    p {
      margin: 0.5rem 0;
    }

    .nextProjectButton img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 600px) {
    .nextProjectContainer {
      width: 90%;
    }

    .nextProjectButton h2,
    p {
      margin: 0.25rem 0;
    }
  }
</style>
