import React from 'react';
import Home from './pages/Home'
import './App.css';
import { viewport } from './utils';

viewport();

export default function App() {
  return <div className='app'>
    <Home></Home>
  </div>
}