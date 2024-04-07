<script>
  import FilterableList from "../FilterableList.svelte";
  export let personals = [];
  let selectedTag = "";
</script>

<div>
  <FilterableList tags={personals} bind:selectedTag />
</div>
