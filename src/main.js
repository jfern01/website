/* eslint-disable no-undef */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-playfair-display');
require('typeface-roboto');

import DefaultLayout from '~/layouts/DefaultLayout.vue';

import VueMasonry from 'vue-masonry-css';
import './assets/scss/styles.scss';

// eslint-disable-next-line no-unused-vars
export default function (Vue, { router, head, isClient }) {
    Vue.use(VueMasonry);
    
    // Set default layout as a global component
    Vue.component('DefaultLayout', DefaultLayout);

    Vue.directive('scroll', {
        inserted: function (el, binding) {
            let f = function (evt) {
                if (binding.value(evt, el)) {
                    window.removeEventListener('scroll', f);
                }
            };
            
            window.addEventListener('scroll', f);
        }
    });

    head.meta.push({
        charset: 'utf-8'
    });

    head.meta.push({
        key: 'description',
        name: 'description',
        content: 'Jose Fernandez, Software Engineer in Louisville, KY.'
    });

    head.meta.push({
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    });
}
