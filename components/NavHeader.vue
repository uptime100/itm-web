<script>
import { mapState } from 'vuex'
import VueScrollTo from 'vue-scrollto'
import SignUpModal from '@/components/SignUpModal'
import { setTimeout } from 'timers'
export default {
  name: 'nav-header',
  props: ['sticky', 'otherPage'],
  components: {
    SignUpModal,
  },
  computed: mapState({
    menuOpened: state => state.menuOpened,
    pdf() {
      return process.env.PDF
    },
    twitter() {
      return process.env.TWITTER
    },
    facebook() {
      return process.env.FACEBOOK
    },
    linkedin() {
      return process.env.LINKED_IN
    },
    telegram() {
      return process.env.TELEGRAM
    },
    github() {
      return process.env.GITHUB
    }
  }),
  watch: {
    menuOpened(){
      this.$forceUpdate()
    }
  },
  methods: {
    signUp() {
      this.showSignUp = true
    },
    scrollTo(element) {
      this.showNav = false
      if (this.$route.path !== '/') {
        window.location.href = '/#'+element
      }else{
        VueScrollTo.scrollTo(element, {
          offset: -50,
        })
      }
     this.$store.dispatch('toggleNav')
    },
    toggleNav(){
      this.showNav = !this.showNav
      this.$store.dispatch('toggleNav')
    }
  },
  data() {
    return {
      showSignUp: false,
      showNav: false,
      
    }
  },
}
</script>

<style lang="scss" scoped>
.subscribe {
  background-color: #052c65 !important;
  color: #ffffff;
  background-color: var(--marine);
  padding: 5px;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.fa-telegram,
.fa-facebook-official,
.fa-twitter,
.fa-linkedin-square,
.fa-github {
  color: #6db1de;
}
.sticky .fa-telegram,
.is-active .fa-telegram {
  color: #41669d;
}
.headline {
  font-weight: bold;
  color: yellow;
  flex: 1 0 100%;
  padding-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: 70px;
  padding-right: 70px;
  a {
    color: yellow;
  }
}

.sticky .headline,
.sticky .headline a {
  color: #0d2161;
}

.nav-header {
  flex-wrap: wrap;
}
.nav-header .navbar-item{
  font-weight: normal!important;
  font-family: Montserrat, sans-serif;
}

@media (min-width: 769px) {
  .headline {
    padding-left: auto;
    padding-right: auto;
  }
}
</style>
 

<template>
  <section>
    <nav class="navbar nav-header" :class="{ 'sticky': sticky }" ref="mainNav"  >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/intimate_logo2019/intimate-io-horizontal_blue.svg" width="120px"/>
        </a>
        <div class="navbar-burger" @click="toggleNav" :class="{ 'is-active': menuOpened }">
          <img class="nav-icon" src="../assets/nav-icon.png" v-if="!menuOpened" />
          <span v-if="menuOpened"></span>
          <span v-if="menuOpened"></span>
          <span v-if="menuOpened"></span>
        </div>
      </div>
      <div class="navbar-menu has-text-right" v-bind:class="{'is-active': menuOpened}">
        <div class="navbar-end">
          <a class="navbar-item" href="/#about-us" @click="scrollTo('about-us')">
            ABOUT
          </a>
          <a class="navbar-item" href="/#team"  @click="scrollTo('team')">
            THE TEAM
          </a>
          <a class="navbar-item" href="/#events"  @click="scrollTo('events')">
            EVENTS
          </a>
          <!-- <a class="navbar-item" href="/whitepaper.pdf" target="_blank">
            DOWNLOAD WHITEPAPER
          </a> -->
          <div class="navbar-item">
            <div class="icon is-medium"><a target="_blank" :href="telegram" class="fa fa-lg fa-telegram" aria-hidden="true"></a></div>
            <div class="icon is-medium"><a target="_blank" :href="twitter" class="fa fa-lg fa-twitter" aria-hidden="true"></a></div>
            <div class="icon is-medium is-hidden-desktop-only"><a target="_blank" :href="linkedin" class="fa fa-lg fa-linkedin-square" aria-hidden="true"></a></div>
            <div class="icon is-medium is-hidden-desktop-only"><a target="_blank" :href="facebook" class="fa fa-lg fa-facebook-official" aria-hidden="true"></a></div>
            <div class="icon is-medium is-hidden-desktop-only"><a target="_blank" :href="github" class="fa fa-lg fa-github" aria-hidden="true"></a></div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
