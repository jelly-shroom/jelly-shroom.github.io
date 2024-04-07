<script lang="ts">
  export let image: string;
</script>

<div>
  <img src={image} class="pfp" alt={image} />
  <slot name="name" />
  <slot name="info" />
  <slot name="furtherInfo" />
</div>

<style>
  div {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;

    padding: 30px;

    margin-top: 20px;
    margin-bottom: 20px;

    color: var(--lightAccent);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-shrink: 0;

    width: 100%;
  }

  div :global(p),
  div :global(h3) {
    margin-bottom: 5px;
    margin-top: 5px;
  }

  div :global(h3) {
    color: var(--darkAccent);
    margin-top: 10px;
  }

  .pfp {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;

    flex-shrink: 0;
  }
</style>
