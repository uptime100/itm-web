<script>
export default {
  props: ['intimateDesc']
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.section {
  padding: 0px !important;
}

.title {
  color: #ffffff;
  text-transform: uppercase;
}
.explore-how-it-works {
  @include responsive-cover-image('../assets/intimateteam.png', 'transparent');
  @include center-center-content();
  background-size: cover;
  color: $white;
  text-align: center;
}
@media #{$extra-small-devices} {
  .explore-how-it-works {
    height: 372px;
    width: 100%;
  }
}
@media (min-width: 414px) {
  .explore-how-it-works {
    height: 259px;
  }
}
@media (min-width: 768px) {
  .explore-how-it-works {
    height: 600px;
  }
}
.title-alt {
  padding: 10px;
}
</style>

<template>
  <section class="section">
    <div class="explore-how-it-works">
        <h1 class="title title-alt">{{intimateDesc.fields.fullContent}}</h1>
    </div>
  </section>
</template>
