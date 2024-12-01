<script lang="ts">
  export let journal: {
    title: string;
    alt: string;
    image: string;
    date: Date;
    slug: string;
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC",
  };

  const formattedDate = journal.date.toLocaleDateString("en-US", dateOptions);

  const { image, title, alt, slug } = journal;

  export let itemClass: string = "journalEntry";
</script>

<a href={`/journal/${slug}`} class={itemClass}>
  <div class="imageWrapper">
    <img src={image} {alt} />
  </div>
  <div class="text">
    <h2>{title}</h2>
    <p>{formattedDate}</p>
  </div>
</a>

<style>
  .journalEntry {
    border-radius: 7px;
    overflow: hidden;
    width: fit-content;
    padding: 1rem;
    background-color: var(--bioluminescent-bg);

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: fadeTransitionIn 0.5s ease-out forwards;
    transition: 0.25s;
  }

  .journalEntry * {
    filter: saturate(0.7) contrast(0.7) brightness(0.7);
  }

  .journalEntry:hover {
    box-shadow:
      0 0 20px rgba(0, 244, 255, 0.5),
      0 0 4px 1px rgba(255, 255, 255, 1);
    color: white;
  }

  .journalEntry:hover * {
    filter: saturate(1) contrast(1) brightness(1);
  }

  .journalEntry .imageWrapper {
    display: flex;
    align-items: start;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: 0.25s;
    background-color: var(--bioluminescent-bg);
    height: 100%;
  }

  .imageWrapper img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    border-radius: 5px;

    object-position: center center;
  }

  @media screen and (max-width: 600px) {
  }
</style>
