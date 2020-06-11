<script>
import axios from 'axios'
import MediumArticle from './MediumArticle'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    MediumArticle,
  },

  data() {
    return {
      articles: [],
      open: null,
      swiperOption: {
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: true,
        breakpoints: {
          768: {
            slidesPerView: 1,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },

  async created() {
    try {
      this.articles = await this.getRSSFeed()
    } catch (e) {
      // will continue 
    }
  },

  mounted() {
    this.swiperOption.slidesPerView = this.slideOptions
  },

  computed: {
    src() {
      return `https://www.youtube.com/embed/${this.open.contentDetails.videoId}?rel=0&showinfo=0&autoplay=1`
    },
  },

  methods: {
    openModal(video) {
      this.open = video
    },

    async getRSSFeed() {
      let response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@intimate')
      return response.data.items
    },
  },
}
</script>

<style scoped>
.section {
  padding-top: 0;
}
</style>

<template>
  <section class="section">
    <div class="container">
      <h1 class="content-hdr">Latest News</h1>
      <swiper :options="swiperOption">
        <swiper-slide v-for="article in articles" :key="article.guid">
          <medium-article :media="article"></medium-article>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../scss/variables';
.content-hdr {
  text-align: center;
  padding-bottom: 1rem;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  color: #fff;
}
.embed-container /deep/ iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.swiper-container {
  position: relative;
}
/deep/ .swiper-button-prev,
/deep/ .swiper-button-next {
  @include mobile {
    top: 25%;
  }
  @media screen and (min-width: 577px) {
    top: 45%;
  }
  @media screen and (min-width: 769px) {
    top: 25%;
    z-index: 100%;
  }
}
</style>
