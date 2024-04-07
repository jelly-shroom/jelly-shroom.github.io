<div class="portfolio">
  <div>
    <h1>featured projects</h1>
  </div>

  <div class="column-contents">
    <slot />
  </div>
  <!-- portfolio content end-->
  <div class="buttonWrapper">
    <a class="button" href="jessicasheng-portfolio.html">view all projects</a>
  </div>
</div>

<style>
  .column-contents {
    display: grid;
    margin-bottom: 50px;

    /* grid-auto-columns: minmax(300px, auto);
    grid-auto-rows: minmax(300px, auto); */
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense; /* don't forget this */
    gap: 30px;

    /* justify-content: center; */
  }

  .portfolio h1 {
    font-family: "Kodchasan";
    font-weight: 700;
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 1.25em;
  }
</style>
