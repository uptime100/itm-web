<script>
import _ from 'lodash'
import moment from 'moment'
export default {
  props: ['allEvents'],
  name: 'events',
  data() {
    return {
      collapsed: false,
    }
  },
  computed: {

    events(){
      return this.allEvents.map((event)=>{ 
        let formattedEvent = {
          from: event.fields.eventStartDate,
          to: event.fields.eventEndDate,
          name: event.fields.eventName,
          imgpath: event.img,
          details: event.fields.shortDescription
        }
        return formattedEvent
      })
    },

    previousEvents(){
      return this.sorted_events.filter(a => {
        let today = moment().format('YYYY-MM-DD')
        let from = moment(String(a.from)).format('YYYY-MM-DD')
        let to = moment(String(a.to)).format('YYYY-MM-DD')
        if (from >= today) {
          return false
        } else {
          if (today <= to) {
            return false
          } else {
            return true
          }
        }
      })
    },

    latestEvents(){
      return this.sorted_events.filter(a => {
        let today = moment().format('YYYY-MM-DD')
        let from = moment(String(a.from)).format('YYYY-MM-DD')
        let to = moment(String(a.to)).format('YYYY-MM-DD')
        if (from >= today) {
          return true
        } else {
          if (today <= to) {
            return true
          } else {
            return false
          }
        }
      })
    },
    
    sorted_events() {
      return _.orderBy(this.events, ['from'], ['desc'])
    },
    
    client() {
      return process.env.ADD_EVENT_CLIENT
    },
  },
  methods: {
    formattedDate(date){
      return moment(date).format('YYYY-MM-DD')
    },
    event_date(event) {
      if (event.from === event.to) {
        return moment(String(event.from)).format('MMMM D, YYYY')
      } else {
        let fromYear = moment(String(event.from)).format('YYYY')
        let toYear = moment(String(event.to)).format('YYYY')
        if (fromYear == toYear) {
          return moment(String(event.from)).format('MMMM D') + ' - ' + moment(String(event.to)).format('MMMM D, YYYY')
        } else {
          return (
            moment(String(event.from)).format('MMMM D YYYY') + ' - ' + moment(String(event.to)).format('MMMM D, YYYY')
          )
        }
      }
    },
    check_events() {
      if (this.collapsed === false) {
        if (this.latestEvents.length > 0) {
          return this.latestEvents
        } else {
          this.collapsed = true
          return this.previousEvents
        }
      } else {
        return this.previousEvents
      }
    },
  },
  mounted() {
    this.check_events()
  },
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MMMM D, YY')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  width: 40%;
  color: #345d9d;
  border-radius: 1.5px;
  background-color: #e4eff7;
  border: #e4eff7 solid 1px;
}
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px;
}

.event-date {
  flex: none;
  width: 20%;
}
.event-name {
  flex: none;
  width: 55%;
}

.is-mobile {
  flex-direction: column !important;
}

.paragraph {
  margin-bottom: 10px;
}

.addeventatc {
  display: inline-table !important;
}

.prev-btn {
  width: 100%;
}
.event-img {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: black;
  padding: 20px;
}
.spacer {
  min-width: 14%;
  display: flex;
  justify-content: center;
}
.card-image .image{
  background-color: #000;
}
.card.event{
  margin-bottom: 1rem;
  .image.is-4by3{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:0;
    img{
      position: relative;
    }
  }
}
</style>

<template>
  <section class="section" id="events">
    <div class="container has-text-centered">
      <h2 class="content-desc">Get in touch at the following events</h2>
      <h2 class="why-intimate-for-pay">intimate.io Roadshow</h2>
    </div>


    <div v-for="event in latestEvents" :key="event.name">
      <div class="is-hidden-desktop">

        <div class="card event">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="" :src="event.imgpath" style="object:fit"/>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4"><strong>{{ event.name }}</strong></p>
                <p class="subtitle is-6"><strong>{{ event_date(event) }}</strong></p>
              </div>
            </div>

            <div class="content">
              {{event.details}}

              <div class="spacer">
                <div title="Add to Calendar" class="addeventatc">
                  Add to Calendar
                  <span class="start">{{ formattedDate(event.from) }}</span>
                  <span class="end">{{ formattedDate(event.to) }}</span>
                  <span class="title">{{ event.name}} </span>
                  <span class="description">{{ event.details}}</span>
                  <span class="client">{{ client }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div class="flex-container section-white is-hidden-mobile">
        <div :class="'event-date'" >
          <p class="paragraph"><strong>{{ event_date(event) }}</strong></p>
          <div v-if="event.imgpath" class="event-img">
            <figure class="image">
              <img class="" :src="event.imgpath" />
            </figure>
          </div>
        </div>
        <div :class="'event-name'" >
          <p class="paragraph"><strong>{{ event.name }}</strong></p>
          <p class="paragraph">{{ event.details }}</p>
        </div>
        <div class="spacer">
          <div title="Add to Calendar" class="addeventatc">
            Add to Calendar
            <span class="start">{{ formattedDate(event.from) }}</span>
            <span class="end">{{ formattedDate(event.to) }}</span>
            <span class="title">{{ event.name}} </span>
            <span class="description">{{ event.details}}</span>
            <span class="client">{{ client }}</span>
          </div>
        </div>
      </div>
    </div>


    <div v-show="collapsed || latestEvents.length === 0" >
      <div v-for="event in previousEvents" :key="event.name">

        <div class="is-hidden-desktop">

          <div class="card event">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="" :src="event.imgpath" style="object:fit"/>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4"><strong>{{ event.name }}</strong></p>
                  <p class="subtitle is-6"><strong>{{ event_date(event) }}</strong></p>
                </div>
              </div>

              <div class="content">
                {{event.details}}
              </div>
            </div>
          </div>

        </div>
        <div class="flex-container section-white is-hidden-mobile">
          <div :class="'event-date'" >
            <p class="paragraph"><strong>{{ event_date(event) }}</strong></p>
            <div v-if="event.imgpath" class="event-img">
              <figure class="image">
                <img class="" :src="event.imgpath" />
              </figure>
            </div>
          </div>

          <div :class="'event-name'" >
            <p class="paragraph"><strong>{{ event.name }}</strong></p>
            <p class="paragraph">{{ event.details }}</p>
          </div>

          <div class="spacer is-hidden-mobile">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered" v-if="previousEvents.length > 0">
      <button class="button has-text-centered" :class="'prev-btn'" @click.prevent="collapsed = !collapsed" :disabled="collapsed === true " >Previous Events </button>
    </div>
  </section>
</template>
