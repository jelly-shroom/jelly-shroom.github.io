<!-- chatbgp -->

<script>
  import ProjectItem from "./ProjectItem.svelte";
  import ProjectList from "./ProjectList.svelte";
  export let tags = []; // Expected to be an array of strings
  export let projects = []; // Expected to be an array of project objects

  let selectedTag = "";

  function filterProjects(project) {
    // If no tag is selected, or the project has the selected tag, display it
    return selectedTag === "" || project.tags.includes(selectedTag);
  }
</script>

<div>
  <div id="filterContainer">
    <!-- Tag buttons -->
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
  <ProjectList>
    {#key selectedTag}
      {#each projects.filter(filterProjects) as project}
        <ProjectItem {project} />
      {/each}
    {/key}
  </ProjectList>
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
