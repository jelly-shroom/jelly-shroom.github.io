<div class="columnContainer">
  <div class="headColumn">
    <slot name="sectionTitle" />
  </div>

  <div class="bodyColumn">
    <div>
      <slot name="description" />
    </div>
  </div>
</div>

<style>
  .columnContainer {
    display: flex;
    /* justify-content: space-between; */
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
</style>
