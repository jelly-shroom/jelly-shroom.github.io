<script lang="ts">
  import ProfileCard from "./ProfileCard.svelte";
</script>

<div class="columnContainer">
  <div class="halfColumn">
    <ProfileCard image={""}>
      <slot name="name" slot="name" />
      <slot name="info" slot="info" />
      <slot name="furtherInfo" slot="furtherInfo" />
    </ProfileCard>
  </div>
</div>

<style>
  .columnContainer {
    display: flex;
    /* justify-content: space-between; */
    gap: 5%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .halfColumn {
    width: 50%;
  }

  div :global(strong) {
    color: var(--darkAccent);
  }
</style>
