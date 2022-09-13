<style type="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap");

  .glitched {
    @apply text-7xl text-center w-[80%] mx-auto font-old;
    color: transparent;
    text-shadow: -4px 3px 0 white, -14px 10px 0 rgba(10, 14, 39, 1);
    opacity: 0.7;
  }
</style>

<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import GlitchedWriter, { wait } from "../lib/GlitchWriter";

  let glitchedEl: HTMLDivElement,
    finishCounter = 0;

  const dispatch = createEventDispatcher(),
    onFinishCallback = () => {
      finishCounter++;
      if (finishCounter === 2) {
        dispatch("finish");
      }
    };

  onMount(async () => {
    const writer = new GlitchedWriter(
      glitchedEl,
      "typewriter",
      onFinishCallback
    );
    await writer.write("Mahziyar Erfani Presents :)");
    await wait(2500);
    await writer.write("Hello There and Welcome");
    await wait(1500);
  });
</script>

<div
  out:fade="{{ delay: 1500, duration: 1200 }}"
  class="glitched"
  bind:this="{glitchedEl}"
></div>
