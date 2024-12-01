<script lang="ts">
  import { onMount } from "svelte";
  let supportsFilter = true; // Default to true

  onMount(() => {
    try {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const feGaussianBlur = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feGaussianBlur"
      );
      supportsFilter =
        typeof svg.style.filter !== "undefined" &&
        typeof feGaussianBlur.stdDeviationX !== "undefined";
    } catch (e) {
      supportsFilter = false;
    }
  });
</script>

<div class="text" />

<style lang="scss">
  //---------------------------------------------------
  // CHANGE THESE
  $series: "space", "ui", "products", "experiences";
  $duration: 1;
  $transition: 0.5;

  //---------------------------------------------------
  // APPEND EXTRA ITEM - An extra item is needed if the series is of odd length
  @if abs(length($series)) % 2 == 1 {
    $lastItem: nth($series, 1);
    $series: append($series, $lastItem);
  }

  //---------------------------------------------------
  // DON'T TOUCH THESE
  $seriesLength: length($series);
  $seriesSplitLength: $seriesLength / 2;
  $itemDuration: $duration + $transition;
  $twiceItemDuration: $itemDuration * 2;
  $totalDuration: $itemDuration * $seriesLength;

  //---------------------------------------------------

  // STYLE STUFF

  // div {
  //   --scale: 0.1;
  // }

  .text {
    font: 900 3rem Quicksand;
    position: relative;
    color: white;
    backdrop-filter: blur(12px);
    transform: scale(var(--scale));

    &::before,
    &::after {
      position: absolute;
      opacity: 0;
      transform: translate(0%, -50%);
      animation-duration: $totalDuration + s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
    &::before {
      content: nth($series, $seriesLength - 1);
      animation-name: items-odd;
    }
    &::after {
      content: nth($series, $seriesLength);
      animation-name: items-even;
      animation-delay: $itemDuration + s;
    }
    //---------------------------------------------------
    // TRANSITION ANIMATIONS
  }
  @mixin keyframes($index) {
    @for $i from 1 through $seriesLength {
      #{percentage((1 / $seriesLength) * $i - ($duration / $totalDuration))} {
        opacity: abs($i) % 2;
      }
      #{percentage((1 / $seriesLength) * $i)} {
        opacity: abs($i) % 2;
      }
    }
    @for $i from 1 through $seriesSplitLength {
      $item: $i * 2 - $index;
      #{percentage(($i - 1) * (1 / $seriesSplitLength))} {
        content: nth($series, $item);
      }
      #{percentage($i * (1 / $seriesSplitLength) - 0.000001)} {
        content: nth($series, $item);
      }
    }
  }
  @keyframes items-odd {
    @include keyframes(1);
  }

  @keyframes items-even {
    @include keyframes(0);
  }

  @media screen and (max-width: 1620px) {
    .text {
      width: 200px !important;
    }
  }

  @media screen and (max-width: 600px) {
    .text {
      width: 200px !important;
      font-size: 2.5rem;
    }
  }
</style>
