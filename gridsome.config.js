// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// eslint-disable-next-line no-undef
module.exports = {
    siteUrl: 'https://josefernandez.dev',
    siteName: 'Jose Fernandez',
    icon: './src/assets/images/logo/favicon.png',
    plugins: [
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-157807213-2'
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                exclude: ['/about'],
            },
        },
        {
            use: '@gridsome/plugin-critical',
            options: {
                paths: ['/'],
                width: 1300,
                height: 900
            }
        },
        {
            use: 'gridsome-plugin-pwa',
            options: {
                // Service Worker Options
                disableServiceWorker: false,
                serviceWorkerPath: 'service-worker.js',
                cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif,woff,woff2',
                disableTemplatedUrls: false,       // Optional
    
                // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
                manifestPath: 'manifest.json',
                title: 'Jose Fernandez',
                startUrl: '/',
                display: 'standalone',
                statusBarStyle: 'default',
                themeColor: '#41228e',
                backgroundColor: '#41228e',
                icon: './src/assets/images/logo/favicon.png',
                shortName: 'JF',              // Optional
                maskableIcon: true,                 // Optional
    
                // Standard Meta Tags
                svgFavicon: './src/assets/images/logo/default/favicon.svg',
    
                // Microsoft Windows Meta Tags
                msTileColor: '#41228e',             // Optional
    
                // Apple MacOS Meta Tags
                appleMaskIcon: 'favicon.svg',       // Optional
                appleMaskIconColor: '#41228e',      // Optional
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Testimonial',
                baseDir: './content/testimonials',
                path: '*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Post',
                baseDir: './content/posts',
                path: '*.md',
            }
        },
    ],
    templates: {
        Post: '/blog/:title',
    }
};