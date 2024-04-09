<script lang="ts">
  export let galleryLayout: string[] = [];
  const gridTemplate = galleryLayout.map((area) => `"${area}"`).join(" ");
</script>

<div
  style={`margin: auto;
            width: 90%;
            display: grid;

            gap: 20px;
            margin-top: -20px;
            margin-bottom: 20px;
            grid-template-areas: ${gridTemplate};`}
>
  <slot />
</div>

<style>
  div :global(div) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
