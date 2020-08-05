<template>
    <section class="section position-relative education-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <h2 class="section-title display-4">Education</h2>
                </div>
                <div class="col-lg-6 col-md-6 mb-80">
                    <div class="d-flex">
                        <div class="mr-lg-5 mr-3">
                            <ThemifyIcon icon="medall" class="icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                        </div>
                        <div>
                            <p class="text-dark mb-1">2012</p>
                            <h4>Software Development Technology</h4>
                            <p class="mb-0 text-muted">ITT Technical Institute</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <g-image class="img-fluid edu-bg-image w-100" src="~/assets/images/backgrounds/education-bg.png" alt="bg-image" />
    </section>
</template>

<script>
import ThemifyIcon from 'vue-themify-icons';

export default {
    name: 'Education',
    components: {
        ThemifyIcon,
    },
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.edu-bg-image {
    position: absolute;
    left: 0;
    top: -300px;
    z-index: -1;
}

.icon-bg {
	line-height: 100px;
}
</style>