import React from 'react';
import ReactDOM from 'react-dom';
import Blog from '@/pages/Blog';
import './index.less'

export default function App() {
  return <div className='app'>
    <Blog />
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);