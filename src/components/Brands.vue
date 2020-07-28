<template>
    <section class="section pb-0">
        <div class="container">
            <VueSlickCarousel class="client-logo-slider d-flex align-items-center"
                :responsive="responsiveSettings"
                :arrows="false"
                :autoplay="true"
                :autoplay-speed="1500"
                :swipe-to-slide="false"
                :draggable="false"
                :slides-to-show="5">
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/kyfb.png" width="75" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/daretocare.png" width="500" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/goodwill.png" width="500" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/greenremedy.png" width="500" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/kysbest.png" width="500" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/ggc.png" width="200" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/andersons.png" width="500" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/kygunco.png" width="500" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/danos.png" width="500" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/usba.png" width="100" alt="client-logo" />
                    </a>
                </div>
                <div class="">
                    <a href="#" class="text-center d-block outline-0 p-4">
                        <g-image class="d-unset img-fluid" src="~/assets/images/brands/iammo.jpg" width="500" alt="client-logo" />
                    </a>
                </div>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'Brands',
    components: {
        VueSlickCarousel,
    },
    data () {
        return {
            responsiveSettings: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    },
    methods: {}
};
</script>

<style scoped lang="scss">

</style>