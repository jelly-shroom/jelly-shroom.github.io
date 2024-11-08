<script>
  import JournalContainer from "./JournalContainer.svelte";
  import JournalItem from "./JournalItem.svelte";

  export let journals = [];
</script>

<JournalContainer>
  {#each journals as journal}
    <JournalItem {journal} />
  {/each}
</JournalContainer>
