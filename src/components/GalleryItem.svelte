<script lang="ts">
  export let image: any;
  export let alt: string;
  export let caption: string;
</script>

<div>
  <img src={image.src} {alt} />
  <p>{caption}</p>
</div>
