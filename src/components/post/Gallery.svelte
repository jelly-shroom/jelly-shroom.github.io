<script lang="ts">
  export let imgSrc: string[];
  export let alt: string[];

  export let uniqueID: string[] = imgSrc.map((_, index) => `img${index}`);
</script>

<div>
  {#each imgSrc as image, index}
    <img src={image} alt={alt[index]} id={uniqueID[index]} />
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  div img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;

    object-fit: cover;
  }

  #blenderViewport {
    grid-area: 1/ 1/ 1 / span 2;
  }
</style>
