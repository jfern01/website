<template>
    <section class="section testimonials-area bg-primary position-relative testimonial-bg-shapes">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title text-white mb-5">Testimonials</h2>
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
                                    v-if="testimonial.node.imageUrl"
                                    class="img-fluid rounded-circle mb-4 d-inline-block"
                                    :src="testimonial.node.imageUrl"
                                    alt="client-image"
                                    width="75"
                                />
                                <h4 class="text-white">{{ testimonial.node.author }}</h4>
                                <h6 class="text-light mb-4">{{ testimonial.node.title }}</h6>
                            </a>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
        <g-image src="~/assets/images/backgrounds/map.png" alt="map" class="img-fluid bg-map" />
        <g-image src="~/assets/images/illustrations/dots-group-v.png" alt="bg-shape" class="img-fluid bg-shape-1" />
        <g-image src="~/assets/images/illustrations/leaf-orange.png" alt="bg-shape" class="img-fluid bg-shape-2" />
        <g-image src="~/assets/images/illustrations/dots-group-sm.png" alt="bg-shape" class="img-fluid bg-shape-3" />
        <g-image src="~/assets/images/illustrations/leaf-pink-round.png" alt="bg-shape" class="img-fluid bg-shape-4" />
        <g-image src="~/assets/images/illustrations/leaf-cyan.png" alt="bg-shape" class="img-fluid bg-shape-5" />
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
                    imageUrl
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

</style>