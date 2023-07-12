import React from 'react';
import ReactDOM from 'react-dom';
import Article from '@/pages/Article';
import './index.less'

export default function App() {
  return <div className='app'>
    <Article />
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);