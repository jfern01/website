<template>
    <DefaultLayout>

        <Hero />

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <p class="font-secondary paragraph-lg text-dark">Jose <span class="text-primary">♥</span> Open Source</p>
                        <p class="font-secondary paragraph-lg text-dark">A graduate of ITT Tech, Jose Fernandez has been with Crosby Interactive since 2013. He enjoys challenging projects that provide opportunities for problem solving and learning new skills. Jose specializes in providing software solutions which may include Dev Ops, Linux systems administration and data analysis. His favorite programming languages are Python, TypeScript, PHP and Go. Jose prefers the freedom and innovation of open source technologies and is always looking for new ways to leverage and contribute to the free and open source software community.</p>
                        <g-link to="/about/" class="btn btn-transparent">know more</g-link>
                    </div>
                </div>
            </div>
        </section>

        <Skills />

        <Experience />

        <Education />

        <!-- <Services /> -->

        <Portfolio />

        <Testimonials />

        <Brands />

        <LatestPosts />

    </DefaultLayout>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Skills from '~/components/Skills.vue';
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
// import Services from '~/components/Services.vue';
import Portfolio from '~/components/Portfolio.vue';
import Testimonials from '~/components/Testimonials.vue';
import LatestPosts from '~/components/LatestPosts.vue';
import Brands from '~/components/Brands.vue';

export default {
    components: {
        Hero,
        Skills,
        Experience,
        Education,
        //Services,
        Portfolio,
        Testimonials,
        LatestPosts,
        Brands,
    },
    metaInfo: {
        title: 'Home'
    }
};
</script>

<style>

</style>