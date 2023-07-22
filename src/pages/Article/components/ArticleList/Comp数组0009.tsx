
  import React,{useEffect} from 'react';
 
  import 'highlight.js/styles/xcode.css';
  const hljs = require('highlight.js');

  export default () => {
    useEffect(()=>{
      document.querySelectorAll('code').forEach(el => {
        el.style.backgroundColor='#f8f8f8';
        el.style.marginBottom='0.1rem';
        hljs.highlightElement(el);
      });
    },[])
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h3>数组</h3>
<ul>
<li>手写数组去重(deduplicate)的方法（支持多维数组）</li>
</ul>
<pre><code class="language-js">// 去重
const deduplicate = (arr)=>{
  return [...new Set(arr)];
}
</code></pre>
<ul>
<li>手写数组排序方法(sort)</li>
</ul>
<pre><code class="language-js">// 快速排序
const quickSort = (arr)=>{
  const left =[];
  const right =[];
  const flag = arr.splice(0,1);
  for(let i=0;i<arr.length;i++){
    if(flag<arr[i]){
      right.push(arr[i]);
    }else{
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(flag,quickSort(right));
}
</code></pre>
<ul>
<li>手写数组拉平方法(flat)</li>
</ul>
<pre><code class="language-js">// 方法一
const flat = (arr,ans)=>{
  for(const item of arr){
    if(Array.isArray(item)){
      flat(item,ans)
    }else{
      ans.push(item);
    }
  }
  return ans;
}
// 方法二
const flat2 = (arr)=>{
  return String(arr).split(',').map(Number);
}
</code></pre>
<ul>
<li>手写数组indexOf</li>
<li>手写数组reduce</li>
<li>手写数组map、forEach、</li>
<li>用reduce实现map方法</li>
</ul>
`}}></div>
  }
  