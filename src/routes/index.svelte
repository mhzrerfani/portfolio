<script>
  import Welcome from "../components/Welcome.svelte";
  import Information from "../components/Information.svelte";
  import TV from "../components/TV.svelte";

  let isIntroFinished = false;
</script>

<TV>
  {#if !isIntroFinished}
    <Welcome on:finish="{() => (isIntroFinished = !isIntroFinished)}" />
  {:else}
    <Information />
  {/if}
</TV>
