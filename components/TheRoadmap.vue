<script>
import TheTimeline from '@/components/TheTimeline'
export default {
  props: ['year1', 'year2', 'beyondYear2'],
  name: 'road-map',
  components: {
    TheTimeline,
  },
}
</script>



<template>
  <section id="roadmap" class="section section-white">
    <div class="container has-text-centered">
      <h2 class="content-desc">Future plans for intimate</h2>
      <h2 class="why-intimate-for-pay is-spacing">intimate roadmap</h2>
    </div>
    <the-timeline :year1="year1" :year2="year2" :beyondYear2="beyondYear2" :centered="false" class="is-hidden-tablet is-hidden-desktop hidden-ipad-portrait outer-for"></the-timeline>
    <the-timeline :year1="year1" :year2="year2" :beyondYear2="beyondYear2" :centered="true" class="is-hidden-mobile visible-ipad-portrait visible-ipad-landscape inner-for is-wide-screen"></the-timeline>
  </section>
</template>
