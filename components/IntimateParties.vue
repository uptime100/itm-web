<script>
export default {
  name: 'intimate-parties',
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  flex-direction: row;
}

.entity {
  flex: 0 1 50%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.media-content-alt {
  margin-right: 20px;
}

.entity-items {
  flex: 0 1 50%;
}

.content p {
  padding-right: 1rem;
}

@media #{$extra-small-devices} {
  .flex-container {
    text-align: center;
  }

  .media {
    display: block;
  }

  .media-left {
    margin-right: 0rem !important;
  }

  .media-content-alt {
    margin-right: 0px;
  }
}
@media all and (max-width: 500px) {
  .flex-container {
    flex-direction: column;
  }

  .content {
    text-align: center;
  }

  .media {
    display: block;
    text-align: center;
  }

  .media-content-alt {
    margin-right: 0px;
  }
}

@media (min-width: 768px) {
  .flex-container {
    text-align: left;
  }

  .media {
    display: flex;
  }

  .media-left {
    margin-right: 1rem !important;
  }
}
</style>

<template>
  <section class="section section-white" id="technology">
    <div class="container">
      <div class="container has-text-centered">
        <h2 class="content-desc">Ecosystem Entities</h2>
        <h2 class="why-intimate-for-pay">Parties</h2>
      </div>
      <div class="flex-container" >

        <div class="entity">
          <article class="media">
            <figure class="media-left">
              <img class="logo" src="../assets/providers.png" />
            </figure>
            <div class="media-content media-content-alt ">
              <div class="content">
                <p><strong>Providers</strong></p>
                <p>
                  Payment partners that provide a product or service to a user. They can require users to disclose specific attributes for a transaction, such as proof of over 18 or trust established through prior transactions. Examples include goods, content, interactive content and in person services such as dating. Initial partners include Urban Resorts, Paul Raymond Publications, Safe, GBG, BaDoinkVR, Emojibator, and Rendevu.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div class="entity">
          <article class="media">
            <figure class="media-left">
              <img class="logo" src="../assets/client.png" />
            </figure>
            <div class="media-content">
              <div class="content">
                <p><strong>Client</strong></p>
                <p>
                  Anyone can interact with the intimate ecosystem with the intimate wallet, or any ERC-20 wallet. Disclosure of attributes is voluntary, per transaction and private.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div class="entity">
          <article class="media">
            <figure class="media-left">
              <img class="logo" src="../assets/oracle.png" />
            </figure>
            <div class="media-content media-content-alt ">
              <div class="content">
                <p><strong>Oracle</strong></p>
                <p>
                  Oracles interact with users in the intimate ecosystem to verify and attribute real life data. This could include age, address, identity or health, such as STI status. Initial partners include Jumio, GDG, agechecked, and Safe.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div class="entity">
          <article class="media">
            <figure class="media-left">
              <img class="logo" src="../assets/matchmaker.png" />
            </figure>
            <div class="media-content">
              <div class="content">
                <p><strong>Match Maker</strong></p>
                <p>
                  Matchmakers are a type of Oracle that essentially perform curation. They perform third party services to match providers and users. Rendevu is an initial partner.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
