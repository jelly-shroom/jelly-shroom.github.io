<script>
  import ProfilePicture from "../../images/aboutMe/aboutMepfp.jpg";
  import Scrollable from "../hero/Scrollable.svelte";
  import ViewResumeButton from "../ViewResumeButton.svelte";
</script>

<Scrollable>
  <div class="aboutMeHero">
    <div class="pfp">
      <img src={ProfilePicture.src} alt="jessica sheng" />
    </div>

    <div class="description">
      <h1>i’m jessica sheng, a designer based in la.</h1>
      <p>
        I am currently a student of the <a
          href="https://iovine-young.usc.edu/"
          target="blank_">Iovine and Young Academy</a
        >
        at the University of Southern California. I love tinkering with new technologies
        and testing out new solutions to problems, and I am always looking for new
        ways to apply my skills to create meaningful experiences for others. Thanks
        for stopping by!
      </p>
    </div>
  </div>
</Scrollable>

<style>
  .pfp {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
  }
  a {
    color: var(--darkAccent);
    font-weight: bold;
    text-decoration: underline;
  }
  h1 {
    font-family: "Quicksand";
    font-weight: bold;
    line-height: 1.5;
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    font-family: "Work Sans";
    line-height: 1.5;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }

  .aboutMeHero {
    margin-top: 75px;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    .aboutMeHero {
      margin-top: 0px;
      flex-direction: column;
      gap: 20px;
    }

    h1 {
      line-height: 1.5;
      font-size: 1.2em;
      margin-bottom: 10px;
    }
  }
</style>
