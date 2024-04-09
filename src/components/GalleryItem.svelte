<script lang="ts">
  export let image: any;
  export let alt: string;
  export let caption: string;
  export let gridArea: string;
</script>

<div style="grid-area: {gridArea};">
  <img
    src={image.src}
    {alt}
    style="max-width: 100%; max-height: 100%; object-fit: cover;"
  />
  <p>{caption}</p>
</div>

<style>
  div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 30%;
  }
  p {
    font-size: 1em;
    margin-bottom: 20px;
    text-align: center;
  }
</style>
