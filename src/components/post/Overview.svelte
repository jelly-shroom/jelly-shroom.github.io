<script lang="ts">
  import Tag from "../Tag.svelte";

  export let year: string;
  export let tags: string[];
</script>

<div class="heading">
  <slot name="header" />
  <h3>
    {year}
  </h3>
</div>

<h2>Overview</h2>
<div>
  <slot name="overviewDescription" />
</div>

<div class="tagContainer">
  {#each tags as tag}
    <Tag {tag} tagType="tagsGreen" />
  {/each}
</div>

<style>
  .heading {
    margin-bottom: 50px;
  }

  :global(.heading p) {
    font-family: "Quicksand";
    font-weight: bold;
  }
  .tagContainer {
    display: flex;

    justify-content: left;
    gap: 10px;
    align-self: flex-start;
    flex-wrap: wrap;

    margin-top: 20px;
    margin-bottom: 50px;
  }

  h2 {
    text-align: center;
  }

  div :global(strong) {
    color: var(--darkAccent);
  }

  @media screen and (max-width: 800px) {
  }

  @media screen and (max-width: 600px) {
    .heading {
      margin-top: -10px;
      font-size: 1.2rem;
    }
  }
</style>
