<template>
  <div class="about">
    <div class="headline-container">
      <span id="un">Unexpected. Unusual. Unconventional.</span>
    </div>
    <div class="headline-description">
      <p>
        We are inherently curious about all things impossible. And endless fascinated by the myriad possibilties for said impossibilities.
        We are an asymmetrical marriage between creativity and production.
      </p>
      <h4>We are Uncanny.</h4>
    </div>
    <section class="section">
        <h2>about</h2>
    </section>
    <section class="section">
        <h2>about</h2>
    </section>
  </div>
</template>

<style>
.about {
  justify-content: center;
  padding-left: 15%;
  padding-right: 15%;
}

.headline-container {
  font-size: 1.5rem;
  text-align: center;
  padding: 30px 20px;
}

.headline-description {
  text-align: left;
  padding-left: 15%;
  padding-right: 15%;
}

.section {
    display: flex;
    align-items: center;
    height: 100vh;
    position: relative;
    font-family: 'Cabin', sans-serif;
    color: #ffeded;
    text-transform: uppercase;
    font-size: 7vmin;
    padding-left: 10%;
    padding-right: 10%;
}

section:nth-child(odd)
{
    justify-content: flex-end;
}

</style>
