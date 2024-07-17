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
    background-color: var(--darkAccent);
    border-radius: 25px;
    padding: 30px;
    color: #ebebeb;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;

    margin-bottom: 20px;
  }

  h3 {
    font-weight: 700;
    color: white;
    font-size: 1.25em;

    text-align: center;
  }

  p {
    text-align: left;
  }
  @media screen and (max-width: 600px) {
    div {
      padding: 20px;
      padding-right: 30px;
      padding-left: 30px;

      margin-bottom: 10px;
    }
  }
</style>
