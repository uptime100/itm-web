<script>
  import _ from 'lodash'
  export default {
    props: ['medias'],
    computed: {
      filteredMedias(){
        let medias = this.medias.filter(media=>{
          return typeof media.logo !== 'undefined'
        })

        return _.sortBy(medias, 'fields.displayOrder')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.media-hdr {
  margin-top: 30px;
  margin-bottom: 30px;
}

.gallery {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;
  margin-bottom: 50px;
  margin-top:3rem;
}

.gallery a{
  display: flex;
}

.gallery figure {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(100%);
  transition: filter 0.3s;
  margin-bottom: 3rem
}

.gallery figure img{
  max-width: 120px!important;
}

.gallery a:hover figure {
  filter: none;
}

.tc {
  height: 60px;
}
</style>

<template>
  <section class="section section-white has-text-centered">
    <div class="container media-hdr">
      <h2 class="content-desc">Coverage of intimate in the media</h2>

      <div class="gallery">
        <a target="_blank" :href="media.fields.publishedUrl" v-for="(media, key) of filteredMedias" :key="key">
          <figure class="image is-160x160">
            <img :src="media.logo" />
          </figure>
        </a>
      </div>
    </div>
  </section>
</template>
