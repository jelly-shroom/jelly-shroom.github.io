<script lang="ts">
  export let image: any;
  export let alt: string;
  export let caption: string = "";
  export let gridArea: string;
</script>

<div
  style="grid-area: {gridArea};
          display: flex;
          flex-direction: column;
          align-items: center;"
>
  <img
    src={image.src}
    {alt}
    style="position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;

    object-fit: cover;"
  />
  <p
    style="font-size: 1em;
          margin-bottom: 20px;
          text-align: center;"
  >
    {caption}
  </p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
