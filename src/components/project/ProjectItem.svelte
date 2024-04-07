<script lang="ts">
  export let project: {
    title: string;
    description: string;
    image: any;
    tags: string[];
    slug: string;
  };
  const { image, title, tags, description } = project;

  import { Award } from "lucide-svelte";
</script>

<a href="dr_trust.html" class="portfolio-item">
  <img src={image.src} alt="Dr. Trust" class="cover-image" />
  <div class="tagContainer">
    {#each tags as tag}
      <div class="tags">{tag}</div>
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

<style>
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

  .tagContainer .tags {
    border: 1px solid rgba(255, 255, 255, 0.9);
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
    text-transform: lowercase;

    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  .tags {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 100px;

    font-family: "Sono";
    font-size: 14px;
  }

  .tags svg {
    margin-left: -5px;
    margin-right: 5px;

    height: 20px;
    width: auto;

    fill: white;
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

  @media screen and (max-width: 400px) {
    .portfolio-item .description,
    .tagContainer {
      display: none;
    }

    .portfolio-item:hover .cover-image {
      filter: none;
    }

    .tags {
      color: var(--darkAccent);
      border: 1px solid var(--darkAccent);
      text-transform: lowercase;
    }

    .tags svg {
      fill: var(--darkAccent);
    }
  }
</style>
