<div class="column-contents">
  <slot />
</div>

<style>
  .column-contents {
    display: grid;
    margin-bottom: 50px;

    grid-auto-columns: minmax(200px, auto);
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
    gap: 30px;
  }

  @media screen and (max-width: 1400px) {
    .column-contents {
      grid-template-columns: 1fr;
    }
  }
</style>
