<style type="postcss">
  .wrapper {
    @apply flex flex-col items-center justify-center z-[1000] absolute w-full opacity-90 max-w-[700px] gap-2;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .link {
    @apply text-neutral-800 border-b-4 border-transparent box-border hover:border-neutral-800 text-xl text-center font-bold;
  }
</style>

<script>
  import { fade } from "svelte/transition";

  import avatar from "../assets/img/avatar.jpg";
  import frame from "../assets/img/floral-design-with-curled-edges.png";
</script>

<div class="wrapper" in:fade="{{ delay: 1500, duration: 1200 }}">
  <img
    class="rounded-full w-48 h-48 grayscale opacity-90"
    src="{avatar}"
    alt="avatar"
  />
  <div
    class="font-old text-neutral-800 mt-3 text-6xl mobile:text-5xl text-center"
  >
    Mahziyar Erfani
  </div>
  <p
    class="text-neutral-800 mobile:text-xl text-2xl text-center mx-8 font-semibold "
  >
    I'm a Junior Front-End Developer and UI/UX designer based in Iran who wants
    to create cool stuff, especially a time machine to travel back to the 30's.
    also I love Magic, Music and Dota.
  </p>
  <div class="flex gap-5 my-5">
    <a href="https://github.com/mhzrerfani" class="link">Github</a>
    <a href="https://dribbble.com/mhzrerfani" class="link">Dribbble</a>
    <a href="https://twitter.com/mhzrerfani" class="link">Twitter</a>
  </div>
  <img class="w-52 opacity-50 " src="{frame}" alt="frame" />
</div>
