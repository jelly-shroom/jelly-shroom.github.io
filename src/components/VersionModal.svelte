<script>
  import { onMount } from 'svelte';

  let showModal = false;
  const NEW_SITE_URL = 'https://jellyshroom.com';
  const STORAGE_KEY = 'version-modal-dismissed';

  onMount(() => {
    // Check if user has already dismissed the modal
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      // Small delay to ensure smooth entry animation
      setTimeout(() => {
        showModal = true;
      }, 500);
    }
  });

  function handleVisitNew() {
    window.location.href = NEW_SITE_URL;
  }

  function handleStay(event) {
    // Only close if clicking the overlay itself, not the content
    if (event && event.target === event.currentTarget) {
      showModal = false;
      // Remember dismissal for this session only
      sessionStorage.setItem(STORAGE_KEY, 'true');
    }
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      handleStay(event);
    }
  }
</script>

{#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div 
    class="modal-overlay" 
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    on:click={handleOverlayClick}
    on:keydown={(e) => e.key === 'Escape' && handleStay(e)}
    tabindex="-1"
  >
    <div class="modal-content" role="document">
      <h2 id="modal-title">New Version Available!</h2>
      <p>I've launched a new version of my website with updated content and design. It's also more interactive and engaging, and I'd love for you to check it out!</p>
      <div class="modal-buttons">
        <button class="button button-primary" on:click={handleVisitNew}>
          Visit New Site
        </button>
        <button class="button button-secondary" on:click={() => { showModal = false; sessionStorage.setItem(STORAGE_KEY, 'true'); }}>
          Stay Here
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease-out;
  }

  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 2.5rem;
    max-width: 500px;
    width: 90%;
    text-align: center;
    animation: slideUp 0.3s ease-out;
  }

  .modal-content h2 {
    font-family: "Work Sans";
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--darkAccent);
    margin-bottom: 1rem;
  }

  .modal-content p {
    font-family: "Work Sans";
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 2rem;
  }

  .modal-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .button {
    font-family: "Work Sans";
    font-weight: 500;
    font-size: 1rem;
    text-transform: lowercase;
    border: none;
    border-radius: 10px;
    padding: 0.875rem 1.75rem;
    cursor: pointer;
    transition: all 0.25s ease;
    min-width: 140px;
  }

  .button-primary {
    background-color: var(--darkAccent);
    color: #fff;
  }

  .button-primary:hover {
    background-color: var(--lightAccent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
  }

  .button-secondary {
    background-color: transparent;
    color: var(--darkAccent);
    border: 2px solid var(--darkAccent);
  }

  .button-secondary:hover {
    background-color: rgba(46, 139, 87, 0.1);
    transform: translateY(-2px);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 600px) {
    .modal-content {
      padding: 2rem 1.5rem;
    }

    .modal-content h2 {
      font-size: 1.5rem;
    }

    .modal-content p {
      font-size: 0.95rem;
    }

    .modal-buttons {
      flex-direction: column;
    }

    .button {
      width: 100%;
    }
  }
</style>

