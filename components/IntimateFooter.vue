<script>
import RestrictedMaterialModal from '@/components/RestrictedMaterialModal'

export default {
  data() {
    return {
      disclaimer: false,
    }
  },

  components: {
    RestrictedMaterialModal,
  },
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <a href="#" class="button is-medium is-pulled-right" ><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
        <h2 class="content-hdr"></h2>
        <p class="copyright">
          &copy; intimate | <small><a @click.prevent="disclaimer = true" href="#">Disclaimer</a> | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a> | <a href="/cookie-policy">Cookie Policy</a></small>
        </p>
        <div class="disclaimer" v-if="disclaimer">
          <p>The intimate cryptocurrency website is directed only at persons who:</p>
          <p>a) Are considering implementing intimate as a digital payment option for an adult (or sexual) product, service or offering; or<br />
          b) Are expert investors who fall within any definition provided by their local jurisdiction or are otherwise permitted to view this website in compliance with the governing laws of their respective jurisdiction</p>
          <p>If you are a resident of the United States of America, the People's Republic of China or any other region that has rulings preventing cryptocurrency token sales, you must not agree.</p>
          <p>By agreeing to access this website you accept the statement of disclosure above and undertake to provide true and accurate information upon request.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background-color: #ffffff;
  padding: 1rem;
}
.content-hdr {
  font-weight: 300 !important;
  color: #052c65 !important;
  margin-bottom: 1px !important;
}
p.copyright {
  color: #62b5e5;
}
</style>
