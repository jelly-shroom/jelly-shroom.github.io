<script lang="ts">
  export let project: {
    title: string;
    description: string;
    image: any;
    tags: string[];
    slug: string;
  };
  const { image, title, tags, description } = project;
</script>

<a href="dr_trust.html" class="portfolio-item">
  <img src={image.src} alt="Dr. Trust" class="cover-image" />
  <div class="tagContainer">
    {#each tags as tag}
      <div class="tags">
        {#if tag.startsWith("<Award/>")}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.193 17.2454C14.3885 17.5171 13.4842 17.6083 12.5808 17.6083C11.6775 17.6083 10.7722 17.5171 9.96867 17.2454L9.06435 16.9728C8.66211 16.7913 8.46147 16.7011 8.16003 16.5197V21.4176C8.16003 21.6902 8.36163 21.9619 8.56227 22.1433C8.66211 22.2345 8.86371 22.2345 8.96355 22.2345C9.16515 22.2345 9.26499 22.2345 9.46563 22.1433L12.48 20.5113L15.4944 22.1433C15.6283 22.2323 15.7854 22.2798 15.9461 22.2798C16.1068 22.2798 16.2639 22.2323 16.3978 22.1433C16.6992 21.9619 16.8 21.7805 16.8 21.4176V16.5197C16.294 16.8225 15.7548 17.066 15.193 17.2454ZM12.48 15.5597C13.4255 15.5597 14.3618 15.3734 15.2353 15.0116C16.1089 14.6498 16.9026 14.1194 17.5712 13.4508C18.2398 12.7823 18.7701 11.9885 19.132 11.115C19.4938 10.2414 19.68 9.30519 19.68 8.35967C19.68 7.41415 19.4938 6.47789 19.132 5.60435C18.7701 4.7308 18.2398 3.93708 17.5712 3.2685C16.9026 2.59992 16.1089 2.06957 15.2353 1.70774C14.3618 1.3459 13.4255 1.15967 12.48 1.15967C10.5705 1.15967 8.73912 1.91824 7.38886 3.2685C6.0386 4.61876 5.28003 6.45011 5.28003 8.35967C5.28003 10.2692 6.0386 12.1006 7.38886 13.4508C8.73912 14.8011 10.5705 15.5597 12.48 15.5597Z"
            />
          </svg>
          {tag.replace("<Award/>", "")}
        {:else}
          {tag}
        {/if}
      </div>
    {/each}
  </div>

  <div class="description">
    <h2>
      {title}
    </h2>
    <p>
      {@html description}
    </p>
  </div>
</a>

<style>
  .tagContainer {
    display: flex;
    pointer-events: none;
    opacity: 0;
    transition: 0.25s;

    justify-content: left;
    gap: 10px;
    position: absolute;
    align-self: flex-start;
    float: left;
    margin: 30px;
  }

  .tagContainer .tags {
    border: 1px solid rgba(255, 255, 255, 0.9);
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
    text-transform: lowercase;

    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  .tags {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 100px;

    font-family: "Sono";
    font-size: 14px;
  }

  .tags svg {
    margin-left: -5px;
    margin-right: 5px;

    height: 20px;
    width: auto;

    fill: white;
  }
  .portfolio-item {
    border-radius: 25px;
    overflow: hidden;
    width: 100%;
    padding: 0px;

    position: relative;
    display: flex;
    align-items: center;

    cursor: pointer;

    animation: fadeTransitionIn 0.5s ease-out forwards;
  }

  .portfolio-item::after {
    content: "";
    border-radius: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0px;
    right: 0px;
    box-shadow:
      rgba(122, 124, 122, 0.5) 4px 4px 2px 0px inset,
      rgba(255, 255, 255, 0.9) -4px -4px 2px 0px inset,
      rgba(0, 0, 0, 0.3) 0px 30px 100px -24px;
  }

  .portfolio-item .description {
    opacity: 0;

    position: absolute;
    /* text-align: center; */
    margin: 0 auto;
    color: rgb(235, 235, 235);
    width: 85%;
    height: auto;

    left: 50%;
    transform: translate(-50%, 0%);

    pointer-events: none;
    transition: 0.25s;
  }

  .portfolio-item .description h2 {
    color: white;
    font-family: "Kodchasan";
    font-weight: 700;

    margin-bottom: 20px;
  }

  .portfolio-item .description p {
    font-family: "Quicksand";
    line-height: 1.5;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    object-position: center center;

    transition: 0.25s;
  }

  .portfolio-item:hover .cover-image {
    filter: brightness(50%) blur(5px);
    -webkit-filter: blur(5px) brightness(50%);
  }

  .portfolio-item:hover .description,
  .portfolio-item:hover .tagContainer {
    opacity: 1;
  }

  /*for the button on homepage portfolio*/

  @media screen and (max-width: 800px) {
    .portfolio-item .description {
      width: 90%;
    }
  }

  @media screen and (max-width: 400px) {
    .portfolio-item .description,
    .tagContainer {
      display: none;
    }

    .portfolio-item:hover .cover-image {
      filter: none;
    }

    .tags {
      color: var(--darkAccent);
      border: 1px solid var(--darkAccent);
      text-transform: lowercase;
    }

    .tags svg {
      fill: var(--darkAccent);
    }
  }
</style>
