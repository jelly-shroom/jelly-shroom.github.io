<script lang="ts">
  export let statements: {
    problem: string;
    solution: string;
  };
  const { problem, solution } = statements;
</script>

<div class="columnContainer">
  <div class="problem">
    <h2>Problem</h2>
    <p>{problem}</p>
  </div>
  <div class="solution">
    <h2>Solution</h2>
    <p>{solution}</p>
  </div>
</div>

<style>
  .problem {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;
    width: 50%;

    padding: 30px;
    padding-right: 40px;
    padding-left: 40px;

    margin-top: 30px;
    margin-bottom: 30px;

    color: var(--lightAccent);
  }

  .problem strong,
  .problem h2 {
    color: var(--darkAccent);
  }

  .solution {
    border: 1px solid var(--darkAccent);
    border-radius: 25px;

    padding: 30px;
    padding-right: 40px;
    padding-left: 40px;

    margin-top: 30px;
    margin-bottom: 30px;

    background: var(--darkAccent);
    color: #ebebeb;

    width: 50%;

    margin: auto;
  }

  .solution strong,
  .solution h2 {
    color: white;
  }

  @media screen and (max-width: 800px) {
    .problem,
    .solution {
      width: 100%;
    }
  }
</style>
