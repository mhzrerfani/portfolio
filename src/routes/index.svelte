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
