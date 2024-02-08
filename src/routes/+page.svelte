<script>
  import Welcome from "../components/Welcome.svelte";
  import Information from "../components/Information.svelte";
  import TV from "../components/TV.svelte";
  import Start from "../components/Start.svelte";
  import { description } from "../constants";

  import "../app.css";

  let isIntroFinished = false;
  let isIntroStarted = false;

  function startIntro() {
    isIntroStarted = true;
  }
</script>

<svelte:head>
  <title>Mahziyar Erfani Portfolio</title>
  <meta property="description" content={description} />
  <meta property="og:image" content="/preview.png" />
  <meta property="og:title" content="Mahziyar Erfani Portfolio" />
  <meta property="og:description" content={description} />
</svelte:head>

{#if !isIntroStarted}
  <Start on:start={startIntro} />
{:else}
  <TV>
    {#if !isIntroFinished}
      <Welcome on:finish={() => (isIntroFinished = !isIntroFinished)} />
    {:else}
      <Information />
    {/if}
  </TV>
{/if}
