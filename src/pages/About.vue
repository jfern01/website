<template>
    <DefaultLayout>
        <section class="page-title-alt bg-primary position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-white font-tertiary">About Me</h1>
                    </div>
                </div>
            </div>
            <g-image src="~/assets/images/illustrations/leaf-bg-top.png" alt="illustrations" class="bg-shape-1 w-100" />
            <g-image src="~/assets/images/illustrations/dots-group-sm.png" alt="illustrations" class="bg-shape-2" />
            <g-image src="~/assets/images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-3" />
            <g-image src="~/assets/images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4" />
            <g-image src="~/assets/images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-5" />
            <g-image src="~/assets/images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-6" />
        </section>
    </DefaultLayout>
</template>

<script>
// import Header from '~/components/Header.vue';

export default {
    components: {
        // Header,
    },
    metaInfo: {
        title: 'About me'
    }
};
</script>

<style scoped lang="scss">
.page-title-alt {
    padding: 350px 0 70px;

    .container {
        position: relative;
        z-index: 1;
    }
    .bg-shape-1 {
        position: absolute;
        left: 0;
        top: 0;
    }
    .bg-shape-2 {
        position: absolute;
        left: 70px;
        top: 100px;
    }
    .bg-shape-3 {
        position: absolute;
        left: 30%;
        top: 50px;
        transform: rotate(180deg);
    }

    .bg-shape-4{
        position: absolute;
        left: 100px;
        bottom: 100px;
    }

    .bg-shape-5 {
        position: absolute;
        left: 40%;
        bottom: -25px;
    }

    .bg-shape-6 {
        position: absolute;
        bottom: 100px;
        right: -100px;
    }
}
</style>