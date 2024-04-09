<script lang="ts">
  export let galleryType: string;
</script>

<div class={galleryType}>
  <slot />
</div>

<style>
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .drTrustGallery {
    margin: auto;
    width: 90%;
    display: grid;
    grid-template-areas:
      "a b c"
      "d e f"
      "d g f"
      "h h h";

    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  div :global(img) {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;

    object-fit: cover;
  }

  div :global(div) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
