<template>
    <ClientOnly>
        <kinesis-container>
            <section class="hero-component bg-primary">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-11 mx-auto">
                            <h1 class="text-white font-tertiary display-3">Hi! I’m <br> Jose Fernandez<br> Software Engineer</h1>
                        </div>
                    </div>
                </div>
                <div class="layer-bg w-100">
                    <g-image class="img-fluid w-100" src="~/assets/images/illustrations/leaf-bg.png" alt="bg-shape" />
                </div>
                <div class="layer" id="l2">
                    <kinesis-element :strength="20">
                        <g-image src="~/assets/images/illustrations/dots-cyan.png" alt="bg-shape" />
                    </kinesis-element>
                </div>
                <div class="layer" id="l3">
                    <kinesis-element :strength="20">
                        <g-image src="~/assets/images/illustrations/leaf-orange.png" alt="bg-shape" />
                    </kinesis-element>
                </div>
                <div class="layer" id="l4">
                    <kinesis-element :strength="20">
                        <g-image src="~/assets/images/illustrations/dots-orange.png" alt="bg-shape" />
                    </kinesis-element>
                </div>
                <div class="layer" id="l5">
                    <kinesis-element :strength="20">
                        <g-image src="~/assets/images/illustrations/leaf-yellow.png" alt="bg-shape" />
                    </kinesis-element>
                </div>
                <div class="layer" id="l6">
                    <kinesis-element :strength="20">
                        <g-image src="~/assets/images/illustrations/leaf-cyan.png" alt="bg-shape" />
                    </kinesis-element>
                </div>
                <div class="layer" id="l7">
                    <kinesis-element :strength="20">
                        <g-image src="~/assets/images/illustrations/dots-group-orange.png" alt="bg-shape" />
                    </kinesis-element>
                </div>
                <div class="layer" id="l8">
                    <kinesis-element :strength="20">
                        <g-image src="~/assets/images/illustrations/leaf-pink-round.png" alt="bg-shape" />
                    </kinesis-element>
                </div>
                <div class="layer" id="l9">
                    <kinesis-element :strength="20">
                        <g-image src="~/assets/images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
                    </kinesis-element>
                </div>
                <ul class="list-unstyled ml-5 mt-3 position-relative zindex-1">
                    <li class="mb-3">
                        <a class="text-white" href="https://github.com/jfern01" target="_blank">
                            <ThemifyIcon icon="github" />
                        </a>
                    </li>
                    <li class="mb-3">
                        <a class="text-white" href="https://www.linkedin.com/in/jose-fernandez-89179540/" target="_blank">
                            <ThemifyIcon icon="linkedin" />
                        </a>
                    </li>
                </ul>
            </section>
        </kinesis-container>
    </ClientOnly>
</template>

<script>
import ThemifyIcon from 'vue-themify-icons';
import { KinesisContainer, KinesisElement} from 'vue-kinesis';

export default {
    name: 'Hero',
    components: {
        ThemifyIcon,
        'kinesis-container': KinesisContainer,
        'kinesis-element': KinesisElement,
    },
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '../assets/scss/components/hero.scss';
</style>