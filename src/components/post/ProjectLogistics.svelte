<script lang="ts">
  import TargetUser from "./TargetUser.svelte";
  //   export let targetUser: string;
  //   export let typography: string[];
  //   export let colorPalette: string[];
</script>

<div>
  <TargetUser />
  <slot name="targetUser" />
</div>

<style>
  .designLogistics {
    width: 400px;
  }

  .designLogistics .targetUser,
  .designLogistics .typography {
    background-color: var(--darkAccent);
    border-radius: 25px;
    padding: 30px;
    color: #ebebeb;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;

    margin-bottom: 20px;
  }

  .designLogistics .typography {
    background-color: var(--lightAccent);
    text-align: left;
  }

  .targetUser strong,
  .targetUser h3,
  .typography strong,
  .typography h3 {
    font-weight: 700;
    color: white;
    font-size: 1.25em;

    text-align: center;
  }

  .colorPalette {
    display: flex;
    margin-top: 20px;
  }

  .colorPalette p {
    font-size: 0.75em;
  }

  .colorPalette div {
    flex: 1;
    height: 35px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
