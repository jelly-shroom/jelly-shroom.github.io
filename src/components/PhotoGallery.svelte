<script lang="ts">
  export let galleryLayout: string[] = [];
  const gridTemplate = galleryLayout.map((area) => `"${area}"`).join(" ");
</script>

<div class="gallery" style={`grid-template-areas: ${gridTemplate};`}>
  <slot />
</div>

<style>
  .gallery {
    margin: auto;
    width: 100%;
    display: grid;
    gap: 20px;
  }

  div :global(div) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
