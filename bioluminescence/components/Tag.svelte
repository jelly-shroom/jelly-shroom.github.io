<script lang="ts">
  export let tag: string;
  export let tagType: string = "tagsWhite";
</script>

<div class={tagType}>
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

<style>
  .tagsWhite,
  .tagsGreen {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 100px;

    font-family: "Work Sans";
    font-size: small;

    color: white;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.3);
    text-transform: lowercase;
  }

  .tagsWhite svg,
  .tagsGreen svg {
    margin-left: -5px;
    margin-right: 5px;

    height: 20px;
    width: auto;

    fill: white;
  }

  .tagsGreen {
    border: 1px solid var(--darkAccent);

    color: var(--darkAccent);
  }

  .tagsGreen svg {
    fill: var(--darkAccent);
  }
</style>
