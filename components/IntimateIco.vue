<script>
export default {
  name: 'intimate-ico',
  methods: {
    get_intimate() {
      console.log('Getting intimate...')
    },
  },
}
</script>

<style lang="scss" scoped>
.hero-body {
  padding: 5rem 1.5rem;
  background-image: linear-gradient(to top, #345d9d, #345d9d);
}

.hero.is-info.is-bold {
  background-image: linear-gradient(to top, #345d9d, #345d9d);
}
.content-desc {
  margin-top: 30px;
}
.why-intimate-for-pay {
  color: #fff;
}

.budget-detail {
  font-weight: 600;
  line-height: 1.61;
  color: #ffffff;
  text-shadow: 1px 0 #ffffff;
  margin-bottom: 20px;
}
.details {
  margin-left: 30px;
  margin-right: 30px;
  padding-bottom: 20px;
}

.details p {
  margin-bottom: 10px;
  color: #62b5e5 !important;
}

.details h2 {
  margin-bottom: 10px;
  color: #ffffff !important;
}

.progress {
  height: 1.8em;
  width: 100%;
  background-color: #214986;
  position: relative;
  border-radius: 3px;
}
.progress:before {
  content: attr(data-label);
  font-size: 0.8em;
  position: absolute;
  text-align: right;
  top: 5px;
  left: 0;
  right: 0;
  padding-right: 5px;
  color: #ffffff;
  font-weight: bold;
}
.progress .value {
  background-color: #43d7b9;
  display: inline-block;
  height: 100%;
}

.progress:not(:last-child) {
  margin-bottom: 0.5rem;
}

.more-details {
  background-color: #214986;
  margin: -1px;
  color: #62b5e5 !important;
  padding: 20px;
}

.get-intimate p {
  color: #ffffff !important;
  margin-bottom: 20px;
}

.button.is-large {
  font-size: 1.25rem;
}
.m-content {
  line-height: 1.3;
  font-size: 1.5em;
}
.is-rounded {
  border-radius: 290486px;
  font-size: 1em !important;
  font-weight: bold;
  width: 50%;
  padding: 25px;
}
</style>

<template>
  <section class="hero is-info is-bold">
    <div class="container has-text-centered">
      <h2 class="content-desc">intimate token</h2>
      <h2 class="why-intimate-for-pay">Token detail</h2>
      <h2 class="budget-detail">Budget detail</h2>
    </div>
    <div class="content">
      <figure class="image">
        <img class="logo" src="../assets/pie_chart.png" />
      </figure>
    </div>
    <div class="container details">
      <h2 class="budget-detail has-text-centered" style="margin-bottom:30px;">Budget detail</h2>

      <h2>Core Development</h2>
      <div class="progress" data-label="30%">
        <span class="value" style="width:100%;"></span>
      </div>
      <p>Building a core team for the intimate architecture and infrastructure</p>

      <h2>Ecosystem Development</h2>
      <div class="progress" data-label="20%">
        <span class="value" style="width:60%;"></span>
      </div>
      <p>Integrating intimate into existing and new systems</p>

      <h2>Marketing</h2>
      <div class="progress" data-label="30%">
        <span class="value" style="width:100%;"></span>
      </div>
      <p>Business Development and Marketing efforts to expand intimate internationally and drive growth</p>

      <h2>Industry Support</h2>
      <div class="progress" data-label="10%">
        <span class="value" style="width:30%;"></span>
      </div>
      <p>Fund to be managed by an independent foundation for grassroots and industry support.</p>

      <h2>Administration</h2>
      <div class="progress" data-label="10%">
        <span class="value" style="width:30%;"></span>
      </div>
      <p>Administrative costs.</p>

      <div class="more-details">
        <div class="columns is-mobile ">
          <div class="column">
            <h2>ITM</h2>
            <p>symbol</p>
          </div>
          <div class="column">
            <h2>100M</h2>
            <p>token supply</p>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">
            <h2>60M</h2>
            <p>crowd sale</p>
          </div>
          <div class="column">
            <h2>$5M USD</h2>
            <p>min.financing</p>
          </div>
        </div>
        <div class="columns is-mobile ">
          <div class="column">
            <h2>$24.5M USD</h2>
            <p>max. financing</p>
          </div>
        </div>
      </div>


    <div id="getintimate" class="container has-text-centered get-intimate">
      <h2 class="content-desc" style="color: #62b5e5 !important;">Capitalise on opportunity</h2>
      <h2 class="why-intimate-for-pay">Get intimate</h2>

      <p>Once you acquire the Ether from the exchange you will need to send it to an Ethereum Wallet that you control before sending it to the intimate Foundation. It is to this wallet that the intimate will be issued by the intimate Foundation.</p>
      <p>As intimate is in pre-sale phase, please click below or email payments@intimate.io if you wish to purchase intimate:</p>
      <p><a href="#" @click.prevent="get_intimate" class="button is-primary is-rounded is-large">Get intimate</a></p>
    </div>
    </div>

  </section>
</template>
