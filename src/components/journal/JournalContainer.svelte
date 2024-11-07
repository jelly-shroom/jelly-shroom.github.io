<div class="column-contents">
  <slot />
</div>

<style>
  .column-contents {
    display: grid;
    margin-bottom: 4rem;
    grid-auto-columns: minmax(200px, auto);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    gap: 2rem;
  }

  @media screen and (max-width: 1400px) {
    .column-contents {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .column-contents {
      width: 100%;
    }
  }
</style>
