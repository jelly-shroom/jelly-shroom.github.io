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
    margin-top: 8rem;
  }

  .body {
    margin-bottom: 1rem;
  }

  div :global(strong) {
    color: var(--darkAccent);
  }

  @media screen and (max-width: 600px) {
    .header {
      margin-top: 4rem;
    }
  }
</style>
