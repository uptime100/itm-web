<script>
import moment from 'moment'
import contentfulAPI from '../providers/contentful'
import Countdown from '@/components/Countdown'
import VueScrollTo from 'vue-scrollto'

export default {
  props: ['mainHeader'],

  components: {
    Countdown,
  },

  created() {
    if (process.browser){
      window.setInterval(() => {
        this.now = Math.trunc(new Date().getTime() / 1000)
      }, 1000)
    }
  },

  data() {
    return {
      countdown: '2018-06-07T09:00:00Z',
      now: Math.trunc(new Date().getTime() / 1000),
    }
  },

  computed: {
    showCountdown() {
      return moment.unix(this.now).isBefore(moment(this.countdown))
    },
  },

  methods:{
    scrollTo(element) {
      VueScrollTo.scrollTo(element, {
        offset: -50,
      })
    },
  }

}
</script>

<style lang="scss" scoped>
.hero-body {
  padding: 5rem 1.5rem;
  h1{
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0.5rem;
    text-transform: none;
    font-size: 1.5rem;
  }
  .container {
    max-width: 1100px;
  }
}
.hero.is-info.is-bold {
  background-image: linear-gradient(to top, #052c65, #04326a);
}
.presale {
  font-size: 1.5rem;
}
.register-col {
  display: flex;
  justify-content: center;
}
.register {
  font-size: 1.5rem !important;
  background-color: #35d9c3 !important;
}
</style>

<template>
  <section class="hero is-info is-bold" id="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-spaced m-content">
            {{mainHeader.fields.mainText}}
        </h1>
        <h2 class="subtitle is-spaced m-content">
          {{mainHeader.fields.subTitle}}
        </h2>

        <div class="columns">
          <div class="column register-col">
            <div class="content">
              <p>
                <a class="button is-large is-primary register primary-itm-button" :href="mainHeader.fields.destinationUrl" @click.prevent="scrollTo('#integrate')">{{mainHeader.fields.callToAction}}&nbsp;<span class="icon is-small"><i class="fa fa-chevron-right"></i></span></a>
              </p>
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tinge"></div>
    <video class="video" width="1920" height="1080" src="https://player.vimeo.com/external/261080241.sd.mp4?s=db79a8789dcf8711fc76a60583b0193be2d2a17e&profile_id=164" autoplay muted loop playsinline />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero-body {
  z-index: 2;
}

.tinge,
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.tinge {
  background: #209cee;
  z-index: 1;
  opacity: 0.75;
}
.video {
  object-fit: cover;
}
</style>
