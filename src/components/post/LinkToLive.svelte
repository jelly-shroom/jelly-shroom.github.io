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

    padding: 30px;
    padding-right: 40px;
    padding-left: 40px;

    margin-top: 75px;
    margin-bottom: 80px;

    background: var(--darkAccent);
    color: rgb(235, 235, 235);
  }

  :global(#linkToLive h2) {
    color: rgb(255, 255, 255);
  }

  a {
    display: inline-block;

    font-family: "Sono";
    font-weight: 500;
    font-size: 0.9em;
    text-transform: lowercase;

    border-radius: 10px;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;

    transition: 0.25s;
    color: white;
    border: 1px solid white;
    background: none;

    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;

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
</style>
