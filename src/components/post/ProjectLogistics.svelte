<script lang="ts">
  import TargetUser from "./TargetUser.svelte";
  import Typography from "./Typography.svelte";
  import ColorPalette from "./ColorPalette.svelte";
  //   export let targetUser: string;
  //   export let typography: string[];
  //   export let colorPalette: string[];
</script>

<div>
  <TargetUser>
    <slot name="targetUser" slot="targetUser" />
  </TargetUser>
  <Typography typeface={[]} />
  <ColorPalette colorPalette={[]} textColor={[]} />
</div>

<style>
  div {
    width: 400px;
  }
</style>
