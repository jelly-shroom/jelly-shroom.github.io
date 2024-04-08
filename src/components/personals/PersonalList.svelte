<script>
  import FilterableList from "../FilterableList.svelte";
  export let personals = {};

  let currentTag = "";
  let selectedTag = "";

  $: {
    if (selectedTag) {
      document
        .getElementById(`personal-${selectedTag}`)
        .style.setProperty("display", "block");
    }
    if (currentTag) {
      document
        .getElementById(`personal-${currentTag}`)
        .style.setProperty("display", "none");
    }
    currentTag = selectedTag;
  }

  selectedTag = Object.keys(personals)[0];
</script>

<div>
  <FilterableList tags={personals} bind:selectedTag />
</div>
