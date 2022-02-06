import React from 'react'

import { Slugs, Node, References } from '@/types';

import { Avatar, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import '../styles/templateStyles.css'

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from 'gatsby';

import NavBar from '../components/NavBar';

interface PostContextProps {
    pageContext: {
        data: {
            node: Node
        }
        nextPageSlugs: Slugs[]
    }
}

const Post: React.FC<PostContextProps> = ({ pageContext }) => {

    pageContext.nextPageSlugs.filter(item => (
        item.node.slug !== pageContext.data.node.slug
    ));
    
    const randomIndexNumber = Math.floor((Math.random() * pageContext.nextPageSlugs.length));

    return (
        <NavBar>
            <Grid container>

                <Grid item xs={12}>

                    <Paper className='paper-styles'>

                        <Stack direction='row' spacing={0}>
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>{pageContext.data.node.author.substring(0, 1)}</Avatar>
                            <Typography variant='body2' className='author-name'>
                                {pageContext.data.node.author}<br />
                                <Typography variant='caption'>{new Date(pageContext.data.node.createdAt).toDateString()}</Typography>
                            </Typography>
                        </Stack>

                        <Typography className='article-title'>{pageContext.data.node.title}</Typography>

                        <div className='image-container'>
                            <img src={pageContext.data.node.image.file.url} className='image' />
                        </div>

                        <Typography>{
                            renderRichText(pageContext.data.node.content, {
                                renderNode: {
                                    [BLOCKS.HEADING_1]: (_, children) => (
                                        <Typography variant='h1' className='heading'><b>{children}</b></Typography>
                                    ),
                                    [BLOCKS.PARAGRAPH]: (_, children) => (
                                        <Typography variant='body1' className='paragraph'>{children}</Typography>
                                    ),
                                    [BLOCKS.QUOTE]: (_, children) => (
                                        <Typography variant='body2'><blockquote>{children}</blockquote></Typography>
                                    )
                                }
                            })
                        }</Typography>

                        {
                            pageContext.data.node.content?.references ?
                                pageContext.data.node.content?.references?.map((item: References, i) => {
                                    return <div className='article-image-container' key={i}>
                                        <img src={item.file.url} className='article-image' />
                                    </div>
                                })
                                : null
                        }

                        <div className='button-container'>
                            <Button><Link to={`/post/${pageContext.nextPageSlugs[randomIndexNumber].node.slug}`} className='link'>
                                Next
                            </Link></Button>
                        </div>


                    </Paper>

                </Grid>


            </Grid >
        </NavBar>
    )
}

export default Post
