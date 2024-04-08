<script lang="ts">
  export let imgSrc: string[];
  export let alt: string[];
  export let imgCaption: string[];

  export let uniqueID: string[] = imgSrc.map((_, index) => `img${index}`);
</script>

<div>
  {#each imgSrc as image, index}
    <div id={uniqueID[index]} class="galleryItem">
      <img src={image} alt={alt[index]} />
      <p>{imgCaption[index]}</p>
    </div>
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

  .galleryItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .galleryItem p {
    font-size: 1em;
    margin-top: -20px;
    text-align: center;
  }

  #marginBottom {
    margin-bottom: 30px;
  }

  #verticalImgLeft {
    grid-area: 2/ 1 / span 2/ 1;
  }

  #verticalImgRight {
    grid-area: 2/ 3 / span 2 /3;
  }
  #HACKING {
    grid-area: 4/ 1/ 4 / span 3;
    margin-top: -10px;
  }
</style>
