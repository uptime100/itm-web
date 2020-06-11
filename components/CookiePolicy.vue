<script>
  import marked from 'marked'
  export default {
    props: ['cookiePolicy'],
    computed: {
      cookiePolicyMarked(){
        return marked(this.cookiePolicy.fields.fullContent)
      }
    }

  }
</script>

<style scoped>
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
</style>
<template>
  <div class="container">
    <div class="content">
      <h1>{{cookiePolicy.fields.pageTitle}}</h1>
      <div v-html="cookiePolicyMarked"></div>
    </div>
  </div>
</template>
