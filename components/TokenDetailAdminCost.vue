<script>
export default {
  name: 'token-detail-admin-cost',
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.hdr {
  color: #ffffff !important;
}
.details {
  margin-bottom: 10px;
  color: #62b5e5 !important;
}
.more-details {
  background-color: #214986;
  color: #62b5e5 !important;
  padding: 5px;
}
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  flex-direction: row;
  .container{
    display: flex;
    margin: 0;
    flex: 1 0 100%;
  }
}
.entity {
  flex: 1 0 30%;
  padding: 10px;
  text-align: center;
}
@media (min-width: 769px) {
  .entity {
    flex: 1 0 33%;
    padding: 10px;
  }
}
</style>
<template>
  <section>
    <div class="more-details flex-container" >
      <div class="container">
        <div class="entity">
          <h2 class="hdr">ITM</h2>
          <p class="details">symbol</p>
        </div>
        <div class="entity">
          <h2 class="hdr">33M</h2>
          <p class="details">token supply</p>
        </div>
        <div class="entity">
          <h2 class="hdr">600 ITM</h2>
          <p class="details">per ETH</p>
        </div>
      </div>
    </div>
  </section>
</template>
