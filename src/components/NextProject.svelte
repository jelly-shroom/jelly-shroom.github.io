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
  .nextProjectContainer {
    margin: auto;
    max-width: 50%;

    margin-top: 75px;
    margin-bottom: 75px;

    color: var(--darkAccent);
  }

  .nextProjectButton {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;

    margin-top: 20px;
    padding: 10px;
    padding-right: 20px;
    color: var(--darkAccent);

    display: flex;

    transition: 0.25s;
  }

  .nextProjectButton div {
    margin-top: 10px;
  }

  .nextProjectButton:hover {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;
    background-color: var(--darkAccent);
    color: #ebebeb;
  }

  .nextProjectButton img {
    width: auto;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;
    margin-right: 30px;

    flex-shrink: 0;
  }
</style>
