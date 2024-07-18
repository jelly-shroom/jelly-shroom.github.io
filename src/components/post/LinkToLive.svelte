<script lang="ts">
  export let links: string[];
  export let buttonText: string[];
</script>

<div id="linkToLive">
  <div>
    <h2>
      <slot name="header" />
    </h2>
    <p>
      <slot name="body" />
    </p>
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

    border: 1px solid var(--darkAccent);
    border-radius: 25px;

    padding: 1.5rem 2rem;

    margin-top: 8rem;

    background: var(--darkAccent);
    color: rgb(235, 235, 235);
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
    background-color: white;
    color: var(--darkAccent);
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
