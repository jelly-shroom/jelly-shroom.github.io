<script>
  import ProfilePicture from "../images/aboutMe/aboutMepfp.jpg";
  import Scrollable from "./hero/Scrollable.svelte";
</script>

<Scrollable>
  <div class="aboutMeColumns">
    <div class="pfp">
      <img src={ProfilePicture.src} alt="jessica sheng" />
    </div>

    <div class="description">
      <h1>i’m jessica sheng, a designer based in la.</h1>
      <p>
        I am currently a student of the <strong>Iovine and Young Academy</strong
        >
        at the University of Southern California, and I am pursuing a degree in
        <strong>Arts, Technology, and the Business of Innovation</strong>. I
        love tinkering with new technologies and testing out new solutions to
        problems, and I am always looking for new ways to apply my skills to
        create meaningful experiences for others. Thanks for stopping by!
      </p>
    </div>
  </div>
</Scrollable>

<style>
  .pfp {
    width: 150px;
    height: auto;
    flex-shrink: 0;
  }
  strong {
    color: var(--darkAccent);
  }
  h1 {
    font-family: "Kodchasan";
    line-height: 1.5;
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    font-family: "Quicksand";
    line-height: 1.5;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }

  .aboutMeColumns {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    gap: 5%;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    .aboutMeColumns {
      margin-top: -50px;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
