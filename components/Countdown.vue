<script>
import moment from 'moment'

export default {
  created() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },

  props: ['date'],

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
    }
  },

  computed: {
    ts() {
      return moment(this.date).unix()
    },

    seconds() {
      return (this.ts - this.now) % 60
    },

    minutes() {
      return Math.trunc((this.ts - this.now) / 60) % 60
    },

    hours() {
      return Math.trunc((this.ts - this.now) / 60 / 60) % 24
    },

    days() {
      return Math.trunc((this.ts - this.now) / 60 / 60 / 24)
    },
  },
}
</script>

<template>
  <div class="level is-mobile">
    <div>
      <p class="heading has-text-centered">Days</p>
      <p class="title has-text-centered">{{ days }}</p>
    </div>
    <div>
      <p class="heading has-text-centered">Hours</p>
      <p class="title has-text-centered">{{ hours }}</p>
    </div>
    <div>
      <p class="heading has-text-centered">Minutes</p>
      <p class="title has-text-centered">{{ minutes }}</p>
    </div>
    <div>
      <p class="heading has-text-centered">Seconds</p>
      <p class="title has-text-centered">{{ seconds }}</p>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.level {
  max-width: 400px;
  margin: 0 auto;
}

.text {
  color: #1abc9c;
  font-size: 40px;
  font-family: 'Roboto Condensed', serif;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.digit {
  color: #ecf0f1;
  font-size: 150px;
  font-weight: 100;
  font-family: 'Roboto', serif;
  margin: 10px;
  text-align: center;
}
</style>
