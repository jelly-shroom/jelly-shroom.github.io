<script lang="ts">
  export let imgSrc: string[];
  export let alt: string[];

  export let uniqueID: string[] = imgSrc.map((_, index) => `img${index}`);
  export let galleryType: string = "withGap";
</script>

<div class={galleryType}>
  {#each imgSrc as image, index}
    <img src={image} alt={alt[index]} id={uniqueID[index]} />
  {/each}
</div>

<style>
  .withGap,
  .noGap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
  }

  .withGap img,
  .noGap img {
    width: 100%;
    height: 100%;
    overflow: hidden;

    object-fit: fill;
  }

  .noGap {
    gap: 0px;
  }

  #blenderViewport {
    grid-area: 1/ 1/ 1 / span 2;
  }

  #fullImg {
    grid-area: auto/ auto/ auto/ span 2;
  }

  @media screen and (max-width: 800px) {
    .withGapExtra,
    .withGap,
    .noGap {
      grid-template-columns: repeat(1, 1fr);
    }

    #blenderViewport {
      grid-area: auto;
    }
  }

  @media screen and (max-width: 600px) {
    .withGapExtra,
    .withGap,
    .noGap {
      gap: 0px !important;
      margin-top: 0;
    }

    .withGap {
      margin-top: 10px;
    }
  }
</style>
