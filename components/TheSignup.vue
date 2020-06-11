<script>
import ThankYouForSigningUp from '@/components/ThankYouForSigningUp'
import TokenDetailAdminCost from '@/components/TokenDetailAdminCost'
import Features from '@/components/Features'
import axios from "axios"

export default {
  props: ['signupData', 'consumerFeatures', 'industryFeatures'],
  name: 'the-signup',
  components: {
    ThankYouForSigningUp,
    TokenDetailAdminCost,
    Features
  },
    data() {
    return {
      email: '',
      isSubmitted: false,
      dropdownClicked: false,
      languages: [
        {
          flag: '/languages/uk.png',
          country: 'United Kingdom',
          whitepaper: '/whitepaper',
        },
        {
          flag: '/languages/spain.png',
          country: 'Spain',
          whitepaper: '/whitepaper-es',
        },
        {
          flag: '/languages/china.png',
          country: 'China',
          whitepaper: '/whitepaper-zh',
        },
        {
          flag: '/languages/russia.png',
          country: 'Russia',
          whitepaper: '/whitepaper-ru',
        },
        {
          flag: '/languages/south-korea.png',
          country: 'South Korea',
          whitepaper: '/whitepaper-ko',
        },
        {
          flag: '/languages/germany.png',
          country: 'Germany',
          whitepaper: '/whitepaper-de',
        },
        {
          flag: '/languages/australia.png',
          country: 'Australia',
          whitepaper: '/whitepaper',
        },
      ],
    }
  },
  methods: {
    async onSubmit() {

      this.isSubmitted = true

    let data = { email: this.email }

    let api = axios.create()

    try{
        await api.post(`${process.env.SERVERLESS_EMAIL}/subscribe`,data)
    }

    catch(e){
      console.log(e);
    }

    },
    
    handleClose() {
      this.dropdownClicked = false
    },
    handleDropdownClicked(e) {
      this.dropdownClicked = !this.dropdownClicked
      e.stopPropagation()
    },
  },
  computed: {
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
    },
  },
}
</script>

<style lang="scss" scoped>
.signup {
  max-width: 96.5%;
  margin: 0 auto;
}
.signup-container {
  margin-bottom: 30px;
  margin-top: 30px;
}
.email {
  background-color: #f4f8fb !important;
  box-shadow: inset 0 0px 0px rgba(10, 10, 10, 0.1);
}
.is-info {
  background: #62b5e5;
}
.content-hdr-alt {
  margin-bottom: 30px;
  text-align: left;
}
.subscribe-hdr {
  text-align: center;
}
.flags {
  text-align: center;
}
.flag-small {
  width: 30%;
}
.flag-item {
  text-align: left;
  display: flex;
  .country {
    flex: 1 0 70%;
    margin-left: -20px;
  }
  .language {
    flex: 1 0 30%;
  }
}
.join-social {
  text-align: center;
}
.social {
  margin-top: 1rem;
}
.fa-telegram {
  color: #41669d;
}
.fa-facebook-official,
.fa-twitter,
.fa-linkedin-square,
.fa-github {
  color: #6db1de;
}
a.flag {
  margin-right: 1rem;
  img.flag {
    width: 32px;
    // filter: grayscale(100%);
  }
}
a.flag:last-child {
  margin-right: 0;
}
a.flag:hover img.flag {
  filter: none;
}

.about {
  padding-left: 20px;
  padding-right: 20px;
}
.keep-me-updated {
  border-radius: 290486px;
  padding-left: 25px;
  padding-right: 25px;
}
.icon.is-medium {
  margin-right: 1rem;
}
.icon.is-medium:last-child {
  margin-right: 0;
}
.subscribe-line{
  align-items: center;
  display: flex;
  justify-content: center;
}
@media only screen and (min-width: 740px) and (orientation: landscape) {
  .opt-in {
    width: 100%;
    flex: 1 0 100%;
    flex-wrap: wrap;
    h1 {
      flex: 1 0 100%;
      width: 100%;
      margin-bottom: 1rem !important;
    }
    .keep-me-updated {
      display: block !important;
    }
  }
  .subscribe-line {
    flex-direction: column;
    .column:first-child > .columns {
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }
}

@media only screen and (min-width: 1024px) and (orientation: landscape) {
  .opt-in {
    max-width: 900px;
    h1 {
      flex: 1 0 auto;
      width: auto;
      margin-bottom: 0 !important;
      text-align: right;
    }
  }
  .subscribe-line {
    flex-direction: row;
  }
}
@media (min-width: 768px) {
  .keep-me-updated {
    display: block !important;
  }
}

@media (min-width: 769px) {
  .download-whitepaper-container {
    text-align: left;
    padding-left: 26px;
  }
  .flags {
    text-align: left;
    padding-top: 1.25em;
  }
  .subscribe-hdr {
    font-size: 0.9rem;
  }
  .opt-in {
    display: flex;
    align-items: center;
    form {
      flex: 1 0 70%;
    }
    h1 {
      margin-bottom: 0;
    }
  }
}
@media (min-width: 1024px) {
  .is-visible-desktop {
    display: block !important;
  }
  .subscribe-hdr {
    font-size: 1rem;
  }
  .subscribe-line {
    flex-direction: row;
    .column:first-child > .columns.copy {
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
    }
  }
}

@media (min-width: 1024px) and (max-width: 1215px) {
  .column.is-three-quarters-desktop.opt-in {
    width: 100%;
    flex: 1 0 100%;
    flex-wrap: wrap;
    .keep-me-updated {
      display: block !important;
    }
    h1 {
      text-align: left;
    }
    form {
      flex: 1 0 60%;
    }
  }
  .subscribe-line {
    flex-direction: column;
    .column:first-child > .columns {
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
    .column:first-child > .columns.copy {
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
    }
  }
}
.note{
  color: #0d2c5e;
}
@media (min-width: 1216px) {
  .note{
    text-align: left;
    padding-right: 28%;
    padding-left: 3.5vw;
    font-size: 0.82rem;
    a{
      text-decoration: underline;
      color: #0d2c5e;
    }
  }
}

</style>

<template>
  <div>
    <section class="has-text-centered" @click="handleClose">
      <div class="container signup-container">


        <div class="columns subscribe-line is-hidden-mobile">
          <div class="column opt-in" id="about-us">
            <h1 class="content-hdr content-hdr-alt subscribe-hdr"><span>Get intimate news</span></h1>

            <form @submit.prevent="onSubmit">
            <!-- <input type="hidden" name="_next" value="//?isSubmitted=true&from=inquiry"/> -->
              <!-- <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_b8dc685163a2631505898cb2c_249819ac5b" tabindex="-1" value="">
              </div> -->
              <!-- <input type="hidden" name="Email Subscription" value="Marketing Site" /> -->
              <div class="field is-grouped signup">
                <p class="control is-expanded email-box">
                  <input type="email" name="email" required class="input is-medium email" placeholder="Enter your email address" v-model="email" />
                </p>
                <p class="control">
                  <button type="submit" class="button is-info  is-medium is-hidden-tablet is-hidden-desktop is-hidden-desktop hidden-ipad-portrait outer-for">
                    <i class="fa fa-chevron-right"></i>
                  </button>
                  <button type="submit" class="button keep-me-updated is-info is-medium  is-hidden-tablet is-hidden-mobile is-visible-desktop inner-for is-wide-screen">
                    <span>
                    Keep me updated
                    </span>
                    <span class="icon is-small">
                      <i class="fa fa-chevron-right"></i>
                    </span>
                  </button>
                </p>                
              </div>              
            </form>
            <div class="columns copy">
              <div class="column">
                <p class="note"><small>By subscribing to the newsletter, you are giving intimate.io permission to send you periodic update emails. All emails will ​include an unsubscribe link. You ​may opt-out at any time. ​ See our <a href="/privacy-policy">privacy policy</a>.</small></p>
              </div>
            </div>
          </div>
          <div class="column">
            <h1 class="content-hdr content-hdr-alt join-social">Join the conversation on social</h1>
            <div class="social">
              <div class="icon is-medium"><a target="_blank" :href="telegram" class="fa fa-3x fa-telegram" aria-hidden="true"></a></div>
              <div class="icon is-medium"><a target="_blank" :href="twitter" class="fa fa-3x fa-twitter" aria-hidden="true"></a></div>
              <div class="icon is-medium"><a target="_blank" :href="linkedin" class="fa fa-3x fa-linkedin-square" aria-hidden="true"></a></div>
              <div class="icon is-medium"><a target="_blank" :href="facebook" class="fa fa-3x fa-facebook-official" aria-hidden="true"></a></div>
              <div class="icon is-medium"><a target="_blank" :href="github" class="fa fa-3x fa-github" aria-hidden="true"></a></div>
            </div>
          </div>
        </div>

        <div class="is-hidden-tablet">
          <div class="columns subscribe-line">
            <div class="column opt-in" id="about-us">
              <h1 class="content-hdr content-hdr-alt subscribe-hdr"><span>Get intimate news</span></h1>
              <form @submit.prevent="onSubmit">
              <!-- <input type="hidden" name="_next" value="//?isSubmitted=true&from=inquiry"/> -->
                <!-- <input type="hidden" name="Email Subscription" value="Marketing Site" /> -->
                <div class="field is-grouped signup">
                  <p class="control is-expanded email-box">
                    <input type="email" name="email" required class="input is-medium email" placeholder="Enter your email address"  v-model="email"/>
                  </p>
                  <p class="control">
                    <button type="submit" class="button is-info  is-medium is-hidden-tablet is-hidden-desktop is-hidden-desktop hidden-ipad-portrait outer-for">
                      <i class="fa fa-chevron-right"></i>
                    </button>
                    <button type="submit" class="button keep-me-updated is-info is-medium  is-hidden-tablet is-hidden-mobile is-visible-desktop inner-for is-wide-screen">
                      <span>
                      Keep me updated
                      </span>
                      <span class="icon is-small">
                        <i class="fa fa-chevron-right"></i>
                      </span>
                    </button>
                  </p>                
                </div>              
              </form>
              <div class="columns copy">
                <div class="column is-two-thirds-desktop">
                  <p style="padding-left:20px;padding-right:20px;font-size:0.87rem"><small style="text-align:left">By subscribing to the newsletter, you are giving intimate.io permission to send you periodic update emails. All emails will ​include an unsubscribe link. You ​may opt-out at any time. ​ See our <a href="/privacy-policy">privacy policy</a>.</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <h1 class="content-hdr content-hdr-alt join-social">Join the conversation on social</h1>
              <div class="social">
                <div class="icon is-medium"><a target="_blank" :href="telegram" class="fa fa-3x fa-telegram" aria-hidden="true"></a></div>
                <div class="icon is-medium"><a target="_blank" :href="twitter" class="fa fa-3x fa-twitter" aria-hidden="true"></a></div>
                <div class="icon is-medium"><a target="_blank" :href="linkedin" class="fa fa-3x fa-linkedin-square" aria-hidden="true"></a></div>
                <div class="icon is-medium"><a target="_blank" :href="facebook" class="fa fa-3x fa-facebook-official" aria-hidden="true"></a></div>
                <div class="icon is-medium"><a target="_blank" :href="github" class="fa fa-3x fa-github" aria-hidden="true"></a></div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns" id="about">
          <div class="column">
            <h1 class="content-hdr content-hdr-alt join-social">Introducing intimate.io</h1>

            <p class="about">{{signupData.fields.fullContent}}</p>
          </div>
        </div>
      </div>
      <features :consumerFeatures="consumerFeatures" :industryFeatures="industryFeatures"/>
      <!-- <token-detail-admin-cost></token-detail-admin-cost> -->
      <thank-you-for-signing-up :isSubmitted="isSubmitted" @close="isSubmitted = false" ></thank-you-for-signing-up>
      
    </section>
  </div>
</template>
