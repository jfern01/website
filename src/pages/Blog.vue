<template>
    <DefaultLayout>
        <Header>
            <h1 class="text-white font-tertiary display-3">Blog</h1>
        </Header>

        <section class="section blogs-area">

            <div class="container">
                <masonry :cols="colSettings" :gutter="30">
                    <article class="card shadow mb-4" v-for="post in $page.posts.edges" :key="post.node.id">
                        <g-image v-if="post.node.thumbnail" class="rounded card-img-top" :src="post.node.thumbnail" alt="post-thumb" />
                        <div class="card-body">
                            <h4 class="card-title">
                                <g-link class="text-dark" :to="post.node.path">{{ post.node.title }}</g-link>
                            </h4>
                            <p class="cars-text">{{ post.node.excerpt }}</p>
                            <g-link class="btn btn-sm btn-primary" :to="post.node.path">Read More</g-link>
                        </div>
                    </article>
                </masonry>
                <div class="row">
                    <div class="col-12 text-center">
                        <div v-if="!$page.posts.edges.length" class="alert alert-warning" role="alert">
                            No posts yet. Check back soon!
                        </div>
                    </div>
                </div>
                <BPaginationNav
                    v-model="$page.posts.pageInfo.currentPage"
                    align="center"
                    size="lg"
                    router-component-name="g-link"
                    :link-gen="linkGen"
                    :number-of-pages="$page.posts.pageInfo.totalPages" use-router></BPaginationNav>
            </div>
        </section>
    </DefaultLayout>
</template>

<page-query>
    query($page: Int) {
        posts: allPost(sortBy: "date", order: DESC, perPage: 9, page: $page)
            @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    id
                    title
                    thumbnail(width: 400, height: 295)
                    excerpt(length: 80)
                    date
                    path
                }
            }
        }
    }
</page-query>

<script>
import Header from '~/components/Header.vue';
import { BPaginationNav } from 'bootstrap-vue';

export default {
    name: 'Blog',
    components: {
        Header,
        BPaginationNav
    },
    data () {
        return {
            colSettings: {
                default: 3,
                992: 2,
                767: 1,
            }
        };
    },
    methods: {
        linkGen: function(pageNum) {
            return {
                path: pageNum == 1 ? '/blog/' : `/blog/${pageNum}`
            };
        },
    },
    metaInfo: {
        title: 'Blog'
    }
};
</script>
