<div class="text"></div>
<!-- SVG GOOEY FILTER-->
<svg>
  <filter id="gooey">
    <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur"
    ></feGaussianBlur>
    <feColorMatrix
      in="blur"
      mode="matrix"
      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -8"
      result="gooey"
    ></feColorMatrix>
    <feComposite in="SourceGraphic" in2="gooey" operator="atop"></feComposite>
  </filter>
</svg>

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
  div {
    --scale: 0.1;
  }
  .text {
    font: 900 1em/1.2 Quicksand;
    position: relative;
    color: #2e8b57; //sea green
    backdrop-filter: blur(12px);
    font-size: 500px;

    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    -o-filter: blur(0px);
    -webkit-filter: blur(0px);

    filter: url(#gooey);

    transform: scale(var(--scale));
    text-shadow: 15px 0px 0px #2e8b57;

    &::before,
    &::after {
      position: absolute;
      opacity: 0;
      transform: translate(0%, -50%);
      animation-duration: $totalDuration + s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
      filter: blur(9px);
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
      left: -48.5% !important;
      width: 200px !important;
    }
  }

  @media screen and (max-width: 600px) {
    .text {
      left: -48.5% !important;
      width: 200px !important;
    }

    div {
      --scale: 0.085;
    }
  }
</style>
