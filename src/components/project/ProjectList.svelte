<script>
  import FilterableList from "../FilterableList.svelte";
  import ProjectContainer from "./ProjectContainer.svelte";
  import ProjectItem from "./ProjectItem.svelte";

  export let tags = [];
  export let projects = [];
  let selectedTag = "";
</script>

<FilterableList {tags} bind:selectedTag />
<ProjectContainer>
  {#key selectedTag}
    {#each projects.filter(({ tags }) => selectedTag === "" || tags.includes(selectedTag)) as project}
      <ProjectItem {project} />
    {/each}
  {/key}
</ProjectContainer>
