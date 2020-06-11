<script>
import marked from 'marked'
export default {
  name: 'timeline',
  props: ['centered', 'year1', 'year2', 'beyondYear2'],
  computed: {
    year1Marked(){
      return marked(this.year1.fields.fullContent)
    },
    year2Marked(){
      return marked(this.year2.fields.fullContent)
    },
    beyondYear2Marked(){
      return marked(this.beyondYear2.fields.fullContent)
    },
    
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/timeline';
.is-spacing {
  letter-spacing: 1.5px;
}

p {
  margin-bottom: 5px;
}
.timeline-content p:first-child {
  strong {
    text-transform: uppercase;
  }
  strong:first-child {
    color: #62b5e5;
  }
  strong:last-child {
    color: #2f255c;
  }
  h1{
    color: #2f255c;
  }
}
</style>
<style lang="scss">
.timeline-content{
  strong{
    color: #62b5e5!important;
  }
  h1{
    color: #2f255c;
  }
  .plans p{
    margin-bottom: 5px;
  }
}
</style>

<template>
  <section>
    <div class="timeline" :class="{ 'is-centered': centered }">
      <header class="timeline-header">
        <span class="tag is-medium is-info is-rounded">2018</span>
      </header>
      <div class="timeline-item is-info">
        <div class="timeline-content">
          <p><strong>Year 1</strong></p>
          <div v-html="year1Marked" class="plans"></div>
        </div>
      </div>

      <header class="timeline-header">
        <span class="tag is-medium is-info is-rounded">2019</span>
      </header>
      <div class="timeline-item is-info">
        <div class="timeline-content">
          <p><strong>Year 2</strong></p>
          <div v-html="year2Marked" class="plans"></div>
        </div>
      </div>


      <header class="timeline-header">
        <span class="tag is-medium is-info is-rounded">2020</span>
      </header>
      <div class="timeline-item is-info">
        <div class="timeline-content">
          <p><strong>Beyond Year 2</strong></p>
          <div v-html="beyondYear2Marked" class="plans"></div>
        </div>
      </div>

    </div>
  </section>

</template>
