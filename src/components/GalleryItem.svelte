<script lang="ts">
  export let image: any = "";
  export let alt: string;
  export let caption: string = "";
  export let gridArea: string = "auto";
</script>

<div style="grid-area: {gridArea};">
  <img src={image.src} {alt} />
  <p>
    {caption}
  </p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;

    object-fit: cover;
  }

  p {
    margin-bottom: 10px;
    text-align: center;
  }
</style>
