<div class="header">
  <slot name="sectionTitle" />
</div>

<div class="body">
  <slot name="description" />
</div>

<style>
  .header {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .body {
    margin-bottom: 50px;
  }

  div :global(strong) {
    color: var(--darkAccent);
  }

  @media screen and (max-width: 600px) {
    .body {
      margin-bottom: 10px;
    }

    .header {
      margin-top: 10px;
    }
  }
</style>
