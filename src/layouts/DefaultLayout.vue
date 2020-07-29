<template>
    <div class="layout">
        <header class="navigation fixed-top" v-scroll="handleScroll" :class="{ 'nav-bg': stickyHeader }">
            <nav class="navbar navbar-dark navbar-expand-lg">
                <g-link class="navbar-brand font-tertiary h3" to="/">
                    <g-image src="~/assets/images/logo/default.svg" width="65px" />
                </g-link>

                <BNavbarToggle target="navigation" />

                <BCollapse class="text-center" id="navigation" is-nav>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <g-link class="nav-link" to="/">Home</g-link>
                        </li>
                        <li class="nav-item">
                            <g-link class="nav-link" to="/about/">About</g-link>
                        </li>
                        <li class="nav-item">
                            <g-link class="nav-link" to="/blog/">Blog</g-link>
                        </li>
                    </ul>
                </BCollapse>
            </nav>
        </header>

        <transition name="fade" appear>
            <main>
                <slot/>
            </main>
        </transition>

        <ContactForm />

        <footer class="bg-dark footer-section">
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5 class="text-light">Email</h5>
                            <p class="text-white paragraph-lg font-secondary">{{ $static.metadata.email }}</p>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-light">Phone</h5>
                            <p class="text-white paragraph-lg font-secondary">{{ $static.metadata.phone }}</p>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-light">Address</h5>
                            <p class="text-white paragraph-lg font-secondary">{{ $static.metadata.address }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-top text-center border-dark py-5">
                <p class="mb-0 text-light">Copyright © {{ currentYear }} Jose Fernandez</p>
            </div>
        </footer>
    </div>
</template>

<static-query>
    query {
        metadata {
            siteName
            email
            phone
            address
        }
    }
</static-query>

<script>
import { BNavbarToggle, BCollapse } from 'bootstrap-vue';
import ContactForm from '~/components/ContactForm.vue';

export default {
    name: 'DefaultLayout',
    components: {
        BNavbarToggle,
        BCollapse,
        ContactForm,
    },
    data () {
        return {
            stickyHeader: false,
            currentYear: (new Date()).getFullYear(),
        };
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        handleScroll: function (evt, el) {
            this.stickyHeader = window.scrollY > 100;
        }
    }
};
</script>

<style scoped lang="scss">
.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}

footer {
    padding-top: 200px;
}
</style>
