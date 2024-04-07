<script>
  import { onMount } from "svelte";
  import HeroDetails from "./HeroDetails.svelte";
  import HeroTitle from "./HeroTitle.svelte";

  let scale = 1;

  onMount(() => {
    const updateScale = () => {
      const scrollVal = window.scrollY;
      const newScale = Math.max(60, 100 - (scrollVal * 30) / 1500) / 100;
      scale = newScale;
    };

    window.addEventListener("scroll", updateScale);

    return () => {
      window.removeEventListener("scroll", updateScale);
    };
  });
</script>

<div class="contents" id="scaleOnScroll" style="transform: scale({scale});">
  <HeroTitle />
  <HeroDetails />
</div>

<style>
  .contents {
    z-index: 0;
    top: 30%;
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
      left: 15%;
    }
  }
</style>
