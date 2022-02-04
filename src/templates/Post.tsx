import React from 'react'

import { slugs, node } from '@/types';

import { Avatar, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from 'gatsby';

import NavBar from '../components/NavBar';

interface PostContextProps {
    pageContext: {
        data: {
            node: node
        }
        nextPageSlugs: slugs[]
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

                    <Paper style={{ padding: '3vw 4vw 3vw 4vw' }}>

                        <Stack direction='row' spacing={0}>
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>{pageContext.data.node.author.substring(0, 1)}</Avatar>
                            <Typography variant='body2' style={{ marginLeft: '8px' }}>
                                {pageContext.data.node.author}<br />
                                <Typography variant='caption'>{pageContext.data.node.createdAt}</Typography>
                            </Typography>
                        </Stack>

                        <Typography style={{ fontSize: '6vw' }}>{pageContext.data.node.title}</Typography>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5px' }}>
                            <img src={pageContext.data.node.image.file.url} style={{ width: '100%', maxHeight: '60%', borderRadius: '20px', marginTop: '5px' }} />
                        </div>

                        <Typography>{
                            renderRichText(pageContext.data.node.content, {
                                renderNode: {
                                    [BLOCKS.HEADING_1]: (_, children) => (
                                        <Typography variant='h1' style={{ fontSize: '6vw' }}><b>{children}</b></Typography>
                                    ),
                                    [BLOCKS.PARAGRAPH]: (_, children) => (
                                        <Typography variant='body1' style={{ marginTop: '7px', marginBottom: '7px' }}>{children}</Typography>
                                    ),
                                    [BLOCKS.QUOTE]: (_, children) => (
                                        <Typography variant='body2'><blockquote>{children}</blockquote></Typography>
                                    )
                                }
                            })
                        }</Typography>

                        {
                            pageContext.data.node.content?.references ?
                                pageContext.data.node.content?.references?.map((item, i) => {
                                    return <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }} key={i}>
                                        <img src={item.file.url} style={{ borderRadius: '20px' }} />
                                    </div>
                                })
                                : null
                        }

                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                            <Button><Link to={`/post/${pageContext.nextPageSlugs[randomIndexNumber].node.slug}`} style={{ textDecoration: 'none', color: '#000000' }}>
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
