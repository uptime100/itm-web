<script>
    import marked from 'marked'
    export default {
        props: ['consumerFeatures', 'industryFeatures'],
        computed: {
            consumerFeaturesMarked(){
                return marked(this.consumerFeatures.fields.fullContent)
            },
            industryFeaturesMarked(){
                return marked(this.industryFeatures.fields.fullContent)
            },
        }
    }
</script>
<style lang="scss" scoped>
    .spotlight {
    background: linear-gradient(to bottom, #f4f8fb, #f4f8fb), linear-gradient(to top, #fff, #fff);
    background-size: 100% 20.5%, 100% 100%;
    background-repeat: no-repeat;
    background-position: 0 0, 0 0;
    }
    .container.spotlight-content {
    max-width: 900px;
    background-color: #59ade2;
    .column {
        justify-content: flex-start;
        color: #fff;
    }
    .featured {
        justify-content: center;
        align-items: center;
        display: flex;
    }
    small {
        font-size: 0.8rem;
    }
    h3 {
        color: #0d2c5e;
        font-size: 1.25rem;
        margin-top: 0;
        font-weight: bold;
    }
    strong {
        color: #0d2c5e;
        font-size: 1rem;
    }
    p.position {
        font-size: 0.8rem;
    }
    .featured-logo {
        max-height: 50px;
        filter: grayscale(100%);
        margin-top: 0.5rem;
    }
    }
    .title {
    padding: 0;
    margin: 0;
    }
    .featured {
    padding: 0;
    }
    .spotlight-message {
    padding: 0.75rem;
    text-align: left;
    }
    h3.feature-list {
    font-size: 1.5rem;
    color: #0d2c5e;
    text-align: left;
    margin-bottom: 0.75rem;
    }
    ul {
    text-align: left;
    margin: 0;
    }
    ul.dashed {
    list-style-type: disc;
    margin-left: 1em;
    }
    .container.features {
    margin-top: 2rem;
    max-width: 900px;
    }
    p.feature {
    text-align: left;
    margin-bottom: 1rem;
    }
    .features{
    margin-bottom: 1rem;
    }
    @media (min-width: 769px) {
    .title {
        padding: 0.75rem;
    }
    .container.spotlight-content {
        padding: 2rem;
        .featured {
        justify-content: flex-start;
        }
    }
    }
    .media {
    color: #fff;
    }
   
</style>
<style lang="scss">
    .feature-div ul li{
        text-align: left;
    }
</style>
<template>
    <section class="section">
        <div class="container features">
            <div class="columns">
            <div class="column">
                <h3 class="feature-list">Consumer Features</h3>
                <div v-html="consumerFeaturesMarked" class="feature-div"></div>
            </div>
            <div class="column">
                <h3 class="feature-list">Industry Features</h3>
                <div v-html="industryFeaturesMarked" class="feature-div"></div>
            </div>

            </div>
        </div>
    </section>
</template>
