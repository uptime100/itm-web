<script>
export default {
  name: 'how-intimate-works-details',
  props: ['readMore'],
}
</script>

<style lang="scss" scoped>
.section {
  color: #ffffff;
}

p strong {
  color: #ffffff;
}
ul {
  margin-left: 20px;
  margin-top: 20px;
  list-style: circle;
}
</style>

<template>
  <section class="section has-text-left">
    <div v-if="readMore === true">
      <figure class="image">
        <img src="../assets/howintimateworks.png" >
      </figure>
      <p><strong>Example with Rendevu</strong></p>
      <ul>
        <li>Bob signs with Rendevu to engage a provider</li>
        <li>Bob provides ID to Jumio for verification</li>
        <li>Bob books appointment with Alice; his credit card is pre-authorised for the value of the transaction</li>
        <li>When Alice arrives for the appointment, she checks that Bob matches the certified Jumio ID</li>
        <li>Bob and Alice finalise the appointment in the Rendevu app</li>
        <li>The engagement is countersigned by Rendevu and published to the blockchain, indexed against Bob and Alice to establish and build trust and reputation for each.</li>
      </ul>
    </div>  
  </section>
</template>
