<script>
import axios from 'axios'
import VideoThumb from './VideoThumb'
import 'swiper/dist/css/swiper.css'

export default {
  props: ['display'],
  components: {
    VideoThumb,
  },

  data() {
    return {
      videos: [],
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
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_KEY}&playlistId=${
      process.env.YOUTUBE_PLAYLIST
    }&part=snippet,contentDetails&maxResults=50`
    let response = await axios.get(url)
    //this.videos = response.data.items
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
  },
}
</script>

<style scoped>
.section {
  padding-top: 0;
}
</style>

<template>
  <section class="section" v-show="display">
    <div class="container">
      <h1 class="content-hdr">Other Videos</h1>
      <swiper :options="swiperOption">
        <swiper-slide v-for="video in videos" :key="video.uri">
          <video-thumb :video="video" @openModal="openModal(video)" ></video-thumb>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <div class="modal is-active" v-if="open">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="embed-container has-text-centered">
            <iframe width="560" height="315" :src="src" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click.prevent="open = null"></button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../scss/variables';

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

/deep/ .swiper-button-prev,
/deep/ .swiper-button-next {
  top: 25%;
  @include mobile {
    top: 17%;
  }
}
</style>
