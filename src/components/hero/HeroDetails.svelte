<script>
  import ViewResumeButton from "../ViewResumeButton.svelte";
</script>

<div>
  <h2>welcome to my creative hub :)</h2>

  <ul>
    <li>spatial design</li>
    <li>product design</li>
    <li>ui design</li>
    <li>...and more!</li>
  </ul>

  <ViewResumeButton />
</div>

<style>
  h2 {
    font-family: "Kodchasan";
    font-size: 2.5em;
    font-weight: normal;
    margin-bottom: 20px;
  }

  ul {
    margin-top: 0px;
    margin-bottom: 30px;

    font-family: "Sono";
    list-style-type: none;
    padding-inline-start: 0px;
    width: 550px;

    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
  }

  @media screen and (max-width: 800px) {
    ul {
      display: none;
    }

    div {
      position: relative;
      top: -75px !important;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 2em;
      margin-bottom: 40px;
    }
  }
</style>
