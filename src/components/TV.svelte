<style lang="postcss">
  .screen {
    @apply overflow-hidden relative h-screen w-screen;
  }

  .screen::after {
    @apply content-[""] absolute w-full h-full box-border border-[75vw] border-solid border-[#0a0a0a] border-l-[50vw] border-r-[50vw];
    animation: turn-on 1s ease 1s 2, turned-on 1s ease 2s infinite;
  }

  .error-effect {
    @apply absolute w-full h-full bg-[#111] flex items-center justify-center;
    background-size: 80%;
    -moz-animation: noise 200ms infinite linear;
    -o-animation: noise 200ms infinite linear;
    -webkit-animation: noise 200ms infinite linear;
    animation: noise 200ms infinite linear;
    background-image: url(data:image/png;base64,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);
  }

  .error-effect::before {
    @apply content-[""] absolute w-full h-1/5;
    background: rgba(255, 255, 255, 0.2);
    -moz-animation: noiseeffect 4000ms infinite linear;
    -o-animation: noiseeffect 4000ms infinite linear;
    -webkit-animation: noiseeffect 4000ms infinite linear;
    animation: noiseeffect 4000ms infinite linear;
    border-radius: 50% / 5%;
  }

  .error-effect::after {
    @apply content-[""] absolute w-full h-full;
    background: radial-gradient(transparent 50%, rgba(0, 0, 0, 0.8)),
      linear-gradient(rgba(255, 255, 255, 0.4) 10%, transparent);
    box-shadow: inset 0 5px 25px rgba(255, 255, 255, 0.2),
      inset 5px 0 15px rgba(255, 255, 255, 0.2),
      inset -5px 0 15px rgba(255, 255, 255, 0.1), 0 0 10px rgba(0, 0, 0, 1),
      inset 0 200px 5px rgba(255, 255, 255, 0.05);
  }

  .old-tv-content {
    @apply flex items-center justify-center w-full;
  }

  .old-tv-content::after {
    @apply content-[""] absolute right-[2.5%] w-[95%] h-[95%] opacity-30;
    background: repeating-linear-gradient(0, #fff, #fff 2px, transparent 4px);
    border-radius: 50% / 5%;
    -moz-animation: crt-pixels 20ms alternate infinite;
    -o-animation: crt-pixels 20ms alternate infinite;
    -webkit-animation: crt-pixels 20ms alternate infinite;
    animation: crt-pixels 20ms alternate infinite;
  }

  @keyframes turn-on {
    0% {
      @apply border-[100vh] border-r-[50vw] border-l-[50vw];
    }
    20% {
      @apply border-[9vh] border-r-[50vw] border-l-[50vw];
    }
    100% {
      @apply border-[0] border-r-[0] border-l-[0];
    }
  }
  @keyframes turned-on {
    0% {
      @apply border-0;
    }
    100% {
      @apply border-0;
    }
  }

  @keyframes crt-image {
    0% {
      transform: translateY(-1px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @keyframes crt-pixels {
    0% {
      transform: translateY(-3px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @keyframes noise {
    0% {
      background-position: 0px 1000px;
    }

    50% {
      background-position: -1000px;
    }

    100% {
      background-position: 100px 0px;
    }
  }

  @keyframes noiseeffect {
    0% {
      @apply -top-[20%] opacity-0;
    }

    20% {
      @apply opacity-0;
    }

    50% {
      @apply opacity-80;
    }

    80% {
      @apply opacity-0;
    }

    100% {
      @apply top-[100%] opacity-0;
    }
  }
</style>

<script>
  import Audio from "../components/Audio.svelte";
</script>

<div class="screen">
  <div class="error-noise">
    <div class="error-effect">
      <div class="old-tv-content">
        <slot />
      </div>
    </div>
  </div>
</div>

<Audio />
