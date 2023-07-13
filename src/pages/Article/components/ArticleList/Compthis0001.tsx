
import React, { useEffect } from 'react';

import 'highlight.js/styles/xcode.css';
const hljs = require('highlight.js');

export default () => {
  useEffect(() => {
    document.querySelectorAll('code').forEach(el => {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, [])
  return <div style={{ fontSize: '0.26rem' }} dangerouslySetInnerHTML={{ __html: `` }}></div>
}
