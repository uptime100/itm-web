
<script>
  import marked from 'marked'
  export default {
    props: ['privacyPolicy'],
    computed: {
      privacyPolicyMarked(){
        return marked(this.privacyPolicy.fields.fullContent)
      }
    }
  }
</script>
<style lang="scss" scoped>
.content {
  padding: 1rem;
}
h1 {
  font-size: 1.75rem;
  color: #0d2c5e;
  text-align: left;
  margin-bottom: 0.75rem;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
}
blockquote {
  font-style: italic;
}
@media (min-width: 769px) {
  blockquote {
    margin-left: 3rem;
  }
}
.letter-type-list {
  list-style-type: upper-alpha;
}
ol.enclosed {
  counter-reset: list;
}
ol.enclosed > li {
  list-style: none;
}
ol.enclosed > li:before {
  content: '(' counter(list, lower-alpha) ') ';
  counter-increment: list;
}
</style>
<template>
  <div class="container">
    <div class="content">
      <h1 style="font-weight:normal!important;">{{privacyPolicy.fields.pageTitle}}</h1>
      <div v-html="privacyPolicyMarked"></div>
    </div>
  </div>
</template>
