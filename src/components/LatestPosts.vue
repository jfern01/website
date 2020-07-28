<template>
    <section class="section blogs-area">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title">Latest Posts</h2>
                </div>
                <div v-for="post in $static.posts.edges" :key="post.node.id" class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <article class="card shadow">
                        <g-image class="rounded card-img-top" :src="post.node.thumbnail" alt="post-thumb" />
                        <div class="card-body">
                            <h4 class="card-title">
                                <g-link class="text-dark" :to="post.node.path">{{ post.node.title }}</g-link>
                            </h4>
                            <p class="cars-text">{{ post.node.excerpt }}</p>
                            <g-link class="btn btn-sm btn-primary" :to="post.node.path">Read More</g-link>
                        </div>
                    </article>
                </div>
                <div class="col-12 text-center">
                    <div v-if="!$static.posts.edges.length" class="alert alert-warning" role="alert">
                        No posts yet. Check back soon!
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<static-query>
    query {
        posts: allPost(sortBy: "date", order: DESC, limit: 3) {
            edges {
                node {
                    id
                    title
                    thumbnail(width: 400, height: 295)
                    excerpt
                    date
                    path
                }
            }
        }
    }
</static-query>

<script>
export default {
    name: 'LatestPosts',
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">

</style>