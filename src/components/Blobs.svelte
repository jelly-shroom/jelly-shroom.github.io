<script>
  // @ts-nocheck
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 41) + 120;
    const saturation = Math.floor(Math.random() * 31) + 50;
    const brightness = Math.floor(Math.random() * 21) + 60;
    const rgbColor = hslToRgb(hue / 360, saturation / 100, brightness / 100);
    return rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2]);
  }

  function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  function rgbToHex(r, g, b) {
    return (
      "#" +
      ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()
    );
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
