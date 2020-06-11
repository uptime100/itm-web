<script>
import TokenDetailProgress from '@/components/TokenDetailProgress'
import TokenDetailAdminCost from '@/components/TokenDetailAdminCost'
export default {
  name: 'token-detail',
  components: {
    TokenDetailProgress,
    TokenDetailAdminCost,
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.section {
  padding: 5rem 1.5rem;
  background-image: linear-gradient(to top, #345d9d, #345d9d);
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
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  text-align: left;
}
@media (min-width: 1025px) {
  .flex-container > div {
    flex: 0 1 48%;
  }
}
.entity {
  flex: 0 1 40%;
}
.is-mobile {
  flex-direction: column;
}
.circleBase {
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.list-one {
  background-color: #214986;
  border: #214986 solid 1px;
}

.list-two {
  background-color: #052c65;
  border: #052c65 solid 1px;
}
.list-three {
  background-color: #43d7b9;
  border: #43d7b9 solid 1px;
}
.media {
  color: #fff;
  font-weight: bold;
  border-top: #214986 dashed 1px;
  padding-top: 20px;
}
.media-last-child {
  border-bottom: #214986 dashed 1px;
  padding-bottom: 20px;
}
.percentage-box {
  padding: 15px;
}

</style>

<template>
  <section class="section">
    <div class="container has-text-centered">
      <h2 class="content-desc">intimate token</h2>
      <h2 class="why-intimate-for-pay">Token Detail</h2>
      <h2 class="budget-detail has-text-centered" style="margin-bottom:30px;">Budget detail</h2>
    </div>

    <div class="flex-container" :class="{'is-mobile': $mq && $mq.phone}" >
      <div class="has-text-centered">
        <div class="percentage-box">

          <div class="media">
            <div class="media-left">
              <div class="circleBase list-three">&nbsp;</div>
            </div>
            <div class="media-content">
              General Sale
            </div>
            <div class="media-right">
              48%
            </div>
          </div>

          <div class="media">
            <div class="media-left">
              <div class="circleBase list-two">&nbsp;</div>
            </div>
            <div class="media-content">
              Staff and General Administration
            </div>
            <div class="media-right">
              10%
            </div>
          </div>

          <div class="media">
            <div class="media-left">
              <div class="circleBase list-two">&nbsp;</div>
            </div>
            <div class="media-content">
              Partnership co-marketing
            </div>
            <div class="media-right">
              10%
            </div>
          </div>

          <div class="media media-last-child">
            <div class="media-left">
              <div class="circleBase list-one">&nbsp;</div>
            </div>
            <div class="media-content">
              Held by intimate.io
            </div>
            <div class="media-right">
              32%
            </div>
          </div>
          
        </div>
      </div>
      <div>
        <token-detail-progress></token-detail-progress>
      </div>
    </div>
    <token-detail-admin-cost></token-detail-admin-cost>
  </section>
</template>
