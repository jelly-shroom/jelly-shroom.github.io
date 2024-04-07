<div class="nextProjectContainer">
  <h2>Next Project</h2>

  <a class="nextProjectButton" href="dr_trust.html">
    <img src="resources/images/covers/Dr_Trust.jpg" />
    <div>
      <h2>
        Facilitating medical conversations through mixed reality collaboration
      </h2>
      <p>
        Dr. Trust allows doctors to <strong>educate and reassure</strong>
        patients through clear
        <strong>visualizations</strong> of medical issues and how they can be treated.
      </p>
    </div>
  </a>
</div>

<style>
  .nextProjectContainer {
    margin: auto;
    max-width: 50%;

    margin-top: 75px;
    margin-bottom: 75px;

    color: var(--darkAccent);
  }

  .nextProjectButton {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;

    margin-top: 20px;
    padding: 10px;
    padding-right: 20px;
    color: var(--darkAccent);

    display: flex;

    transition: 0.25s;
  }

  .nextProjectButton div {
    margin-top: 10px;
  }

  .nextProjectButton:hover {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;
    background-color: var(--darkAccent);
    color: #ebebeb;
  }

  .nextProjectButton img {
    width: auto;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;
    margin-right: 30px;

    flex-shrink: 0;
  }
</style>
