/* eslint-disable prettier/prettier */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;

    const response = await graphql(`
        query {
            allContentfulPost {
                edges {
                    node {
                        author
                        slug
                        title
                        image {
                            file {
                                url
                            }
                        }
                        createdAt
                        content {
                            raw
                            references {
                                file {
                                    url
                                }
                            }
                        }
                    }
                }
            }
            nextPageSlugs: allContentfulPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    response.data.allContentfulPost.edges.forEach(edge => {
        createPage({
            path: `/post/${edge.node.slug}`,
            component: path.resolve('./src/templates/Post.tsx'),
            context: {
                data: edge,
                nextPageSlugs: response.data.nextPageSlugs.edges
            },
        });
    });
    
}