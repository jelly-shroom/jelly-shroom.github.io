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

<div class="columnContainer">
  <div class="headColumn">
    <h2>Overview</h2>
  </div>
  <div class="bodyColumn">
    <div>
      <slot name="overviewDescription" />
    </div>

    <br />

    <div class="tagContainer">
      {#each tags as tag}
        <Tag {tag} tagType="tagsGreen" />
      {/each}
    </div>
  </div>
</div>

<style>
  .tagContainer {
    display: flex;

    justify-content: left;
    gap: 10px;
    align-self: flex-start;
    flex-wrap: wrap;

    margin-top: 20px;
  }

  .columnContainer {
    /* display: block; */
    gap: 5%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .headColumn {
    width: 25%;
  }

  .bodyColumn {
    width: 65%;
  }

  .bodyColumn div {
    margin-top: 5px;
  }

  div :global(strong) {
    color: var(--darkAccent);
  }

  @media screen and (max-width: 800px) {
    .columnContainer {
      flex-direction: column;
    }

    .headColumn {
      width: 100%;
    }

    .bodyColumn {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    .heading {
      margin-top: -10px;
      font-size: 1.2rem;
    }
    .columnContainer {
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .bodyColumn div {
      margin-top: 0;
    }
  }
</style>
