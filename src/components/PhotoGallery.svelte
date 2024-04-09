<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }
  div > * {
    margin: 0.5rem;
  }
</style>
