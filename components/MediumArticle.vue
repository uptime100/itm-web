<script>
export default {
  props: ['media'],

  data() {
    return {
      open: false,
    }
  },

  computed: {
    thumb() {
      let media = this.media
      let tagIndex = media.description.indexOf('<img')
      let srcIndex = media.description.substring(tagIndex).indexOf('src=') + tagIndex
      let srcStart = srcIndex + 5
      let srcEnd = media.description.substring(srcStart).indexOf('"') + srcStart
      let src = media.description.substring(srcStart, srcEnd)
      return src
    },
    trimmedDescription() {
      let yourString = this.media.description.replace(/<img[^>]*>/g, '')
      let maxLength = 120
      let trimmedString = yourString.substr(0, maxLength)
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
      return trimmedString.replace(/<(.|\n)*?>/g, '') + `...`
    },
  },
}
</script>

<style lang="scss" scoped>
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
  display: block;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  p {
    display: none !important;
  }
}
.link {
  color: #4a4a4a;
}
</style>

<template>
  <div class="thumb">
    <div class="card is-shadowless">
      <div class="card-image">
        <a :href="media.link" target="_blank">
        <figure class="image is-16by9">
          <img :src="thumb" alt="Placeholder image" style="object-fit: cover">
        </figure>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <strong>{{ media.title }}</strong><br />
          <span class="description" v-html="trimmedDescription"></span><br />
        </div>
      </div>
    </div>
  </div>
</template>
