<style lang="scss" scoped>
@import '../scss/variables';
.box img {
  max-height: 1.75rem;
  margin-bottom: 20px;
}
.chk {
  margin-top: 12.5px;
  border-radius: 2px;
  padding: 10px;
  background-color: #f4f8fb !important;
}

.agreement {
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

@media #{$extra-small-devices} {
  .accept-btn {
    width: 100%;
  }
}
@media (min-width: 414px) {
  .accept-btn {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .accept-btn {
    width: 30%;
  }
}

@media (min-width: 1200px) {
  .accept-btn {
    width: 30%;
  }
}
</style>

<template>
  <div>
    <div class="modal is-active">
       <div class="modal-background"></div>
       <div class="modal-content">
         <div class="box agreement content">
            <p class="has-text-centered is-hidden-tablet is-hidden-desktop hidden-ipad-portrait outer-for"><img src="../assets/Horizontal_Blue.svg" /></p>
            <p class="is-hidden-mobile visible-ipad-portrait visible-ipad-landscape inner-for is-wide-screen"><img src="../assets/Horizontal_Blue.svg" /></p>
            <p>The intimate cryptocurrency website is directed only at persons who:</p>
            <p>a) Are considering implementing intimate as a digital payment option for an adult (or sexual) product, service or offering</p>
            <p class="has-text-centered"><strong>OR</strong></p>
            <p>b) Are expert investors who fall within any definition provided by their local jurisdiction or are otherwise permitted to view this website in compliance with the governing laws of their respective jurisdiction</p>
            <p>If you are a resident of the United States of America, the People's Republic of China or any other region that has rulings preventing cryptocurrency token sales, you must not agree.</p>
            <p>By agreeing to access this website you accept the statement of disclosure above and undertake to provide true and accurate information upon request.</p>

            <p>
              <button class="button is-medium accept-btn is-primary" @click="$emit('close')" >Accept</button>
            </p>
          </div>
       </div>
     </div>
   </div>
</template>
