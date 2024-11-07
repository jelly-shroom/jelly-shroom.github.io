<div>
  <slot name="heading" />
  <slot name="body" />
</div>

<style>
  div :global(strong) {
    color: var(--darkAccent);
  }
</style>
