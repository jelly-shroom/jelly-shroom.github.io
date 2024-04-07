<script lang="ts">
  import { string } from "astro/zod";
  import ProjectLogistics from "./ProjectLogistics.svelte";
  export let image: string;
</script>

<div>
  <ProjectLogistics>
    <slot name="targetUser" slot="targetUser" />
  </ProjectLogistics>

  <img src={image} alt="Project Showcase" />
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    gap: 100px;
  }

  div img {
    width: auto;
    height: 650px;

    overflow: hidden;

    object-fit: cover;
  }
</style>
