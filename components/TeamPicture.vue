<script>

export default{
  props: ['teamAtIntimate'],
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
  padding: 20px;
}

.explore-how-it-works {
  @include responsive-cover-image('../assets/team.jpg', 'transparent');
  @include center-center-content();
  background-size: cover;
  height: 100vh;
  width: 100%;
  color: $white;
  text-align: center;
}
</style>

<template>
  <section class="section">
    <div class="explore-how-it-works">
      <h1 class="title">{{teamAtIntimate.fields.fullContent}}</h1>
    </div>
  </section>
</template>
