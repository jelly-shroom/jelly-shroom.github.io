<script lang="ts">
  export let colorPalette: any[];
</script>

<div class="colorPalette">
  {#each colorPalette as { background, foreground }}
    <div style={`background-color: ${background}; color: ${foreground}`}>
      <p>{background}</p>
    </div>
  {/each}
</div>

<style>
  .colorPalette {
    display: flex;
    margin-top: 20px;
  }

  .colorPalette p {
    font-size: 0.75em;
  }

  .colorPalette div {
    flex: 1;
    height: 35px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
