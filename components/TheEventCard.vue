<script>
import moment from 'moment'
export default {
  name: 'the-event-card',
  props: ['event'],
  computed: {
    dateEvent() {
      if (this.event.from === this.event.to) {
        return moment(String(this.event.from)).format('MMM D, YYYY')
      } else {
        let fromYear = moment(String(this.event.from)).format('YYYY')
        let toYear = moment(String(this.event.to)).format('YYYY')
        if (fromYear == toYear) {
          return (
            moment(String(this.event.from)).format('MMM D') +
            ' - ' +
            moment(String(this.event.to)).format('MMM D, YYYY')
          )
        } else {
          return (
            moment(String(this.event.from)).format('MMM D YYYY') +
            ' - ' +
            moment(String(this.event.to)).format('MMM D, YYYY')
          )
        }
      }
    },
  },
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
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
  width: 23%;
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
</style>
<template>
  <div class="flex-container section-white" :class="{'is-mobile': $mq.phone}">
    <div :class="!$mq.phone ? 'event-date' : '' " >
      <p class="paragraph"><strong>{{ dateEvent }}</strong></p>
    </div>
    <div :class="!$mq.phone ? 'event-name' : '' " >
      <p class="paragraph"><strong>{{ event.name }}</strong></p>
      <p class="paragraph">{{ event.details }}</p>
    </div>
    <!-- <div class="">
      <p><a href="#" @click.prevent="add_to_calendar(event)"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add to calendar</a></p>
    </div> -->
  </div>
</template>
