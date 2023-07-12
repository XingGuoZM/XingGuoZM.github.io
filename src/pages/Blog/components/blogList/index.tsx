
import React, { useState, ReactElement } from 'react';
import styles from './index.module.less';
import 作用域 from './作用域';
import 原型链 from './原型链';

const compKeys = ['作用域', '原型链'];
const CompMap: { [key: string]: ReactElement } = {
  '作用域': <作用域 />, '原型链': <原型链 />
}

export default () => {
  const [compKey, setCompKey] = useState('');

  return (
    <div>
      {compKeys.map(item => (
        <div
          style={styles.nav}
          onClick={() => setCompKey(item)}
          key={item}
        >
          {item}
        </div>
      ))}
      {CompMap[compKey]}
    </div>
  );
}