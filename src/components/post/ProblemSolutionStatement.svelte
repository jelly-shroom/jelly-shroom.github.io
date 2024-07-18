<div class="columnContainer">
  <div class="problem">
    <h2>Problem</h2>
    <slot name="problem" />
  </div>
  <div class="solution">
    <h2>Solution</h2>
    <slot name="solution" />
  </div>
</div>

<style>
  .columnContainer {
    display: flex;
    gap: 1rem;
    margin-top: 8rem;
    margin-bottom: 2rem;
  }
  .problem {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;
    width: 50%;

    padding: 2rem;
    padding-right: 2.5rem;
    padding-left: 2.5rem;

    color: var(--lightAccent);
  }

  .problem :global(strong) {
    color: var(--darkAccent);
  }
  .problem h2 {
    color: var(--darkAccent);
  }

  .solution {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;

    padding: 2rem;
    padding-right: 2.5rem;
    padding-left: 2.5rem;

    background: var(--darkAccent);
    color: #ebebeb;

    width: 50%;

    margin: auto;
  }

  .solution :global(strong),
  .solution h2 {
    color: white;
  }

  @media screen and (max-width: 800px) {
    .problem,
    .solution {
      width: 100%;
    }

    .columnContainer {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    .problem,
    .solution {
      padding: 20px;
      padding-right: 30px;
      padding-left: 30px;
    }

    .columnContainer {
      margin-bottom: 4rem;
      margin-top: 4rem;
    }
  }
</style>
