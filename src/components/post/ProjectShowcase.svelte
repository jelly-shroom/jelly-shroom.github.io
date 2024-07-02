<script lang="ts">
  import TargetUser from "./TargetUser.svelte";
  import Typography from "./Typography.svelte";
  import ColorPalette from "./ColorPalette.svelte";

  export let image: string;
  export let typeface: any[];
  export let colorPalette: any[];
</script>

<div class="showcase">
  <div class="logistics">
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
  .logistics {
    width: 400px;
  }
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

  @media (max-width: 800px) {
    .showcase {
      flex-direction: column;
    }

    .logistics {
      width: 90%;
    }
    .showcase img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    .showcase {
      margin-top: -10px;
    }
  }
</style>
