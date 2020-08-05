<template>
    <section class="header-alt-component bg-primary position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <slot />
                </div>
            </div>
        </div>
        <g-image src="~/assets/images/illustrations/leaf-bg-top.png" alt="illustrations" id="header-alt-bg-shape-1" class="w-100 position-absolute" />
        <g-image src="~/assets/images/illustrations/dots-group-sm.png" alt="illustrations" id="header-alt-bg-shape-2" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-yellow.png" alt="illustrations" id="header-alt-bg-shape-3" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-orange.png" alt="illustrations" id="header-alt-bg-shape-4" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/dots-group-cyan.png" alt="illustrations" id="header-alt-bg-shape-5" class="position-absolute" />
        <g-image src="~/assets/images/illustrations/leaf-cyan-lg.png" alt="illustrations" id="header-alt-bg-shape-6" class="position-absolute" />
    </section>
</template>

<script>
export default {
    name: 'HeaderAlt',
    props: {},
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '../assets/scss/components/header-alt.scss';
</style>