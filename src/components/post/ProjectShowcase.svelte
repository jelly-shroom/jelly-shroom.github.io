<script lang="ts">
  import TargetUser from "./TargetUser.svelte";
  import Typography from "./Typography.svelte";
  import ColorPalette from "./ColorPalette.svelte";

  export let image: string;
  export let typeface: any[];
  export let colorPalette: any[];
</script>

<div class="showcase">
  <div style="width: 400px;">
    <TargetUser>
      <slot name="targetUser" slot="targetUser" />
    </TargetUser>
    <Typography {typeface}>
      <slot name="typography" />
    </Typography>
    <ColorPalette {colorPalette} />
  </div>

  <img src={image} alt="Project Showcase" />
</div>

<style>
  .showcase {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    gap: 100px;
  }

  .showcase img {
    width: auto;
    height: 650px;

    overflow: hidden;

    object-fit: cover;
  }
</style>
