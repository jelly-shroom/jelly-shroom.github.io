<script>
  export let tags = [];
  export let selectedTag = "";
</script>

<div>
  <div id="filterContainer">
    {#each Object.entries(tags) as [tagName, tag]}
      <button
        class="filters"
        class:active={selectedTag === tag}
        on:click={() => {
          selectedTag = tag;
        }}
      >
        {tagName}
      </button>
    {/each}
  </div>
</div>

<style>
  .filters {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 100px;
    font-family: "Sono";
    font-size: 14px;
    border: 1px solid var(--lightAccent);
    color: var(--lightAccent);
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: 0.25s;
  }

  .filters.active {
    border: 1px solid var(--darkAccent);
    color: white;
    background-color: var(--darkAccent);
  }

  @media screen and (max-width: 800px) {
    #filterContainer {
      flex-wrap: wrap;
    }
  }
  #filterContainer {
    display: flex;
    justify-content: left;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>
