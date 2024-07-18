<script lang="ts">
  export let galleryStyle: string = "";
</script>

<div class={galleryStyle}>
  <slot />
</div>

<style>
  div {
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    display: grid;
    gap: 1rem;
  }

  .drTrustPhotoGallery {
    max-width: 80%;
    grid-template-areas:
      "a b c"
      "d e f"
      "d g f"
      "h h h";
  }

  .aboutMeVideo {
    grid-template-areas: ". b .";
  }

  .aboutMeVideo :global(div) {
    grid-area: b;
    width: 640px;
    height: 360px;
    margin: auto;
  }

  @media screen and (max-width: 800px) {
    div {
      grid-template-columns: repeat(1, 1fr);
    }

    .drTrustPhotoGallery {
      grid-template-areas:
        "a a a"
        "b b b"
        "c c c"
        "d d d"
        "e e e"
        "f f f"
        "g g g"
        "h h h";
    }

    .aboutMeVideo {
      grid-template-areas: "b";
    }

    .aboutMeVideo :global(div) {
      width: 300px;
      height: 200px;
    }
  }
</style>
