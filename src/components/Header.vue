<template>
    <section class="page-title bg-primary position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="text-white font-tertiary">{{ title }}</h1>
                </div>
            </div>
        </div>
        <g-image src="~/assets/images/illustrations/page-title.png" alt="illustrations" class="bg-shape-1 w-100" />
        <g-image src="~/assets/images/illustrations/leaf-pink-round.png" alt="illustrations" class="bg-shape-2" />
        <g-image src="~/assets/images/illustrations/dots-cyan.png" alt="illustrations" class="bg-shape-3" />
        <g-image src="~/assets/images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4" />
        <g-image src="~/assets/images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-5" />
        <g-image src="~/assets/images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-6" />
        <g-image src="~/assets/images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-7" />
    </section>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    },
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.page-title {
    padding: 250px 0 150px;

    .container {
        position: relative;
        z-index: 1;
    }

    .bg-shape-1 {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .bg-shape-2 {
        position: absolute;
        left: -20px;
        top: -10px;
    }

    .bg-shape-3 {
        position: absolute;
        left: 10%;
        top: 100px;
    }

    .bg-shape-4 {
        position: absolute;
        left: 50%;
        top: -20px;
    }

    .bg-shape-5 {
        position: absolute;
        left: 90px;
        bottom: -50px;
        transform: rotate(180deg);
    }

    .bg-shape-6 {
        position: absolute;
        right: 20%;
        bottom: -20px;
    }

    .bg-shape-7 {
        position: absolute;
        right: -220px;
        bottom: -100px;
    }
}
</style>