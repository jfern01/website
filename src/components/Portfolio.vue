<template>
    <section class="section portfolio-area">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">Portfolio</h2>
                </div>
            </div>
            <masonry :cols="colSettings" :gutter="30">
                <div class="mb-4">
                    <div class="position-relative rounded hover-wrapper">
                        <g-image src="~/assets/images/portfolio/danos.png" alt="portfolio-image" class="img-fluid rounded w-100" />
                        <div class="hover-overlay">
                            <div class="hover-content">
                                <a class="btn btn-light btn-sm" href="https://danosseasoning.com/" target="_blank">view project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="position-relative rounded hover-wrapper">
                        <g-image src="~/assets/images/portfolio/green-remedy.png" alt="portfolio-image" class="img-fluid rounded w-100" />
                        <div class="hover-overlay">
                            <div class="hover-content">
                                <a class="btn btn-light btn-sm" href="https://greenremedy.com/" target="_blank">view project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </masonry>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Portfolio',
    data () {
        return {
            colSettings: {
                default: 3,
                768: 2,
                480: 1,
            }
        };
    },
    methods: {}
};
</script>

<style scoped lang="scss">

</style>