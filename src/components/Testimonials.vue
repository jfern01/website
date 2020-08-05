<template>
    <section class="testimonials-component section bg-primary position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title display-4 text-white mb-5">Testimonials</h2>
                </div>
                <div class="col-lg-10 mx-auto">
                    <VueSlickCarousel
                        :speed="300"
                        :adaptive-height="false"
                        :arrows="false"
                        :dots="true"
                        :autoplay="true"
                        :autoplay-speed="5000"
                        :swipe-to-slide="true">
                        <div v-for="testimonial in $static.testimonials.edges" :key="testimonial.node.id" class="text-center testimonial-content">
                            <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
                            <div class="text-white mb-4 content" v-html="testimonial.node.content"></div>
                            <a v-bind:href="testimonial.node.authorUrl">
                                <g-image
                                    v-if="testimonial.node.authorPhoto"
                                    class="img-fluid rounded-circle mb-4 d-inline-block"
                                    :src="testimonial.node.authorPhoto"
                                    alt="client-image"
                                    width="75"
                                />
                                <h4 class="text-white">{{ testimonial.node.author }}</h4>
                                <h6 class="text-muted mb-4">{{ testimonial.node.title }}</h6>
                            </a>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
        <g-image src="~/assets/images/backgrounds/map.png" alt="map" id="testimonials-bg-map" class="img-fluid position-absolute" />
        <g-image src="~/assets/images/illustrations/dots-group-v.png" alt="bg-shape" id="testimonials-bg-shape-1" class="img-fluid position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-orange.png" alt="bg-shape" id="testimonials-bg-shape-2" class="img-fluid position-absolute" />
        <g-image src="~/assets/images/illustrations/dots-group-sm.png" alt="bg-shape" id="testimonials-bg-shape-3" class="img-fluid position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-pink-round.png" alt="bg-shape" id="testimonials-bg-shape-4" class="img-fluid position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-cyan.png" alt="bg-shape" id="testimonials-bg-shape-5" class="img-fluid position-absolute" />
    </section>
</template>

<static-query>
    query {
        testimonials: allTestimonial {
            edges {
                node {
                    id
                    author
                    title
                    content
                    authorUrl
                    authorPhoto
                }
            }
        }
    }
</static-query>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'Testimonials',
    components: {
        VueSlickCarousel,
    },
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '../assets/scss/components/testimonials.scss';
</style>