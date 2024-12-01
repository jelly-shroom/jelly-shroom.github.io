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
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    text-transform: lowercase;
    transition: 0.25s;
  }

  .filters:hover {
    border: 1px solid white;
    color: white;
    background-color: #a4faff5e;
    box-shadow: 0 0 10px 0 var(--glow-primary);
  }

  .filters.active {
    border: 1px solid white;
    color: white;
    background-color: #a4faff5e;
    box-shadow: 0 0 10px 0 var(--glow-primary);
  }

  @media screen and (max-width: 800px) {
    #filterContainer {
      flex-wrap: wrap;
    }
  }
</style>
