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

<div class="relative min-h-screen w-screen flex flex-col text-white bg-[linear-gradient(190deg,#01d6f4_0%,#039ff1_1.5%,#0575ba_4%,#074f88_8%,#04528e_13%,#005698_14%,#001423_18%,#000910_19%,#000000_100%)] overflow-x-hidden">
  
  <!-- Background Image for Mobile -->
  <div class="absolute inset-0 z-0 md:hidden opacity-20">
    <img src="src/lib/hands.png" alt="Hands Background" class="w-full h-full object-cover" />
  </div>

  <!-- Navbar Wrapper -->
  <Navbar />



  <!-- Main Content -->
  <main class="relative z-10 flex-1 px-6 py-10 flex flex-col justify-between">
    <span class="uppercase tracking-wide text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
      PETRICHOR' 26
    </span>


    <div class="flex flex-col lg:flex-row justify-between items-center gap-10 mt-6 mb-6">
      <!-- Left Section -->
      <div class="max-w-full lg:max-w-[50%] lg:ml-16">
        <h1 class="text-6xl md:text-7xl font-extrabold mb-6 font-[Playfair Display]">
          Hi, <span class="text-[#3fdcff]">{username}</span>
        </h1>

        <p class="text-gray-300 text-xl md:text-3xl mb-8">
          Petrichor '26 isn't just a fest — it's a whole dang multiverse. Hack all night, dance all day, vibe like there's no Monday.Win stuff, lose sleep, make memories — or don't, who cares?!
        </p>

        <div class="flex flex-col gap-6 items-start">
          <!-- Button 1 -->
            <button
              on:click={enterCode}
              class="font-sans w-[160px] md:w-[180px] lg:w-[250px] text-base md:text-xl lg:text-2xl px-4 md:px-6 lg:px-10 py-3 md:py-4 lg:py-6 rounded-full bg-gradient-to-r from-black to-[#01CFF7] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_14px_rgba(0,255,255,0.3)]"
              style="font-family: Arial, sans-serif;">
              Enter CA code
            </button>

            <!-- Button 2 -->
            <button
              on:click={getCode}
              class="font-sans w-[160px] md:w-[180px] lg:w-[250px] text-base md:text-xl lg:text-2xl px-4 md:px-6 lg:px-10 py-3 md:py-4 lg:py-6 rounded-full bg-gradient-to-r from-black to-[#01CFF7] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_14px_rgba(0,255,255,0.3)]"
              style="font-family: Arial, sans-serif;">
              Get CA code
            </button>


        </div>
      </div>

      <!-- Right Image Section -->
      <div class="max-w-[40%] hidden md:block">
        <img src="src/lib/hands.png" alt="HandsIMG" class="w-full" />
      </div>
    </div>
  </main>

  <!-- Footer -->
  <Footer />
</div>
