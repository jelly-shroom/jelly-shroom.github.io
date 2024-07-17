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
  .withGapExtra {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 40px;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  .withGapExtra img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;

    object-fit: cover;
  }
  .withGap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  .withGap img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;

    object-fit: cover;
  }

  .noGap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 0px;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  .noGap img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;

    object-fit: cover;
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
    }

    .withGap {
      margin-top: 10px;
    }
  }
</style>
