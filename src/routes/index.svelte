<script>
  import Welcome from "../components/Welcome.svelte";
  import Information from "../components/Information.svelte";
  import TV from "../components/TV.svelte";
  import Start from "../components/Start.svelte";

  import "../app.css";

  let isIntroFinished = false;
  let isIntroStarted = false;

  const startIntro = () => {
    isIntroStarted = true;
  };
</script>

<svelte:head>
  <title>Mahziyar Erfani Portfolio</title>
  <meta
    property="description"
    content="I'm Mahziyar Erfani and this is my portfolio and resume. I'm a Front-End Developer and UI/UX designer based in Iran who wants to
    create cool stuff, especially a time machine to travel back to the 30's.
    also I love Magic, Music and Dota."
  />
  <meta property="og:image" content="/preview.png" />
  <meta property="og:title" content="Mahziyar Erfani Portfolio" />
  <meta
    property="og:description"
    content="I'm Mahziyar Erfani and this is my portfolio and resume. I'm a Front-End Developer and UI/UX designer based in Iran who wants to
    create cool stuff, especially a time machine to travel back to the 30's"
  />
</svelte:head>

{#if !isIntroStarted}
  <Start on:start="{startIntro}" />
{:else}
  <TV>
    {#if !isIntroFinished}
      <Welcome on:finish="{() => (isIntroFinished = !isIntroFinished)}" />
    {:else}
      <Information />
    {/if}
  </TV>
{/if}
