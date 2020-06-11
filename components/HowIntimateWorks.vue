<script>
import HowIntimateWorksDetails from '@/components/HowIntimateWorksDetails'
export default {
  name: 'how-intimate-works',
  components: {
    HowIntimateWorksDetails,
  },
  data() {
    return {
      readMore: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  background-color: #214986;
}
.why-intimate-for-pay {
  color: #ffffff;
}
p {
  text-transform: none;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 20px;
}

.is-underline {
  border-bottom: 1px solid;
  padding-bottom: 5px;
  cursor: pointer;
  color: #5fb2e1 !important;
}
</style>

<template>
  <section class="section">
    <div class="container has-text-centered">
          <h2 class="content-desc">The standard transaction</h2>
          <h2 class="why-intimate-for-pay">How intimate works</h2>
          <p>
            intimate is a cryptocurrency designed for and by the Adult Industry. intimate is a blockchain ledger with a focus on reputation, trust, and safety. intimate applies the innovations from the blockchain revolution to create an instrument specifically for the Adult Industry.
          </p>

          <h2 class="is-hidden-tablet is-hidden-desktop hidden-ipad-portrait outer-for">
            <a href="#" @click.prevent="readMore=!readMore" class="is-underline" >Read more</a>
          </h2>


        <how-intimate-works-details :readMore="readMore" class="is-hidden-tablet is-hidden-desktop hidden-ipad-portrait outer-for" ></how-intimate-works-details>
        <how-intimate-works-details :readMore="true" class="is-hidden-mobile visible-ipad-portrait visible-ipad-landscape inner-for is-wide-screen"></how-intimate-works-details>
      </div>
  </section>
</template>
