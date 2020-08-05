<template>
    <section class="header-component bg-primary position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <slot />
                </div>
            </div>
        </div>
        <g-image src="~/assets/images/illustrations/page-title.png" alt="illustrations" id="header-bg-shape-1" class="position-absolute w-100" />
        <g-image src="~/assets/images/illustrations/leaf-pink-round.png" alt="illustrations" id="header-bg-shape-2" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/dots-cyan.png" alt="illustrations" id="header-bg-shape-3" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-orange.png" alt="illustrations" id="header-bg-shape-4" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-yellow.png" alt="illustrations" id="header-bg-shape-5" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/dots-group-cyan.png" alt="illustrations" id="header-bg-shape-6" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-cyan-lg.png" alt="illustrations" id="header-bg-shape-7" class="position-absolute" />
    </section>
</template>

<script>
export default {
    name: 'Header',
    props: {},
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '../assets/scss/components/header.scss';
</style>