<script>
import moment from 'moment'

export default {
  props: ['video'],

  data() {
    return {
      open: false,
    }
  },

  computed: {
    thumb() {
      return this.video.snippet.thumbnails.maxres.url
    },

    date() {
      return moment(this.video.contentDetails.videoPublishedAt).fromNow()
    },
  },
}
</script>

<style scoped>
.thumb,
.card {
  height: 100%;
  background: #fff;
  min-height: 460px;
}
.card {
  cursor: pointer;
}
.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<template>
  <div class="thumb">
    <div class="card is-shadowless" href="#" @click.prevent="$emit('openModal')">
      <div class="card-image">
        <figure class="image is-16by9">
          <img :src="thumb" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <strong>{{ video.snippet.title }}</strong><br />
          <span class="description">{{ video.snippet.description }}</span><br />
          <time>{{ date }}</time>
        </div>
      </div>
    </div>
  </div>
</template>
