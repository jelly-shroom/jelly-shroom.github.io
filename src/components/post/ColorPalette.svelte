<script lang="ts">
  export let colorPalette: string[];
  export let textColor: string[] = colorPalette.map(
    (_, index) => `color${index}`
  );
</script>

<div class="colorPalette">
  {#each colorPalette as color, index}
    <div style={`background-color: '${color}'; color: '${textColor[index]}'`}>
      <p>{color}</p>
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
