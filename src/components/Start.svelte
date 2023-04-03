<style>
</style>

<script>
  import { createEventDispatcher } from "svelte";
  import frame from "/img/frame.svg";

  const dispatch = createEventDispatcher();
</script>

<div
  class="w-screen h-screen bg-neutral-800 flex items-center justify-center select-none"
>
  <div class="w-96 relative flex h-auto items-center justify-center">
    <img class="relative bottom-4 w-full" src="{frame}" alt="frame" />
    <button
      class="absolute w-44 pb-0 z-50 text-white font-old text-5xl border-b-4 border-transparent hover:border-white"
      on:click="{() => dispatch('start')}"
    >
      Start
    </button>
  </div>
</div>
