<div>
  <h3>Target User</h3>
  <slot name="targetUser" />
</div>

<style>
  div {
    border: 1px solid white;
    background-color: #a4faff5e;
    box-shadow: 0 0 10px 0 var(--glow-primary);

    border-radius: 25px;
    padding: 2rem;
    color: var(--dim-text);
    text-align: center;

    margin-bottom: 1rem;
  }

  div :global(strong),
  h3 {
    color: white;
    font-size: 1.25rem;

    text-align: center;
  }

  @media screen and (max-width: 600px) {
    div {
      padding: 1rem 1.5rem;
    }
  }
</style>
