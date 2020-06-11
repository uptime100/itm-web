<script>
import axios from 'axios'
import _ from 'lodash'
import NavHeader from '../components/NavHeader'
import MainHeader from '../components/MainHeader'
import TheSignup from '../components/TheSignup'
import WhyIntimate from '../components/WhyIntimate'
import OtherVideos from '../components/OtherVideos'
import OurPartners from '../components/OurPartners'
import IntimateParties from '../components/IntimateParties'
import HowIntimateWorks from '../components/HowIntimateWorks'
import RendevuVideo from '../components/RendevuVideo'
import LetsRendevu from '../components/LetsRendevu'
import TeamPicture from '../components/TeamPicture'
import Spotlight from '../components/Spotlight'
import TheTeam from '../components/TheTeam'
import TheAdvisors from '../components/TheAdvisors'
import GetInTouch from '../components/GetInTouch'
import TheRoadmap from '../components/TheRoadmap'
import TheEvents from '../components/TheEvents'
import TheMedia from '../components/TheMedia'
import IntimateCryptoCurrency from '../components/IntimateCryptoCurrency'
import TokenDetail from '../components/TokenDetail'
import ConnectWithIntimate from '../components/ConnectWithIntimate'
import IntimateFooter from '../components/IntimateFooter'
import MediumArticles from '../components/MediumArticles'
import BrandImage from '../components/BrandImage'
import {getPlaylist} from '../utils/youtube'
import {getContentfulData, getEvents, getPartners, getAssets, getAsset, getMedias, attachLogo, getTeamMembers, attachLeadImage, getAdvisors, getContacts}  from '../utils/contentful'
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'Home',
  components: {
    NavHeader,
    MainHeader,
    TheSignup,
    WhyIntimate,
    OtherVideos,
    OurPartners,
    IntimateParties,
    HowIntimateWorks,
    RendevuVideo,
    LetsRendevu,
    TeamPicture,
    TheTeam,
    TheAdvisors,
    GetInTouch,
    TheRoadmap,
    TheEvents,
    TheMedia,
    IntimateCryptoCurrency,
    TokenDetail,
    ConnectWithIntimate,
    IntimateFooter,
    Spotlight,
    MediumArticles,
    BrandImage,
  },
  async asyncData ({ params, error }) {
    let youtubeData = await getPlaylist()
    let mainHeader = await getContentfulData('2JIHaNN4pOISosImEsaKiE')
    let events = await getEvents()
    let signupData = await getContentfulData('49upqUStbO2sC6wOMwmc0o')
    let assets = await getAssets()
    let partners = await getPartners()
    let whyIntimate = await getContentfulData('2UjKpIWeVG0Uy6KsaoGs00')
    let spotlight1 = await getContentfulData('3eympa0aVG22sQ6yUOagY4')
    let spotlight2 = await getContentfulData('4h5Jydj49igWGSy8iAS2eW')
    let consumerFeatures = await getContentfulData('60TVcwamuQcMGgQIeQ20Oa')
    let industryFeatures = await getContentfulData('34YDkkpImAYKQWGMQmw0ws')
    let teamAtIntimate = await getContentfulData('4yN1pWj0gMGOE6EWqO82E')
    let medias = await getMedias()
    let team = await getTeamMembers()
    let brandImage = await getContentfulData('4LsG2EVm0g6GOiQyq0Q0Y4')
    let advisors = await getAdvisors()
    let year1 = await getContentfulData('6Jptrrcl9eOCYMSYsiWciu')
    let year2 = await getContentfulData('1IReWUwtogEyyweE0YIcO2')
    let beyondYear2 = await getContentfulData('4MYnNBzzTaWIIs6Q86wYaO')
    let intimateDesc = await getContentfulData('635xG38pEW8gs0EaWicQya')
    let disclaimer = await getContentfulData('6sfA0FgKOW62SUkwuGuYO2')
    let contacts = await getContacts()

    await attachLogo(partners.items, assets)
    await attachLogo(medias.items, assets)
    await attachLeadImage(team.items, assets)
    await attachLeadImage(advisors.items, assets)
    await attachLeadImage(events.items, assets)
    await attachLeadImage(contacts.items, assets)
    
    return {otherVideos: youtubeData.items, mainHeader, 
            events: events.items, signupData, partners: partners.items,
            whyIntimate, spotlight1, spotlight2, consumerFeatures,
            industryFeatures, medias: medias.items,teamAtIntimate, team: team.items, brandImage,
            advisors: advisors.items, year1, year2, beyondYear2, intimateDesc, disclaimer,
            contacts: contacts.items}
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.sticky = true
      } else {
        this.sticky = false
      }

      window.addEventListener('scroll',  ( event ) => {
        this.$store.commit('hideMenu')
      }, false);
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
  mounted(){
    if (window.location.hash){
      VueScrollTo.scrollTo(window.location.hash, {
        offset: -50
      })
    }
  },
  data() {
    return {
      sticky: false,
      displayOtherVideo: false,
      navSize: 50,
      isScrolling: 0,
    }
  },
}
</script>
<template>
  <div id="main-wrap">
    <nav-header :sticky="sticky" :otherPage="false" @loaded="navLoaded"></nav-header>
    <main-header :mainHeader="mainHeader"></main-header>
    <the-signup :signupData="signupData" :consumerFeatures="consumerFeatures" :industryFeatures="industryFeatures"></the-signup>
    <our-partners :partners="partners"></our-partners>
    <why-intimate :whyIntimate="whyIntimate" v-on:toggled="toggled"></why-intimate>
    <other-videos :display="displayOtherVideo" :videos="otherVideos"></other-videos>
    <spotlight :spotlight1="spotlight1" :spotlight2="spotlight2"></spotlight>
    <div id="Trap"></div>
    <the-media :medias="medias"></the-media>
    <team-picture :teamAtIntimate="teamAtIntimate"></team-picture>
    <the-team :team="team"></the-team>
    <brand-image :brandImage="brandImage"></brand-image>
    <!-- <the-advisors :advisors="advisors"></the-advisors> -->
    <medium-articles></medium-articles>
    <get-in-touch></get-in-touch>
    
    <the-roadmap :year1="year1" :year2="year2" :beyondYear2="beyondYear2"></the-roadmap>
    <the-events :allEvents="events"></the-events>
   
    <intimate-crypto-currency :intimateDesc="intimateDesc"></intimate-crypto-currency>
    
    <!-- <token-detail></token-detail> -->
    <connect-with-intimate :contacts="contacts"></connect-with-intimate>
    <intimate-footer :disclaimer="disclaimer"></intimate-footer>
    
  </div>
</template>
