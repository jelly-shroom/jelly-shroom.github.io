<script lang="ts">
  export let name: any;
  export let pfp: any;
</script>

<div class="halfColumn">
  <div class="profileCard">
    <img src={pfp.src} alt={name} class="pfp" />
    <h3>{name}</h3>
    <slot name="info" />
    <slot name="furtherInfo" />
  </div>

  <slot name="interview" />
</div>

<style>
  .profileCard {
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

  .pfp {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;

    flex-shrink: 0;
  }

  .halfColumn {
    width: 50%;
  }

  :global(.profileCard h3) {
    color: var(--darkAccent);
  }

  div :global(p),
  div :global(h3) {
    margin-bottom: 5px;
    margin-top: 5px;
  }

  div :global(h3) {
    margin-top: 10px;
  }

  @media screen and (max-width: 800px) {
    .halfColumn {
      width: 100%;
    }

    .pfp {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: 600px) {
    .profileCard {
      padding: 20px;
      padding-right: 30px;
      padding-left: 30px;

      margin-bottom: 20px;
    }

    .pfp {
      width: 80px;
      height: 80px;
    }
  }
</style>
