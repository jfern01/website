// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// eslint-disable-next-line no-undef
module.exports = function (api) {
    // eslint-disable-next-line no-unused-vars
    api.loadSource(async (actions) => {
        actions.addMetadata('email', 'self@josefernandez.me');
        actions.addMetadata('phone', '(502) 219-6375‬');
        actions.addMetadata('address', 'Louisville, KY');
    });    

    // api.createPages(({ createPage }) => {
    //     // Use the Pages API here: https://gridsome.org/docs/pages-api/
    // });
};
