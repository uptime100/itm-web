<script>
import _ from 'lodash'
import marked from 'marked'
import TheTeamMemberCard from '@/components/TheTeamMemberCard'
export default {
  props: ['team'],
  name: 'the-team',
  components: {
    TheTeamMemberCard,
  },
  computed: {
    members(){
      let members = this.team.map((teamMember)=>{
        return {
          name: teamMember.fields.staffName,
          title: teamMember.fields.jobTitle,
          imgpath: teamMember.img,
          descriptions: [marked(teamMember.fields.shortDescription)],
          responsibilities: teamMember.fields.responsibilities,
          displayOrder: teamMember.fields.displayOrder
        }
      })
      return _.sortBy(members, ['displayOrder'])
    },
  },
}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.entity {
  flex: 0 1 33%;
  padding: 30px;
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
  .flex-container{
    justify-content: left;
  }
  .entity {
    flex: 0 1 33%;
  }
}
</style>
<template>
<section class="section section-white" id="team" >
  <div class="container has-text-centered">
    <h2 class="content-desc">People driving this to success</h2>
    <h2 class="why-intimate-for-pay is-spacing">The intimate team</h2>
  </div>
  <div class="flex-container">
    <div class="entity" v-for="(member, key) of members" :key="key + 1" >
      <the-team-member-card :member="member"></the-team-member-card>
    </div>
    <div class="entity">
    </div>
  </div>
</section>
</template>
