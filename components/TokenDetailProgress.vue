<style scoped>
h2 {
  margin-bottom: 10px;
  color: #ffffff !important;
}

p {
  margin-bottom: 10px;
  color: #62b5e5 !important;
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
</style>

<template>
  <section class="section">
    <h2>Core Development</h2>
    <div class="progress" data-label="25%">
      <span class="value" style="width:100%;"></span>
    </div>
    <p>Building a core team for the intimate architecture and infrastructure.</p>

    <h2>Ecosystem Development</h2>
    <div class="progress" data-label="20%">
      <span class="value" style="width:60%;"></span>
    </div>
    <p>Integrating intimate into existing and new systems.</p>

    <h2>Marketing</h2>
    <div class="progress" data-label="25%">
      <span class="value" style="width:100%;"></span>
    </div>
    <p>Business Development and Marketing efforts to expand intimate internationally and drive growth.</p>

    <h2>Industry Support</h2>
    <div class="progress" data-label="10%">
      <span class="value" style="width:25%;"></span>
    </div>
    <p>Fund to be managed by an independent foundation for grassroots and industry support.</p>

    <h2>Financial</h2>
    <div class="progress" data-label="10%">
      <span class="value" style="width:25%;"></span>
    </div>
    <p>Hedging</p>

    <h2>Administration</h2>
    <div class="progress" data-label="10%">
      <span class="value" style="width:25%;"></span>
    </div>
    <p>Administrative costs.</p>
  </section>
</template>
