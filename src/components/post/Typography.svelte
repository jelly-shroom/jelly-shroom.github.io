<script lang="ts">
  export let typeface: any[];
</script>

<div>
  <h3>Typography</h3>
  <br />
  {#each typeface as { className, displayName }}
    <p class={className}>
      {displayName}
      <br />
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
      <br />
      abcdefghijklmnopqrstuvwxyz
      <br />
      1234567890
    </p>
    <br /> <br />
  {/each}
  <slot />
</div>

<style>
  div {
    border: 1px solid white;
    background-color: #a4faff5e;
    box-shadow: 0 0 10px 0 var(--glow-primary);

    border-radius: 25px;
    padding: 2rem;
    color: #ebebeb;
    text-align: center;

    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.25rem;

    text-align: center;
  }

  p {
    text-align: left;
  }
  @media screen and (max-width: 600px) {
    div {
      padding: 1rem 1.5rem;
    }
  }
</style>
