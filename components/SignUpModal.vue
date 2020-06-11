<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'sign-up-modal',
  props: ['showSignUp'],
  validations: {
    formSignUp: {
      email: {
        required,
      },
    },
  },
  data() {
    return {
      formSignUp: {
        email: '',
      },
      isLoading: false,
      success: false,
    }
  },
  methods: {
    async signUp() {
      this.$v.formSignUp.$touch()
      this.isLoading = true
      if (this.$v.formSignUp.$error) {
        this.isLoading = false
        return
      }
      this.isLoading = false
      this.success = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.s-hdr {
  margin-bottom: 20px !important;
}

.s-desc {
  color: #62b5e5 !important;
  padding: 20px;
}

.subscribe-btn {
  width: 100%;
}
.close-link {
  font-size: 22px;
  color: #62b5e5;
}

.close-btn {
  width: 50%;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex-direction: column;
}

.entity {
  padding: 5px;
}

@media #{$extra-small-devices} {
  .model-content {
    width: 75%;
  }
}
@media all and (max-width: 500px) {
  .model-content {
    width: 75%;
  }
}

@media (min-width: 768px) {
  .modal-content,
  .modal-card {
    width: 640px;
  }
  .close-btn {
    width: 30%;
  }
  .flex-container {
    flex-direction: row;
    margin-right: 10px;
    margin-left: 10px;
  }

  .email-box {
    width: 70%;
  }
  .btn-box {
    width: 30%;
  }
}
</style>


<template>
  <div>
    <div class="modal" :class="{ 'is-active': showSignUp }">
      <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="has-text-right">
              <a href="#" class="close-link" @click.prevent="$emit('close')">X</a>
            </div>
            <div class="has-text-centered">
              <div v-if="success === false">
                <h2 class="s-hdr">Sign up for the newsletter</h2>
                <p class="s-desc">Sign up for our newsletter and important intimate updates</p>
                
                <div class="flex-container">
                  <div class="entity email-box">
                    <input class="input is-medium" type="email" placeholder="Enter your email address" v-model="formSignUp.email" @blur="$v.formSignUp.email.$touch" :error="$v.formSignUp.email.$error" >
                  </div>
                  <div class="entity btn-box">
                    <button class="button is-info is-medium subscribe-btn" :class="{ 'is-loading': isLoading}" @click="signUp" >Keep me updated</button>
                  </div>
                </div>


              </div>
              <div v-if="success === true">
                <h2 class="s-hdr">Thank you for signing up!</h2>
                <p><button class="button is-info is-medium close-btn"  @click="$emit('close')" >Close</button></p>
              </div>
            </div>
          </div>
       </div>
     </div>
   </div>
</template>
