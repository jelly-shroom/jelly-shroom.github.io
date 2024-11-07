<script lang="ts">
  export let date: Date;

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  const formattedDate = formatDate(date);
</script>

<div class="heading">
  <slot name="header" />
  <h3>
    {date}
  </h3>
</div>

<style>
  .heading {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 0.25rem;
  }
</style>
