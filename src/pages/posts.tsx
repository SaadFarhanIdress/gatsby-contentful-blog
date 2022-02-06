import React from 'react';

import { useStaticQuery, graphql as gql } from 'gatsby';

import PostsContainer from '../components/PostsContainer';
import NavBar from '../components/NavBar';

const Posts = () => {

    const data = useStaticQuery(
        gql`query ContentfulPostsQuery {
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
                        }
                    }
                }
            }`
    )

    return (
        <NavBar>
            <PostsContainer data={data} />
        </NavBar>
    )
}

export default Posts
