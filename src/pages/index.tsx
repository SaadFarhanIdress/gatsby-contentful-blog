import React from 'react';

import NavBar from '../components/NavBar'

import { Typography } from '@mui/material'
import '../styles/pagesStyles.css';

const Home = () => {
  return (
    <NavBar>
      <Typography variant='h2' className='home-header'>
        Blog App using Gatsby and TypeScript with Contentful as CMS
      </Typography>
    </NavBar>
  )
}

export default Home
