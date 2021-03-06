import React from 'react';

import { Edges } from '@/types';

import { Grid, Paper, Stack, Avatar, Typography, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import '../styles/componentStyles.css';

import { Link } from 'gatsby';
import { formatDistance } from 'date-fns';

interface PostsProps {
    data: {
        allContentfulPost: {
            edges: Edges[]
        }
    }
}

const PostsContainer: React.FC<PostsProps> = ({ data }) => {
    return (
        <div className='posts-container'>
            <Grid container spacing={2}>
                {data.allContentfulPost.edges.map(({ node }) => {
                    const year = new Date(node.createdAt).getFullYear()
                    const month = new Date(node.createdAt).getMonth()
                    const day = new Date(node.createdAt).getDay()
                    return (<Grid item xs={12} md={6} sm={6} key={node.slug}>
                        <Paper className='paper-style'>
                            <Stack direction='row' spacing={2}>
                                <Avatar sx={{ bgcolor: deepPurple[500] }} className='avatar'>{node.author.substring(0, 1)}</Avatar>
                                <Typography variant='body2'>
                                    {node.author}<br />
                                    <Typography variant='caption'>{formatDistance(new Date(year, month, day), new Date(), { addSuffix: true })}</Typography>
                                </Typography>
                            </Stack>
                            <Typography variant='h5' className='post-card-title'>{node.title}</Typography>
                            <img src={node.image.file.url} className='post-card-image' />
                            <div className='post-card-button-container'>
                                <Link to={`/post/${node.slug}`} className='link'><Button className='post-card-button'>View Post</Button></Link>
                            </div>
                        </Paper>
                    </Grid>)
                })}
            </Grid>
        </div>
    )
}

export default PostsContainer
