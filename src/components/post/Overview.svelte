<script lang="ts">
  export let year: string;
  export let tags: string[];
</script>

<div>
  <h1>
    <slot name="header" />
  </h1>
  <h3>
    {year}
  </h3>
</div>

<div class="columnContainer">
  <div class="headColumn">
    <h2>Overview</h2>
  </div>
  <div class="bodyColumn">
    <p>
      <slot />
    </p>

    <div class="tagContainer">
      {#each tags as tag}
        <div class="tags">{tag}</div>
      {/each}
    </div>
  </div>
</div>

<style>
  .tagContainer {
    display: flex;

    justify-content: left;
    gap: 10px;
    align-self: flex-start;
    flex-wrap: wrap;

    margin-top: 20px;
  }

  .tags {
    display: flex;
    height: 40px;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 100px;
    border: 1px solid var(--darkAccent);

    color: var(--darkAccent);
    font-family: "Sono";
    font-weight: 500;
    font-size: 14px;

    text-transform: lowercase;
    text-align: center;

    align-items: center;
    justify-content: center;
  }

  .tags svg {
    margin-left: -5px;
    margin-right: 5px;

    height: 20px;
    width: auto;
    fill: var(--darkAccent);
  }
</style>
