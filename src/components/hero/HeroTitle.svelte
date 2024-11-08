<script>
  import GooeyText from "../GooeyText.svelte";
</script>

<div id="heroTitle">
  <!-- Visually hidden SEO-optimized H1 -->
  <h1 class="seo-title">
    Jessica Sheng Portfolio - XR Experience Designer & Creative Developer
  </h1>
  <!-- Visible H2 that users see -->
  <h2 class="visible-title">hi! i'm jessica, and i design</h2>
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
    margin-bottom: -2rem;

    gap: 1rem;
  }

  h1 {
    font-family: "Quicksand";
    font-size: 3rem;
    font-weight: 900;
  }
  .seo-title {
    /* Hide visually but keep accessible for screen readers and SEO */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .visible-title {
    font-family: "Quicksand";
    font-size: 3rem;
    font-weight: 900;
  }

  /* Your existing media queries */
  @media screen and (max-width: 1620px) {
    /* Update selector to use visible-title */
    .visible-title {
      font-size: 3em;
    }

    div {
      flex-direction: column !important;
      align-items: left !important;
      justify-content: left !important;

      gap: 2em !important;
    }

    #heroTitle {
      margin-bottom: -8rem;
    }
  }

  @media screen and (max-width: 600px) {
    .visible-title {
      font-size: 2.5em;
    }
  }
</style>
