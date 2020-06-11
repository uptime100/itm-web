<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  props: ['contacts'],
  data(){
    return {
      countryCode: 'GB',
      cleaveKey: Math.random(),
      mobile: '',
      website: '',
      name: '',
      message: '',
      emailAddress: '',
      success: false,
      returnMessage: '',
    }
  },
  async mounted() {

    let geoAPI = axios.create()
    let response
    try {
      response = await geoAPI.get(`https://api.ipdata.co/?api-key=${process.env.IPDATA_ICO_KEY}`)
      this.countryCode = response.data.country_code
      this.mobile = `+${response.data.calling_code}`
    } catch (e) {}
    this.cleaveKey = Math.random()
  },
  methods: {
    changeURL(){
      if (this.website) {
        if (!/^https?:\/\//i.test(this.website)) {
            this.website = "https://" + this.website;
        }
      }
    },
    async submit(env){
      let data = {
        from: 'noreply@intimate.io',
        to: process.env.PARTNERS_EMAIL,
        subject: 'ITM Website Inquiry',
        name: this.name,
        phone: this.mobile,
        emailAddress: this.emailAddress,
        website: this.website,
        message:this.message,
        //message: `Hi Team\n\nA new inquiry has been submitted from the ITM website. Please see details below.\n\nName: ${this.name}\nPhone: ${this.mobile}\nEmail Address: ${this.emailAddress}\nPrimary Website: ${this.website}\nMessage: ${this.message}`
      }
      let api = axios.create()

      try{
        await api.post(`${process.env.SERVERLESS_EMAIL}/inquiry`, data)
        this.success = true;    
      } 

      catch(e) {
          this.success = false; 
      }


      return false
    }
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
    partnersEmail(){
      return process.env.PARTNERS_EMAIL
    },
    sortedContacts(){
      return _.sortBy(this.contacts, ['fields.displayOrder'])
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables';

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  flex-direction: row;
}
.teamate {
  padding: 10px;
  .teammate-details {
    color: #052c65;
  }
  .get-in-touch-btn {
    margin-top: 20px;
  }
}
.image {
  margin: auto;
  margin-bottom: 20px;
}
.social .icon{
  margin-right: 0.75rem;
}
.social .icon:last-child{
  margin-right: 0;
}
.social{
  justify-content: center;
  align-items: center;
  display: flex;
}
.join{
  text-align: center;
}
h2.contact{
  text-align: center;
  margin-bottom: 1rem;
}
@media #{$extra-small-devices} {
  .entity {
    flex: 0 1 100%;
    padding: 10px;
  }
}
@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;
  }
  .entity {
    flex: 0 1 30%;
  }
}
@media(min-width: 769px){
  .join{
    text-align: left;
  }
  h2.contact{
    text-align: left;
  }
  .social{
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
  }
  .execs{
    padding-top: 0;
    .entity:first-child{
      padding-top: 0;
    }
  }
  div.submit{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-items: center;
  }
  .why-intimate-for-pay{
    margin-bottom: 2.5rem;
  }
  .wrap{
    position: relative;
    height: 100%;
  }
  .contact-intimate{
    padding: 3rem;
    padding-top: 2rem;
  }
}
@media (min-width: 1024px) {
  .flex-container {
    flex-direction: row;
  }
  .entity {
    flex: 0 1 30%;
  }
}
.contact-intimate{
  background-color: #fff;
}


button.submit{
  border-radius: 290486px;
  width: 100%;
  justify-self: flex-end;
  margin-top: 1rem;
  .icon{
    margin-right: 2rem;
    display: inline-block;
  }
}

@media (min-width: 769px){
  button.submit{
    border-radius: 290486px;
    width: 200px;
    justify-self: flex-end;
    .icon{
      margin-right: 2rem;
      display: inline-block;
    }
  }
}


.field{
  margin-bottom: 1.5rem;
}
a.fa{
  color: #209cee!important;
}
.message.is-success .message-body{
  font-size: 0.7rem!important;
}
.message-body p{
  width: 100%!important;
  text-align: center!important;
}
.message-header p{
  width: 100%!important;
  text-align: center!important;
  font-size: 0.9rem!important;
}
.button-container{
  flex: 1 0 80%;
  justify-content: flex-end;
  display:flex;
}
.text-muted{
  color: #b4b4b4;
}

</style>

<template>
  <section class="section integrate" id="integrate">
    <div class="container has-text-centered">
      <h2 class="content-desc">Integrate intimate.io</h2>
      <h2 class="why-intimate-for-pay">Get in touch</h2>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-one-third-tablet has-text-centered contacts execs">

          <div class="entity" v-for="(contact, key) of sortedContacts" :key="key">
            <div class="teamate section-white">
              <figure class="image is-96x96 ">
                <img class="image--cover" :src="contact.img" />
              </figure>
              <p><strong>{{contact.fields.contactName}}</strong></p>
              <p>
                <a :href="'mailto:'+contact.fields.emailAddress" class="teammate-details">{{contact.fields.emailAddress}}</a><br/>
                <a :href="'tel:'+contact.fields.contactNumber" class="teammate-details" v-if="contact.fields.contactNumber">{{contact.fields.contactNumber}}</a>
              </p>
               <div class="icon is-medium"><a target="_blank" :href="contact.fields.telegram" class="fa fa-lg fa-telegram" aria-hidden="true"></a></div>
              <div class="icon is-medium"><a target="_blank" :href="contact.fields.twitter" class="fa fa-lg fa-twitter" aria-hidden="true"></a></div>
              <div class="icon is-medium"><a target="_blank" :href="contact.fields.linkedin" class="fa fa-lg fa-linkedin-square" aria-hidden="true"></a></div>
            </div>
          </div>
        </div>

        <div class="column is-two-thirds-tablet">
          <div class="columns wrap">
            <div class="column is-11-tablet is-offset-1-tablet contact-intimate">
              <div class="columns" style="padding-top: 1rem;padding-bottom: 1.5rem">
                <div class="column is-7-tablet">
                  <h2 class="content-hdr content-hdr-alt subscribe-hdr join"><span>Join the conversation on social</span></h2>
                </div>
                <div class="column is-5-tablet">
                  <div class="social">
                    <div class="icon is-medium"><a target="_blank" :href="telegram" class="fa fa-3x fa-telegram" aria-hidden="true"></a></div>
                    <div class="icon is-medium"><a target="_blank" :href="twitter" class="fa fa-3x fa-twitter" aria-hidden="true"></a></div>
                    <div class="icon is-medium"><a target="_blank" :href="linkedin" class="fa fa-3x fa-linkedin-square" aria-hidden="true"></a></div>
                    <div class="icon is-medium"><a target="_blank" :href="facebook" class="fa fa-3x fa-facebook-official" aria-hidden="true"></a></div>
                    <div class="icon is-medium"><a target="_blank" :href="github" class="fa fa-3x fa-github" aria-hidden="true"></a></div>
                  </div>
                </div>
              </div>
              <h2 class="content-hdr content-hdr-alt subscribe-hdr contact"><span>Contact intimate.io directly</span></h2>
                <article class="message is-success" v-if="success">
                  <div class="message-header">
                    <p>Success</p>
                  </div>
                  <div class="message-body">
                    <p>Thank you for getting in touch!</p>

                    <p>We will be getting back to you within 24 - 48 hours as we do our best to answer your queries quickly.</p>
                  </div>
                </article>

                <form @submit.prevent="submit">
                  <div class="field">
                    <label class="label">Name*</label>
                    <div class="control">
                      <input class="input" type="text" name="name" required v-model="name">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Phone</label>
                    <div class="control">
                      <input :key="cleaveKey" class="input" type="tel" v-model="mobile" :options="{ phone: true, phoneRegionCode: this.countryCode }" name="phone"/>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Email Address*</label>
                    <div class="control">
                      <input class="input" type="email" name="email_address" required v-model="emailAddress">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Primary Website</label>
                    <div class="control">
                      <input class="input" type="url" v-model="website"  name="website" @change="changeURL">
                    </div>
                  </div>

                  <div class="field" style="margin-bottom: 0.5rem!important">
                    <label class="label">Message*</label>
                    <div class="control">
                      <textarea class="textarea" rows="3" style="width:100%" name="message" v-model="message" required></textarea>
                    </div>
                  </div>

                  
                  <div class="submit">
                    <div class="instruction">
                      <p class="text-muted"><small>* required fields</small></p>
                    </div>
                    <div class="button-container">
                    <button v:on-click="" class="button submit is-info is-medium " type="submit"><span>Submit</span><span class="icon is-small"><i class="fa fa-chevron-right"></i></span></button>
                    </div>
                  </div>
                </form>
         
            </div>
          </div>
          

        </div>
      </div>
    </div>
  </section>
</template>
