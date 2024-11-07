<script lang="ts">
  export let journal: {
    title: string;
    alt: string;
    image: string;
    date: string | Date;
    slug: string;
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const formattedDate = new Date(journal.date).toLocaleDateString(
    "en-US",
    dateOptions
  );

  const { image, title, alt, slug } = journal;

  export let itemClass: string = "journalEntry";
</script>

<a href={`/journal/${slug}`} class={itemClass}>
  <div>
    <img src={image} {alt} class="cover-image" />
    <h2>{title}</h2>
    <p>{formattedDate}</p>
  </div>
</a>

<style>
  .journalEntry {
    border-radius: 7px;
    overflow: hidden;
    width: fit-content;
    max-width: 30vw;
    max-height: 80vh;
    padding: 1rem;
    background-color: white;

    position: relative;
    display: flex;
    align-items: center;

    cursor: pointer;

    animation: fadeTransitionIn 0.5s ease-out forwards;
    transition: 0.25s;
  }

  .journalEntry:hover {
    background-color: var(--lightAccent);
    color: white;
  }

  .cover-image {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: fit;
    object-position: center center;
  }

  /*for the button on homepage portfolio*/

  @media screen and (max-width: 600px) {
  }
</style>
