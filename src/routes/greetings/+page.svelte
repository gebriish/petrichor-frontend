<script>
  import Footer from '$lib/shared/ui/components/footer/Footer.svelte';
  import Navbar from '$lib/shared/ui/components/navbar/Navbar.svelte';

  let username = "Username";
  let caCode = '';

  const enterCode = () => {
    alert(`Entered CA code: ${caCode}`);
  };

  const getCode = () => {
    alert('Generating CA code...');
  };
</script>

<!-- Root Container -->
<div class="relative min-h-screen w-screen flex flex-col text-white bg-[linear-gradient(190deg,#01d6f4_0%,#039ff1_1.5%,#0575ba_4%,#074f88_8%,#04528e_13%,#005698_14%,#001423_18%,#000910_19%,#000000_100%)] overflow-y-auto">

  <!-- Hands Background for Mobile & Tablet -->
  <div class="absolute inset-0 z-0 block lg:hidden opacity-25 pointer-events-none h-auto min-h-full">
    <img
      src="src/lib/assets/images/hands.png"
      alt="Hands Background"
      class="w-full min-h-full object-cover float-bg"
    />
  </div>

  <Navbar />

  <main class="relative z-20 flex-1 px-6 py-10 flex flex-col justify-center">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-10 mt-6 mb-6">
      
      <!-- Left Column: Content -->
      <div class="max-w-full lg:max-w-[50%] lg:ml-16 text-center lg:text-left flex flex-col items-center lg:items-start">

        <!-- Logo for Mobile -->
        <div class="md:hidden mb-6 flex justify-center">
          <img
            src="src/lib/assets/images/petrichor_logo.png"
            alt="Logo"
            class="w-[300px] h-auto animate-float glow flicker"
          />
        </div>

        <!-- Logo for Desktop -->
        <div class="hidden md:flex justify-center lg:justify-start mb-6 w-full">
          <img
            src="src/lib/assets/images/petrichor_logo.png"
            alt="Logo"
            class="w-[250px] lg:w-[300px] h-auto animate-float glow flicker"
          />
        </div>

        <!-- Greeting -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 font-[Playfair Display]">
          Hi, <span class="flicker-text font-semibold">{username}</span>
        </h1>

        <!-- Description -->
        <p class="fade-slide text-gray-300 text-base md:text-xl mb-8 px-4 md:px-0">
          <span class="font-bold text-[#3fdcff]">Petrichor '26</span> isn’t just a fest — it’s a <span class="italic text-white">full-blown multiverse.</span> Hack till sunrise, dance till you drop, vibe like it’s the end of the world. Win glory, lose sleep, make stories you’ll forget to forget — or don’t. No rules. Just chaos.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col gap-6 items-center lg:items-start">
          <button
            on:click={enterCode}
            class="font-sans font-bold w-[220px] md:w-[180px] lg:w-[250px] text-lg md:text-xl lg:text-2xl py-5 md:py-4 lg:py-6 rounded-full bg-white/5 backdrop-blur-md border border-[#3fdcff]/30 text-transparent bg-clip-text bg-gradient-to-r from-[#09819c] to-[#ffffef] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_3px_5px_rgba(0,255,255,0.3)]"
            style="font-family: Arial, sans-serif;">
            Enter CA Code
          </button>

          <button
            on:click={getCode}
            class="font-sans font-bold w-[220px] md:w-[180px] lg:w-[250px] text-lg md:text-xl lg:text-2xl py-5 md:py-4 lg:py-6 rounded-full bg-white/5 backdrop-blur-md border border-[#3fdcff]/30 text-transparent bg-clip-text bg-gradient-to-r from-[#09819c] to-[#ffffef] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_3px_5px_rgba(0,255,255,0.3)]"
            style="font-family: Arial, sans-serif;">
            Get CA Code
          </button>
        </div>
      </div>

      <!-- Right Side Image (Desktop Only) -->
      <div class="max-w-[30%] hidden lg:block">
        <img src="src/lib/assets/images/hands.png" alt="HandsIMG" class="w-full float-bg opacity-100 pointer-events-none" />
      </div>
    </div>
  </main>

  <Footer />
</div>

<style>
  :global(.flicker-text) {
    animation: flicker 2s infinite;
    color: #3fdcff;
    text-shadow: 0 0 1px #3fdcff, 0 0 6px #3fdcff;
  }

  :global(.glow) {
    filter: drop-shadow(0 0 10px rgba(63, 220, 255, 0.4));
  }

  :global(.flicker) {
    animation: flicker 1.8s infinite;
  }

  @keyframes flicker {
    0%   { opacity: 1; }
    5%   { opacity: 0.4; }
    10%  { opacity: 1; }
    15%  { opacity: 0.2; }
    20%  { opacity: 1; }
    25%  { opacity: 0.6; }
    30%  { opacity: 1; }
    100% { opacity: 1; }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }

  :global(.float-bg) {
    animation: float 4s ease-in-out infinite;
  }

  :global(.fade-slide) {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeSlideIn 1.5s ease-out forwards;
  }

  @keyframes fadeSlideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* iPad helper (custom breakpoint) */
  @media (min-width: 768px) and (max-width: 1024px) {
    .ipad\:block {
      display: block;
    }
  }

  /* Ensure html/body allow scroll */
  html, body {
    height: 100%;
    overflow-x: hidden;
  }
</style>
