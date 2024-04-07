<div>
  <h1>hi! i'm jessica, and i design</h1>

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
</div>

<style>
  div {
    height: 90%;
    width: 100%;

    font-family: "Kodchasan", sans-serif;
  }

  h1 {
    font-family: "Kodchasan";
    font-size: 3em;
  }

  @media screen and (max-width: 1620px) {
    div {
      flex-direction: column !important;
      align-items: left !important;
      justify-content: left !important;

      gap: 1.75em !important;
    }

    div svg {
      height: 50;
    }
  }

  @media screen and (max-width: 800px) {
    svg {
      height: 125;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.5em;
    }
  }
</style>
