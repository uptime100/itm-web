<script>
import * as Cookies from 'tiny-cookie'
import marked from 'marked'

export default {
  props: ['disclaimer'],
  data() {
    return {
      active: true,
    }
  },

  computed: {
    disclaimerMarked(){
      return marked(this.disclaimer.fields.fullContent)
    }
  },

  created() {
    if (Cookies.get('agreed') === 'true') {
      this.agree()
    }
  },

  methods: {
    leave() {
      window.history.back()
    },

    agree() {
      Cookies.set('agreed', true, { expires: 14 })
      this.active = false
    },
  },
}
</script>

<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{disclaimer.fields.pageTitle}}</p>
      </header>
      <section class="modal-card-body">
        <div class="content" v-html="disclaimerMarked">
        </div>
      </section>
      <footer class="modal-card-foot buttons">
        <button class="button" @click="leave">Leave</button>
        <button class="button is-success" @click="agree">Agree</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  justify-content: center;
}
</style>
