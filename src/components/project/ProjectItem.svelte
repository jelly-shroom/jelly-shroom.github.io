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
  if (alt == "Menace") {
    itemClass += " locked";
  }
</script>

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
    /* font-family: "Work Sans";
    font-weight: 600; */

    margin-bottom: 20px;
  }

  .portfolio-item .description p {
    font-family: "Work Sans";
    line-height: 1.5;
  }

  .portfolio-item.locked {
    pointer-events: none;
  }
  .portfolio-item.locked .cover-image {
    filter: grayscale(100%) blur(15px) brightness(50%);
    -webkit-filter: grayscale(100%) blur(15px) brightness(50%);
    -moz-filter: grayscale(100%) blur(15px) brightness(50%);
    -ms-filter: grayscale(100%) blur(15px) brightness(50%);
    -o-filter: grayscale(100%) blur(15px) brightness(50%);
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
    gap: 20px;
    text-align: center;
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
      font-family: "Work Sans";
      font-weight: 600;
      text-align: left;
      margin-top: -20px;
    }

    .portfolio-item:hover .cover-image {
      filter: none;
    }
  }
</style>
