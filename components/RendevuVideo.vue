<script>
export default {
  name: 'rendevu-video',
}
</script>

<style lang="scss" scoped>
.section {
  background: linear-gradient(to bottom, #214986 0%, #214986 50%, #214986 50%, #f4f8fb 50%, #f4f8fb 100%); /* W3C */
}
</style>

<template>
  <section id="about" class="section">
      <div class="container has-text-centered">
        <div class="content">
          <div class="videoWrapper">
            <iframe src="https://player.vimeo.com/video/223512873" width="100%" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
          </div>
        </div>
      </div>
  </section>
</template>
