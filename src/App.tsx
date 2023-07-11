import React, { useEffect } from 'react';
import Home from './pages/Home'
import Blog from './pages/Blog'
import { viewport } from './utils';
import setBodyStyleProperty from './utils/setBodyStyleProperty';
import './App.less';

viewport();

export default function App() {
  useEffect(() => {
    const theme = localStorage.getItem('--theme-color')
    theme && setBodyStyleProperty('--theme-color', theme);
  }, [])
  return <div className='app'>
    <Home></Home>
    {/* <Blog /> */}
  </div>
}