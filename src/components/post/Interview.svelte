<script lang="ts">
  export let person: any[];
</script>

<div class="columnContainer">
  {#each person as { pfp, name, info, furtherInfo }}
    <div class="halfColumn">
      <div class="profileCard">
        <img src={pfp} alt={name} class="pfp" />
        <h3>{name}</h3>
        <p>{info}</p>
        <p>{furtherInfo}</p>
      </div>
    </div>
  {/each}
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
  .columnContainer {
    display: flex;
    /* justify-content: space-between; */
    gap: 5%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .halfColumn {
    width: 50%;
  }

  div :global(strong) {
    color: var(--darkAccent);
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
</style>
