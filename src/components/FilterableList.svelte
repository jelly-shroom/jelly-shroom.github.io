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
  #filterContainer {
    display: flex;
    justify-content: left;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .filters {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 100px;
    font-family: "Work Sans";
    font-size: small;
    border: 1px solid var(--lightAccent);
    color: var(--lightAccent);
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    text-transform: lowercase;
    transition: 0.25s;
  }

  .filters:hover {
    border: 1px solid var(--lightAccent);
    color: white;
    background-color: var(--lightAccent);
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
</style>
