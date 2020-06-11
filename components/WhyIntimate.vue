<script>
export default {
  name: 'why-intimate',
  props: ['whyIntimate'],
  data() {
    return {
      play: false,
      toggleVideo: false,
    }
  },

  methods: {
    toggle() {
      this.toggleVideo = !this.toggleVideo
      this.$emit('toggled', this.toggleVideo)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../scss/variables';
.section {
  background: linear-gradient(to bottom, #fff 0%, #fff 50%, #fff 30%, #f4f8fb 70%, #f4f8fb 100%);
}

.title {
  color: #ffffff;
  text-transform: uppercase;
  padding: 20px;
}
.explore-how-it-works {
  @include responsive-cover-image('../assets/why-intimate.png', 'transparent');
  @include center-center-content();
  background-size: cover;
  flex-direction: column;
  text-align: center;
  width: 100%;
  color: $white;
  padding: 3rem;
}
.video-player {
  display: inline-block;
  transition: all 0.2s ease-in-out;
  @include rounded-number(80px, transparent, #25dac3);
  color: #fff;
  font-size: 17px;
}
.video-player:hover {
  transform: scale(1.3);
}
.content-desc-alt {
  padding-left: 30px;
  padding-right: 30px;
}

@include mobile {
  .why-intimate-for-pay {
    display: none;
  }
  .content-desc {
    display: none;
  }
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.toggle {
  text-align: right;
}
.toggle a {
  color: #1e407b;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  display: inline-block;
  margin-right: 1rem;
}

.play-button{
  position: relative;
  top: 6px;
  left: 4px;
}
</style>

<template>
  <section class="section">
    <div class="container">

      <div class='embed-container'>
        <iframe v-if="play" src='https://www.youtube.com/embed/cxZC99_QOnU?autoplay=1&rel=0' frameborder='0' allowfullscreen></iframe>

        <div v-else>
          <div class="explore-how-it-works">
              <!-- <h2 class="why-intimate-for-pay">{{whyIntimate.fields.pageTitle}}</h2> -->
              <!-- <h2 class="content-desc">
                {{whyIntimate.fields.fullContent}}
              </h2> -->
              <a @click="play = true" target="_blank" class="video-player"><i class="fa fa-play fa-2x play-button"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
