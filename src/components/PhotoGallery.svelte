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
    width: 100%;
    display: grid;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    div {
      grid-template-areas: auto !important;
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
