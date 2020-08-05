<template>
    <div class="layout">
        <header class="navigation fixed-top" v-scroll="handleScroll" :class="{ 'nav-bg': stickyHeader }">
            <nav class="navbar navbar-dark navbar-expand-lg">
                <g-link class="navbar-brand font-tertiary h3" to="/">
                    <g-image src="~/assets/images/logo/default.svg" width="65px" alt="logo" />
                </g-link>

                <BNavbarToggle target="navigation" />

                <BCollapse class="text-center" id="navigation" is-nav>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <g-link class="nav-link p-3 font-tertiary text-white text-uppercase" to="/">Home</g-link>
                        </li>
                        <li class="nav-item">
                            <g-link class="nav-link p-3 font-tertiary text-white text-uppercase" to="/blog/">Blog</g-link>
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

        <footer class="footer-section bg-dark">
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5 class="text-muted">Email</h5>
                            <p class="text-white paragraph-lg font-secondary">{{ $static.metadata.email }}</p>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-muted">Phone</h5>
                            <p class="text-white paragraph-lg font-secondary">{{ $static.metadata.phone }}</p>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-muted">Address</h5>
                            <p class="text-white paragraph-lg font-secondary">{{ $static.metadata.address }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright text-center py-5">
                <p class="mb-0 text-muted">Copyright © {{ currentYear }} Jose Fernandez</p>
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

    .copyright {
        border-top: 1px solid #343a40;
    }
}
</style>
