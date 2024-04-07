<script lang="ts">
  export let sectionTitle: string;
</script>

<div class="columnContainer">
  <div class="headColumn">
    <h2>{sectionTitle}</h2>
  </div>

  <div class="bodyColumn">
    <div>
      <slot name="description" />
    </div>
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

  .headColumn {
    width: 25%;
  }

  .bodyColumn {
    width: 65%;
  }

  .bodyColumn div {
    margin-top: 5px;
  }

  strong {
    color: white;
  }
</style>
