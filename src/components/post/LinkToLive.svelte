<script lang="ts">
  export let links: string[];
  export let buttonText: string[];
</script>

<div id="linkToLive">
  <div>
    <slot name="header" />
    <slot name="body" />
  </div>

  <br />

  <div>
    {#each links as link, index}
      <a href={link} target="_blank">
        {buttonText[index]}
      </a>
    {/each}
  </div>
</div>

<style>
  #linkToLive {
    margin: auto;
    width: 900px;

    border-radius: 25px;

    padding: 1.5rem 1.5rem;

    margin-top: 8rem;

    border: 1px solid white;
    color: white;
    background-color: #a4faff5e;
    box-shadow: 0 0 10px 0 var(--glow-primary);
  }

  :global(#linkToLive h2) {
    color: rgb(255, 255, 255);
  }

  a {
    display: inline-block;

    font-family: "Work Sans";
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: lowercase;

    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;

    transition: 0.25s;
    color: white;
    border: 1px solid white;
    background: none;

    margin: 0 1rem 0 0;

    text-decoration: none;
    font-weight: normal;
  }

  a:hover {
    color: white;
    box-shadow: 0 0 10px 0 var(--glow-primary);
    background-color: #a4faff5e;
  }

  @media screen and (max-width: 800px) {
    #linkToLive {
      width: 90%;
    }
  }

  @media screen and (max-width: 600px) {
    a {
      width: 100%;
      margin-top: 1rem;
    }
  }
</style>
