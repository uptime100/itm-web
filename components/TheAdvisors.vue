<script>
import marked from 'marked'
import _ from 'lodash'
import TheTeamMemberCard from '@/components/TheTeamMemberCard'
export default {
  name: 'the-advisors',
  props: ['advisors'],
  components: {
    TheTeamMemberCard,
  },
  computed: {
    members(){
      let members = this.advisors.map((teamMember)=>{
        return {
          name: teamMember.fields.advisorName,
          title: teamMember.fields.jobTitle,
          imgpath: teamMember.img,
          descriptions: [marked(teamMember.fields.shortDescription)],
          displayOrder: teamMember.fields.displayOrder
        }
      })
      return _.sortBy(members, ['displayOrder'])
    }
  },
}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.is-mobile {
  flex-direction: column;
  .entity {
    flex: 0 1 100%;
  }
}

.entity {
  flex: 0 1 100%;
  padding: 30px;
}
@media (min-width: 769px) {
  .entity {
    flex: 0 1 50%;
  }
}

@media (min-width: 1025px) {
  .entity {
    flex: 0 1 25%;
  }
}
</style>
<template>
<section class="section section-white" id="advisors" >
  <div class="container has-text-centered">
    <h2 class="why-intimate-for-pay is-spacing">Advisors</h2>
  </div>
  <div class="flex-container" :class="{'is-mobile': $mq && $mq.phone}" >
    <div class="entity" v-for="(member, key) of members" :key="key + 1" >
      <the-team-member-card :member="member"></the-team-member-card>
    </div>
  </div>
</section>
</template>
