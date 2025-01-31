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
  <div class="gooeyWrapper">
    <GooeyText />
  </div>
</div>

<style>
  #heroTitle {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 0 0 30px var(--glow-primary);

    gap: 1rem;
  }

  .gooeyWrapper {
    transform-origin: left;
    width: 100%;
    transform: translate(-1rem, 0);
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
    width: 100%;
    flex-shrink: 0;

    padding-left: 0.5rem;
  }

  /* Your existing media queries */
  @media screen and (max-width: 1620px) {
    /* Update selector to use visible-title */

    .gooeyWrapper {
      transform: translate(0, 0);
    }

    #heroTitle {
      flex-direction: column !important;
      align-items: left !important;
      justify-content: left !important;

      gap: 2em !important;
    }

    .visible-title {
      padding-left: 0;
    }
  }

  @media screen and (max-width: 600px) {
    .visible-title {
      font-size: 2.5em;
    }
  }
</style>
