<script>
	import Navbar from "$lib/shared/ui/components/navbar/Navbar.svelte";
	import Footer from "$lib/shared/ui/components/footer/Footer.svelte";
</script>

<style>
  .container {
    min-height: 100vh;
		background: linear-gradient(
  		165deg,
		#005698 1%,
  	#001423 15%,
  	#000910 45%
		);
    color: white;
    padding: 3rem 2rem;
  }

  .title {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 96px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .left, .right {
    flex: 1;
    min-width: 300px;
  }

  .text-block {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
    max-width: 40ch;
  }

  .button {
    background: linear-gradient(120deg, #00121F, #06BAF1);
		width: 248px;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 999px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .button:hover {
    opacity: 0.4;
  }
</style>

<Navbar></Navbar>

<div class="container">
  <div class="title">CA Portal</div>
  <div class="content">
    <div class="left">
      <div class="text-block">hababab</div>
      <div class="text-block">habbaba</div>    
    </div>
    <div class="right">
      <h3>Benefits</h3>
      <div class="text-block">habbaba</div>
      <div class="text-block">habababa</div>
    </div>
  </div>
  <button class="button">Apply</button>
</div>


<Footer></Footer>