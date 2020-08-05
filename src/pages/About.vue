<template>
    <DefaultLayout>
        <HeaderAlt>
            <h1 class="text-white font-tertiary display-3">About me</h1>
        </HeaderAlt>

        <section class="section pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.</p>
                        <p>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                    </div>
                    <div class="col-md-4 text-center drag-lg-top">
                        <div class="shadow-down mb-4">
                            <!-- <g-image src="~/assets/images/about/jose-fernandez.jpeg" :width="400" alt="author" class="img-fluid w-100 rounded-lg border-thick border-white" /> -->
                        </div>
                        <h4>Jose Fernandez</h4>
                    </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script>
import HeaderAlt from '~/components/HeaderAlt.vue';

export default {
    components: {
        HeaderAlt,
    },
    metaInfo: {
        title: 'About me'
    }
};
</script>

<style scoped lang="scss">

</style>