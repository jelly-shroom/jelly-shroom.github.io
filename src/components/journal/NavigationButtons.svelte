<script lang="ts">
  export let nextJournal: {
    nextTitle: string;
    nextSlug: string;
  } | null;

  export let previousJournal: {
    previousTitle: string;
    previousSlug: string;
  } | null;
</script>

<div class="navContainer">
  {#if previousJournal}
    <a class="back" href={`/journal/${previousJournal.previousSlug}`}>
      <div class="back">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.5 12C22.5 11.8011 22.421 11.6104 22.2803 11.4697C22.1397 11.329 21.9489 11.25 21.75 11.25H4.0605L8.781 6.53103C8.92183 6.3902 9.00095 6.19919 9.00095 6.00003C9.00095 5.80087 8.92183 5.60986 8.781 5.46903C8.64017 5.3282 8.44916 5.24908 8.25 5.24908C8.05084 5.24908 7.85983 5.3282 7.719 5.46903L1.719 11.469C1.64916 11.5387 1.59374 11.6215 1.55593 11.7126C1.51812 11.8037 1.49866 11.9014 1.49866 12C1.49866 12.0987 1.51812 12.1964 1.55593 12.2875C1.59374 12.3786 1.64916 12.4614 1.719 12.531L7.719 18.531C7.85983 18.6719 8.05084 18.751 8.25 18.751C8.44916 18.751 8.64017 18.6719 8.781 18.531C8.92183 18.3902 9.00095 18.1992 9.00095 18C9.00095 17.8009 8.92183 17.6099 8.781 17.469L4.0605 12.75H21.75C21.9489 12.75 22.1397 12.671 22.2803 12.5304C22.421 12.3897 22.5 12.1989 22.5 12Z"
          />
        </svg>

        <h3>{previousJournal.previousTitle}</h3>
      </div>
    </a>
  {/if}

  {#if nextJournal}
    <a class="forward" href={`/journal/${nextJournal.nextSlug}`}>
      <div class="forward">
        <h3>{nextJournal.nextTitle}</h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 12C1.5 11.8011 1.57902 11.6104 1.71967 11.4697C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53103C15.0782 6.3902 14.9991 6.19919 14.9991 6.00003C14.9991 5.80087 15.0782 5.60986 15.219 5.46903C15.3598 5.3282 15.5508 5.24908 15.75 5.24908C15.9492 5.24908 16.1402 5.3282 16.281 5.46903L22.281 11.469C22.3508 11.5387 22.4063 11.6215 22.4441 11.7126C22.4819 11.8037 22.5013 11.9014 22.5013 12C22.5013 12.0987 22.4819 12.1964 22.4441 12.2875C22.4063 12.3786 22.3508 12.4614 22.281 12.531L16.281 18.531C16.1402 18.6719 15.9492 18.751 15.75 18.751C15.5508 18.751 15.3598 18.6719 15.219 18.531C15.0782 18.3902 14.9991 18.1992 14.9991 18C14.9991 17.8009 15.0782 17.6099 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5304C1.57902 12.3897 1.5 12.1989 1.5 12Z"
          />
        </svg>
      </div>
    </a>
  {/if}
</div>

<style>
  h3 {
    margin: 0;
  }
  a {
    font-weight: 400;
    text-decoration: none;
    padding: 0;
    transition: 0.25s;
    position: relative;
  }

  a:hover {
    color: white;
  }

  a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    box-shadow: 0 0 10px 0 var(--glow-primary);

    transform-origin: bottom right;
    transition: transform 0.25s ease-out;

    transform: scaleX(0);
  }

  a:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
  .navContainer {
    margin: 4rem 0;
    display: flex;
    justify-content: space-between;
  }

  .forward,
  .back {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;

    transition: 0.25s;
  }

  .forward:hover,
  .back:hover {
    text-shadow: 0 0 10px var(--glow-primary);
  }

  .back {
    margin-right: auto;
  }

  .forward {
    margin-left: auto;
  }
</style>
