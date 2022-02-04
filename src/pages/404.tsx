import NavBar from '../components/NavBar';
import React from 'react';
import '../styles/pagesStyles.css';

export default function NotFound() {
  return (
    <NavBar>
      <div className='center-div'>
        <h1 className='four04'>404</h1>
        <h1>
        Sorry, page not found!
      </h1></div>
    </NavBar>
  );
}
