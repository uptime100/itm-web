<script>
  import _ from 'lodash'
  export default {
    props: ['partners'],
    computed: {
      filteredPartners(){
       let partners = this.partners.filter(partner=>{
          return typeof partner.logo !== 'undefined'
        })
       
       return _.sortBy(partners, ['fields.displayOrder'])
      }
    }
  }
</script>
<style scoped>
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.gallery figure {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 1rem;
}

.gallery {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
}

.grayscale {
  filter: grayscale(100%);
  max-height: 80px;
  width: auto;
}
.gbg {
  height: 80px;
}
</style>

<template>
  <section class="section has-text-centered" id="partners">
    <div class="container">
      <h2 class="why-intimate-for-pay">Our Partners</h2>

      <div class="gallery">
        <figure class="image is-128x128" v-for="(partner, key) of filteredPartners" :key="key">
          <a :href="partner.fields.destinationUrl" :alt="partner.fields.partnerName" target="_blank">
            <img class="grayscale" :src="partner.logo" />
          </a>
        </figure>
      </div>
    </div>
  </section>
</template>
