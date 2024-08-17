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

  <a class="nextProjectButton" href={`/projects/${slug}`}>
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
    max-width: 50%;

    color: var(--darkAccent);
  }

  .nextProjectButton {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;

    margin-top: 1rem;

    padding: 0.5rem;
    /* padding-right: 1rem; */
    color: var(--darkAccent);

    display: flex;

    transition: 0.25s;
  }

  .nextProjectButton div {
    /* margin-top: 0.5rem; */
    margin: 0.5rem 1rem;
  }

  .nextProjectButton h2 {
    color: var(--darkAccent);

    transition: 0.25s;
  }

  .nextProjectButton:hover {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;
    background-color: var(--darkAccent);
    color: #ebebeb;
  }
  .nextProjectButton:hover h2 {
    color: white;
  }

  .nextProjectButton img {
    width: auto;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;

    flex-shrink: 0;
    margin: auto 0;
  }

  @media screen and (max-width: 800px) {
    .nextProjectContainer {
      max-width: 70%;
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
      max-width: 90%;
    }

    .nextProjectButton h2,
    p {
      margin: 0.25rem 0;
    }
  }
</style>
