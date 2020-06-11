<script>
export default {
  props: ['brandImage']
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.section {
  padding: 0px !important;
}

.title {
  color: #ffffff;
  font-style: italic;
  padding: 20px;
  .quotee {
    font-style: normal;
    margin-top: 1.5rem;
    display: inline-block;
    font-size: 0.85em;
  }
}

.brand-liner {
  border-bottom: 3px solid #fff;
  display: inline-block;
  width: 135px;
  margin-bottom: 1rem;
}

.brand-image {
  @include responsive-cover-image('../assets/brand-image.jpg', 'transparent');
  @include center-center-content();
  background-size: cover;
  height: 100vh;
  width: 100%;
  color: $white;
  text-align: center;
}

@media (min-width: 769px) {
  .title {
    position: absolute;
    top: 28vh;
    left: 10vh;
    width: 405px;
    text-align: left;
  }
  .brand-image {
    position: relative;
  }
}
@media only screen and (min-device-width: 740px) and (orientation: landscape) {
  .title {
    font-size: 1.5rem;
    top: 22vh;
  }
}

@media (min-width: 1025px) {
  .title {
    position: absolute;
    top: 28vh;
    left: 25vh;
    width: 405px;
    font-size: 2rem;
  }
}

@media (min-width: 1216px) {
  .title {
    position: absolute;
    top: 24vh;
    left: 25vh;
    width: 405px;
  }
}
</style>

<template>
  <section class="section">
    <div class="brand-image">
      <blockquote class="title"><span class="brand-liner"></span><br/>&ldquo;{{brandImage.fields.fullContent}}&rdquo;<br/><span class="quotee">&mdash;{{brandImage.fields.subTitle}}</span></blockquote>
    </div>
  </section>
</template>
