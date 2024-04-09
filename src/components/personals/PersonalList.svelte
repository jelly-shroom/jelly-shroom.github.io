<script>
  import FilterableList from "../FilterableList.svelte";
  export let personals = {};
  let selectedTag = "";
  let currentTag = "";

  selectedTag = Object.values(personals)[0];

  $: {
    if (!import.meta.env.SSR) {
      if (currentTag !== "") {
        document.getElementById(currentTag).style = "display: none";
      }
      if (selectedTag !== "") {
        document.getElementById(selectedTag).style =
          "display: block; animation: fadeTransitionIn 0.5s ease-out forwards;";
        currentTag = selectedTag;
      }
    }
  }
</script>

<div>
  <FilterableList tags={personals} bind:selectedTag />
</div>

<style>
  :global(p) {
    font-family: "Quicksand";
    line-height: 1.5;
  }

  :global(strong) {
    color: var(--darkAccent);
  }
</style>
