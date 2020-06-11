<script>
export default {
  name: 'thank-you-for-signing-up',
  props: ['isSubmitted'],
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.close-link {
  font-size: 22px;
  color: #62b5e5;
}
.thank-you-content {
  margin-top: 20px;
}
.thank-you-signing-up {
  margin-bottom: 20px;
}
.sign-up-for-newsletter {
  color: #62b5e5 !important;
  margin-bottom: 20px;
}
.close-btn {
  width: 50%;
  background: #62b5e5;
}
// body {
//   overflow: hidden;
//   position: fixed;
// }
body.is-active {
  overflow: hidden;
  position: fixed;
}
</style>


<template>
  <div>
    <div class="modal" :class="{ 'is-active': isSubmitted }">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="thank-you-content has-text-centered">
              <h2 class="thank-you-signing-up">Thank you for signing up!</h2>
              <p><button class="button is-info is-medium close-btn"  @click="$emit('close')" >Close</button></p>
            </div>
          </div>
       </div>
     </div>
   </div>
</template>