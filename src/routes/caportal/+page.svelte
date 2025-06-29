<script>
  const login_page_url = "/loginpage"

  import Navbar from "$lib/shared/ui/components/navbar/Navbar.svelte";
  import Footer from "$lib/shared/ui/components/footer/Footer.svelte";
</script>

<style>
  :root {
    --bg-gradient: linear-gradient(165deg, #005698 1%, #001423 15%, #000910 45%);
    --text-color: #ffffff;
    --title-size: 3rem;
    --title-weight: 700;
    --padding-x: 2rem;
    --padding-y: 3rem;
    --button-bg: linear-gradient(120deg, #00121F, #06BAF1);
    --button-text: #ffffff;
    --button-radius: 999px;
    --button-width: 248px;
    --button-padding: 0.75rem 2rem;
    --section-gap: 2rem;
    --text-block-max-width: 40ch;
    --text-size: 1rem;
    --line-height: 1.6;
  }

  .container {
    min-height: 100vh;
    background: var(--bg-gradient);
    color: var(--text-color);
    padding: var(--padding-y) var(--padding-x);
  }

  .title {
    font-size: var(--title-size);
    font-weight: var(--title-weight);
    margin-bottom: 3rem;
    text-align: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--section-gap);
  }

  .left,
  .right {
    flex: 1;
    min-width: 300px;
  }

  .text-block {
    margin-bottom: 1.5rem;
    font-size: var(--text-size);
    line-height: var(--line-height);
    max-width: var(--text-block-max-width);
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .button {
    background: var(--button-bg);
    color: var(--button-text);
    width: var(--button-width);
    padding: var(--button-padding);
    border-radius: var(--button-radius);
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .button:hover {
    transform: scale(1.05);
  }

  .button:active {
    transform: scale(0.97);
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

  <div class="button-container">
    <a href={login_page_url} >
      <button class="button">Apply</button>
    </a>
  </div>
</div>

<Footer />
