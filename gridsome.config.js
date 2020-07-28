// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// eslint-disable-next-line no-undef
module.exports = {
    siteUrl: 'https://josefernandez.dev',
    siteName: 'Jose Fernandez',
    plugins: [
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-157807213-2'
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
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