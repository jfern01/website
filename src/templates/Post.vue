<template>
    <DefaultLayout>
        <Header>
            <h1 class="text-white font-tertiary display-5">{{ $page.post.title }}</h1>
        </Header>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="font-secondary">Published on {{ $page.post.date }} by
                            <span class="text-primary">{{ $page.post.author }}</span>
                        </p>
                        <div class="content" v-html="$page.post.content"></div>
                    </div>
                </div>
            </div>
        </section>

    </DefaultLayout>
</template>

<page-query>
    query($id: ID!) {
        post(id: $id) {
            id
            title
            author
            content
            date(format: "MMMM D, YYYY")
        }
    }
</page-query>

<script>
import Header from '~/components/Header.vue';

export default {
    components: {
        Header,
    },
    // metaInfo: {
    //     title: 'Not found'
    // }
};
</script>

<style scoped lang="scss">

</style>