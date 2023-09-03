<script>
  import { fade } from "svelte/transition";

  const links = [
    { title: "Resume", url: "./resume" },
    { title: "Github", url: "https://github.com/mhzrerfani" },
    { title: "Dribbble", url: "https://dribbble.com/mhzrerfani" },
    { title: "Twitter", url: "https://twitter.com/mhzrerfani" },
  ];
</script>

<div class="wrapper" in:fade={{ delay: 1500, duration: 1200 }}>
  <img class="avatar" src="/img/avatar.jpg" alt="avatar" />
  <div class="name">Mahziyar Erfani</div>
  <p class="description">
    I'm a Front-End Developer and UI/UX designer based in Iran who wants to
    create cool stuff, especially a time machine to travel back to the 30's.
    also I love Magic, Music and Dota.
  </p>
  <div class="links-wrapper">
    {#each links as { title, url }}
      <a href={url} target="_blank" class="link">{title}</a>
    {/each}
  </div>
  <img
    class="frame"
    src="/img/floral-design-with-curled-edges.png"
    alt="frame"
  />
</div>

<style lang="postcss">
  .wrapper {
    @apply flex flex-col items-center justify-center z-[1000] absolute w-full opacity-90 max-w-[700px] gap-2;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .link {
    @apply text-neutral-800 p-2 border-b-4 border-transparent box-border hover:border-neutral-800  duration-75 text-xl text-center font-bold;
  }

  .avatar {
    @apply select-none rounded-full w-48 h-48 grayscale opacity-90;
  }

  .name {
    @apply select-none font-old text-neutral-800 mt-3 text-6xl mobile:text-5xl text-center;
  }

  .description {
    @apply select-none text-neutral-800/80 mobile:text-lg text-xl text-center mx-8 font-bold;
  }

  .links-wrapper {
    @apply flex gap-5 my-5;
  }

  .frame {
    @apply w-52 opacity-50 select-none;
  }
</style>
