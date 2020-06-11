<script>
  import PrivacyPolicy from '../components/PrivacyPolicy'
  import NavHeader from '../components/NavHeader'
  import MainHeader from '../components/MainHeader'
  import {getContentfulData} from '../utils/contentful'
  export default {
    components: {
      PrivacyPolicy,
      NavHeader,
      MainHeader
    },
    async asyncData ({ params, error }) {
      let privacyPolicy = await getContentfulData('4EzpuMuzWwcSqsI6oUuC6O')
      return {privacyPolicy}
    },
    methods: {
      handleScroll() {
        if (window.scrollY > 50) {
          this.sticky = true
        } else {
          this.sticky = false
        }
        this.$store.commit('hideMenu')
      },
      toggled(state) {
        this.displayOtherVideo = state
      },
      navLoaded(navSize) {
        this.navSize = navSize
      },
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    data() {
      return {
        sticky: false,
        displayOtherVideo: false,
        navSize: 50,
      }
    },
  }
</script>
<template>
  <div>
    <nav-header :sticky="sticky" :otherPage="false" @loaded="navLoaded"></nav-header>
    <privacy-policy :privacyPolicy="privacyPolicy"/>
  </div>
</template>
