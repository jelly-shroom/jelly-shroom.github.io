<script>
  import ViewResumeButton from "../ViewResumeButton.svelte";
</script>

<div>
  <h2>welcome to my creative hub :)</h2>

  <div class="contact">
    <ViewResumeButton />
    <a href="mailto:jlsheng@usc.edu"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        id="email"
        width="32"
        height="32"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1"
        ><path
          d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
        ></path><path
          d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
        ></path><path
          d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
        ></path></svg
      >jlsheng@usc.edu</a
    >
  </div>
</div>

<style>
  h2 {
    font-family: "Work Sans";
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 2.5rem;
  }

  .contact {
    display: flex;
    align-items: center;
    gap: 2rem;

    font-family: "Work Sans";
  }

  a {
    color: var(--lightAccent);
    font-weight: 600;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    position: relative;

    transition: 0.25s;
  }

  a:hover {
    color: var(--darkAccent);
  }

  a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--darkAccent);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;

    transform: scaleX(0);
  }

  a:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 2em;
    }

    .contact {
      flex-direction: column;
      gap: 1em;
      align-items: start;
    }

    a {
      font-size: 1.25em;
    }
  }
</style>
