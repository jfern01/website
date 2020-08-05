<template>
    <DefaultLayout>
        <Header>
            <h1 class="text-white font-tertiary display-3">404</h1>
        </Header>
    </DefaultLayout>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
    components: {
        Header,
    },
    metaInfo: {
        title: 'Not found'
    }
};
</script>
