<script>
  import HeroDetails from "./HeroDetails.svelte";
  import HeroTitle from "./HeroTitle.svelte";
</script>

<div class="contents" id="scaleOnScroll">
  <HeroTitle />
  <HeroDetails />
</div>

<style>
  .contents {
    z-index: 0;
    top: 45%;
    left: 20%;
    transform: translate(0%, -50%);
    max-width: 60%;

    position: fixed;
  }

  #scaleOnScroll {
    z-index: 0;
  }

  @media screen and (max-width: 400px) {
    .contents {
      max-width: 90%;
      top: 50%;
      left: 15%;
    }
  }
</style>
