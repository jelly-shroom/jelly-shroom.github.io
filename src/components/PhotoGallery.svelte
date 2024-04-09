<script lang="ts">
  export let galleryLayout: string[] = [];
  const gridTemplate = galleryLayout.map((area) => `"${area}"`).join(" ");
</script>

<div style={`grid-template-areas: ${gridTemplate};`}>
  <slot />
</div>

<style>
  div {
    margin: auto;
    width: 90%;
    display: grid;

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
