<script>
  // no JavaScript needed for now
</script>

<style>
  .container {
    min-height: 350vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: linear-gradient(
      160deg,
      #01d6f4 0%, 
        #039ff1 0.15%, 
        #0575ba 2.8%, 
        #074f88 5.6%, 
        #04528e 9.1%, 
        #005698 9.8%, 
        #001423 15.4%, 
        #000910 21%, 
        #000000 100%
    );
    color: white;
    font-family: 'Segoe UI', sans-serif;
    padding: 2rem;
    margin: 0;
  }

  .left-half {
    flex: 1;
    min-width: 45%;
    min-height: 110px;
  }

  .right-half {
    flex: 1;
    min-width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 150px;
    padding-right: 5%;
  }

  h1 {
    text-align: left;
    font-size: 3rem;
    font-weight: 550;
    font-family: 'Open Sans';
    margin-bottom: 1rem;
  }

  .content {
    font-family: 'Open Sans';
    text-align: justify;
    line-height: 1.7;
    font-weight: 200;
    font-size: 1rem;
    color: #ccc;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    .container {
      justify-content: flex-start;
      flex-direction: column;
      padding-top: 0;
      padding: 2rem;
      background: linear-gradient(
        160deg,
        #01d6f4 0%, 
        #039ff1 0.15%, 
        #0575ba 2%, 
        #074f88 4%, 
        #04528e 6.5%, 
        #005698 7%, 
        #001423 11%, 
        #000910 15%, 
        #000000 100%
      );
    }

    .left-half {
      max-height: 0;
      margin: 0;
    }

    .right-half {
      min-height: 100%;
      justify-content: flex-start;
      margin-top: 0;
      padding: 0;
    }

    h1 {
      text-align: center;
    }
  }
</style>

<div class="container">
  <div class="left-half"></div>

  <div class="right-half">
    <h1>About Us</h1>
    <div class="content">
      <p>
        Petrichor - the annual techno-cultural fest of IIT Palakkad is back again, and better than ever before. Also, yes, it's offline. We, the students of IIT Palakkad, conduct Petrichor every year and made sure last year's event was enriching for all its participants. Now the wait is over, with just the perfect mix of cultural and technical events, we plan on making Petrichor'24 an unforgettable experience for you. Trust us when we say that you won't miss out on anything. Check out our website as it has answers to all the questions that you might have. Stay tuned and brace yourselves for the journey of a lifetime with Petrichor'24!
      </p>
    </div>
  </div>
</div>
