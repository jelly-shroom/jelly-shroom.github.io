<script>
  import { onMount } from "svelte";

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
  <slot />
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

  @media screen and (max-width: 600px) {
    .contents {
      top: 20%;
      max-width: 80%;
      left: 10%;
    }
  }
</style>
