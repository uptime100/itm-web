<script>
import marked from 'marked'
export default {
  props: ['spotlight1', 'spotlight2', 'consumerFeatures', 'industryFeatures'],
  computed: {
    spotlight1Marked(){
      return marked(this.spotlight1.fields.fullContent)
    },
    spotlight2Marked(){
      return marked(this.spotlight2.fields.fullContent)
    },
    consumerFeaturesMarked(){
      return marked(this.consumerFeatures.fields.fullContent)
    }
  }
}
</script>
<style lang="scss" scoped>
.spotlight {
  background: linear-gradient(to bottom, #f4f8fb, #f4f8fb), linear-gradient(to top, #fff, #fff);
  background-size: 100% 20.5%, 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 0, 0 0;
}
.container.spotlight-content {
  max-width: 900px;
  background-color: #59ade2;
  .column {
    justify-content: flex-start;
    color: #fff;
  }
  .featured {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  small {
    font-size: 0.8rem;
  }
  h3 {
    color: #0d2c5e;
    font-size: 1.25rem;
    margin-top: 0;
    font-weight: bold;
  }
  strong {
    color: #0d2c5e;
    font-size: 1rem;
  }
  p.position {
    font-size: 0.8rem;
  }
  .featured-logo {
    max-height: 50px;
    filter: grayscale(100%);
    margin-top: 0.5rem;
  }
}
.title {
  padding: 0;
  margin: 0;
}
.featured {
  padding: 0;
}
.spotlight-message {
  padding: 0.75rem;
  text-align: left;
}
.spotlight-message p{
  margin:0!important;
}
h3.feature-list {
  font-size: 1.5rem;
  color: #0d2c5e;
  text-align: left;
  margin-bottom: 0.75rem;
}
ul {
  text-align: left;
  margin: 0;
}

.container.features {
  margin-top: 2rem;
  max-width: 900px;
}
@media (min-width: 769px) {
  .title {
    padding: 0.75rem;
  }
  .container.spotlight-content {
    padding: 2rem;
    .featured {
      justify-content: flex-start;
    }
  }
}
.media {
  color: #fff;
}

</style>
<style lang="scss">
.feature-div{
  p{
    text-align: left;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: disc;
    margin-left: 1em;
    li{
      margin:0;
      padding:0;
      p{
        margin-bottom: 0;
      }
    }
  }
}
.spotlight-message p{
  margin:0!important;
}
</style>
<template>
  <section class="section spotlight has-text-centered">
    <div class="container spotlight-content">
      <div class="columns">
        <div class="column is-one-fifth-desktop title">
          <small>People are the</small>
          <h3>Spotlight</h3>
        </div>
        <div class="column">
          <div class="featured">
            <img src="../assets/alphabit-logo.png" class="featured-logo" alt="Alphabit"/>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="content">
            <div class="spotlight-message" v-html="spotlight1Marked">
            </div>
          </div>
        </div>
         <div class="column">
          <div class="content">
            <div class="spotlight-message" v-html="spotlight2Marked">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
