<script>
  // @ts-nocheck
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomColor() {
    const colors = [
      "#00f4ff", // cyan
      "#0091ff", // blue
      "#00ffb3", // aqua
      "#007d8c", // deep teal
      "#00476b", // dark blue
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createBlob() {
    return {
      width: getRandomNumber(100, 500) + "px",
      top: getRandomNumber(0, 100) + "%",
      left: getRandomNumber(0, 100) + "%",
      background: `radial-gradient(circle, ${getRandomColor()}, ${getRandomColor()})`,
      animationDuration: getRandomNumber(10, 30) + "s",
      startx: getRandomNumber(-30, 30) + "vw",
      starty: getRandomNumber(-30, 30) + "vh",
      endx: getRandomNumber(-100, 100) + "vw",
      endy: getRandomNumber(-100, 100) + "vh",
    };
  }

  // @ts-ignore
  let blobs = Array.from({ length: 5 }, createBlob);
</script>

<div class="blob-container">
  {#each blobs as blob}
    <div
      class="blob"
      style="width: {blob.width}; height: {blob.width}; top: {blob.top}; left: {blob.left}; background: {blob.background}; animation-duration: {blob.animationDuration}; --start-x: {blob.startx}; --start-y: {blob.starty}; --end-x: {blob.endx}; --end-y: {blob.endy};"
    ></div>
  {/each}
</div>

<style>
  .blob {
    position: absolute;
    border-radius: 50%;
    animation: move infinite alternate;
    filter: blur(100px);
    mix-blend-mode: screen;
    animation:
      moveBlob 60s infinite ease-in-out alternate,
      pulseGlow 8s infinite ease-in-out;
  }

  @keyframes pulseGlow {
    0%,
    100% {
      opacity: var(--blob-opacity);
    }
    50% {
      opacity: calc(var(--blob-opacity) * 1.5);
    }
  }

  .blob-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    background: var(--bioluminescent-bg);
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, #abbeb1, #a9b1aa);
    animation: moveBlob 60s infinite ease-in-out alternate;

    filter: blur(70px);
  }

  @keyframes moveBlob {
    0% {
      transform: translate(var(--start-x), var(--start-y));
    }
    100% {
      transform: translate(var(--end-x), var(--end-y));
    }
  }

  @keyframes move {
    0% {
      transform: translate(var(--start-x), var(--start-y));
    }
    100% {
      transform: translate(var(--end-x), var(--end-y));
    }
  }
</style>
