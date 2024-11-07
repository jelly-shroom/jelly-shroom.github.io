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
    margin-bottom: 3rem;
  }

  :global(.heading p) {
    font-family: "Quicksand";
    font-weight: bold;
  }

  div :global(strong) {
    color: var(--darkAccent);
  }

  @media screen and (max-width: 600px) {
    .heading {
      margin-top: -1rem;
    }

    :global(.heading p) {
      font-size: 1.5rem;
    }
  }
</style>
