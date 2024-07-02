<script>
  import GooeyText from "../GooeyText.svelte";
</script>

<div id="heroTitle">
  <h1>hi! i'm jessica, and i design</h1>
  <GooeyText />
</div>

<style>
  #heroTitle {
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: fixed;
    top: fixed;

    gap: 20px;
    margin-bottom: -25px;

    font-family: "Nunito", sans-serif;
  }

  h1 {
    font-family: "Nunito";
    font-size: 3em;
  }

  @media screen and (max-width: 1620px) {
    div {
      flex-direction: column !important;
      align-items: left !important;
      justify-content: left !important;

      gap: 1.75em !important;
    }

    #heroTitle {
      margin-bottom: -125px;
    }
  }

  @media screen and (max-width: 800px) {
    #heroTitle {
      margin-bottom: -50px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 2.5em;
    }
  }
</style>
