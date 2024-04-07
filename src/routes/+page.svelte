<script>
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import Blobs from "../components/Blobs.svelte";

  import "../styles/general.css";
  import "../styles/home.css";
  import "../styles/fonts.css";
</script>

<Navbar />
<div id="heroWrapper">
    <Hero />
    <Blobs />
</div>

