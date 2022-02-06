import React from 'react';

import NavBar from '../components/NavBar'

import { Typography } from '@mui/material'
import '../styles/pagesStyles.css';

const Home = () => {
  return (
    <NavBar><div className='header-container'>
      <Typography variant='h2' className='home-header'>
        Blog App using Gatsby and TypeScript with Contentful as CMS
      </Typography>
    </div></NavBar>
  )
}

export default Home
