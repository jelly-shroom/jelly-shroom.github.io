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
</script>

<a href={`/projects/${slug}`} class="portfolio-item">
  <img src={image.src} {alt} class="cover-image" />
  <div class="tagContainer">
    {#each tags as tag}
      <Tag {tag} />
    {/each}
  </div>

  <div class="description">
    <h2>
      {title}
    </h2>
    <p>
      {@html description}
    </p>
  </div>
</a>
<div class="phoneDescription">
  <h2>
    {title}
  </h2>
</div>

<style>
  .description :global(strong) {
    color: white;
  }

  h2 :global() {
    color: white;
  }
  .phoneDescription {
    display: none;
  }
  .tagContainer {
    display: flex;
    pointer-events: none;
    opacity: 0;
    transition: 0.25s;

    justify-content: left;
    gap: 10px;
    position: absolute;
    align-self: flex-start;
    float: left;
    margin: 30px;
  }

  .portfolio-item {
    border-radius: 25px;
    overflow: hidden;
    width: 100%;
    padding: 0px;

    position: relative;
    display: flex;
    align-items: center;

    cursor: pointer;

    animation: fadeTransitionIn 0.5s ease-out forwards;
  }

  .portfolio-item::after {
    content: "";
    border-radius: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0px;
    right: 0px;
    box-shadow:
      rgba(122, 124, 122, 0.5) 4px 4px 2px 0px inset,
      rgba(255, 255, 255, 0.9) -4px -4px 2px 0px inset,
      rgba(0, 0, 0, 0.3) 0px 30px 100px -24px;
  }

  .portfolio-item .description {
    opacity: 0;

    position: absolute;
    /* text-align: center; */
    margin: 0 auto;
    color: rgb(235, 235, 235);
    width: 85%;
    height: auto;

    left: 50%;
    transform: translate(-50%, 0%);

    pointer-events: none;
    transition: 0.25s;
  }

  .portfolio-item .description h2 {
    color: white;
    font-family: "Kodchasan";
    font-weight: 700;

    margin-bottom: 20px;
  }

  .portfolio-item .description p {
    font-family: "Quicksand";
    line-height: 1.5;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    object-position: center center;

    transition: 0.25s;
  }

  .portfolio-item:hover .cover-image {
    filter: brightness(50%) blur(5px);
    -webkit-filter: blur(5px) brightness(50%);
  }

  .portfolio-item:hover .description,
  .portfolio-item:hover .tagContainer {
    opacity: 1;
  }

  /*for the button on homepage portfolio*/

  @media screen and (max-width: 800px) {
    .portfolio-item .description {
      width: 90%;
    }
  }

  @media screen and (max-width: 600px) {
    .portfolio-item .description,
    .tagContainer {
      display: none;
    }

    .phoneDescription {
      display: block;
      font-family: "Kodchasan";
      font-weight: 700;
      text-align: left;
      margin-top: -20px;
    }

    .portfolio-item:hover .cover-image {
      filter: none;
    }
  }
</style>
