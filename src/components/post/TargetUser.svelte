<div>
  <h3>Target User</h3>
  <slot name="targetUser" />
</div>

<style>
  div {
    background-color: var(--darkAccent);
    border-radius: 25px;
    padding: 30px;
    color: #ebebeb;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;

    margin-bottom: 20px;
  }

  div :global(strong),
  h3 {
    font-weight: 700;
    color: white;
    font-size: 1.25em;

    text-align: center;
  }
</style>
