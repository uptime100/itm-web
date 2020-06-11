<script>
export default {
  props: ['member'],

  methods: {
    toggle() {
      this.show = !this.show
    },
  },

  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.content {
  margin-top: 20px;
}
.responsibilities {
  list-style: disc;
  margin-left: 20px;
  li {
    color: #62b5e5;
    font-weight: bold;
  }
  span {
    color: #4a4a4a;
    font-weight: normal;
  }
}
.media-content {
  overflow: hidden;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  max-height: 500px;
  transition: max-height 0.3s ease-in;
}
.slide-fade-enter,
.slide-fade-leave-to {
  max-height: 0;
  transition: max-height 0.3s ease-out;
}
.accordion {
  cursor: pointer;
  outline: none;
  transition: 0.4s;
}
.panel {
  background-color: white;
  overflow: hidden;
}
.show {
  display: block !important;
}
</style>

<template>
  <div>
    <div class="media accordion" @click="toggle" >
      <div class="media-left">
        <figure class="image is-64x64">
          <img class="image--cover" :src="member.imgpath" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-5">{{ member.name }} </p>
        <p class="subtitle is-7">{{ member.title }} {{ member.show }} </p>
      </div>
      <div class="media-right">
          <i class="fa" :class="show ? 'fa-angle-up' : 'fa-angle-down' "></i>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="content panel" v-show="show">
        <p v-for="(description, key) in member.descriptions" :key="key" v-html="description"></p>
        <p v-if="member.video">
          <a :href="member.video.url" target="_blank">{{ member.video.title }} </a>
        </p>
        <p v-if="member.link">
          <a :href="member.link.url" target="_blank">{{ member.link.title }} </a>
        </p>
        <div v-if="member.responsibilities">
          <p><strong>Key Responsibilities include:</strong> </p>
          <ul class="responsibilities">
            <li v-for="responsibility in member.responsibilities" :key="responsibility">
              <span>{{ responsibility }}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
