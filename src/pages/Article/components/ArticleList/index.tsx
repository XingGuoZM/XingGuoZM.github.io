
  import React, { ReactElement } from 'react';
  import 作用域 from './作用域';
import 原型链 from './原型链';

  const compKeys = ['作用域','原型链'];
  const CompMap: {[key: string]: ReactElement} = {
    '0000': <作用域 />,'0001': <原型链 />
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }