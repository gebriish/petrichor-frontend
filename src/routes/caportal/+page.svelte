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
    font-size: 96px;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .left,
  .right {
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
    transition: transform 0.1s ease, opacity 0.3s ease;
  }

  .button:hover {
    opacity: 0.4;
  }

  .button:active {
    transform: scale(0.95);
  }

</style>


<Navbar />

<div class="container">
  <div class="title">CA Portal</div>
  <div class="content">
    <div class="left">
      <div class="text-block">
        <strong>Become a Campus Ambassador for Petrichor</strong>
      </div>
      <div class="text-block">
        Be the voice of IITPKD's premier fest and lead your campus in celebrating the spirit of Petrichor.
      </div>
      <div class="text-block">
        <strong>All You Have to do</strong><br />
        • Share our content, posters and links to your peers and college groups<br />
        • Encourage students from your college and contacts to participate in our events and workshops
      </div>
    </div>
    <div class="right">
      <div class="text-block">
        <strong>30k Prize Pool</strong><br />
        Earn more for each registration/participation you bring
      </div>
      <div class="text-block">
        <strong>Benefits</strong><br />
        • Win cash prizes from a pool of 30k if you are in the top 5 CAs<br />
        • Earn ₹ 50 per extra registration above 5 (for workshops and tech summit)<br />
        • Win exciting goodies and pro-show tickets of Petrichor'25<br />
        • Earn certificate of merit issued by Petrichor, IIT Palakkad for your valiant efforts
      </div>
    </div>
  </div>

  <div style="display: flex; justify-content: center; margin-top: 2rem;">
    <button class="button">Apply</button>
  </div>

</div>

<Footer />