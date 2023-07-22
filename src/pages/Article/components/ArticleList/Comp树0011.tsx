
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h2>树</h2>
<ul>
<li>使用js创建二叉树</li>
</ul>
<pre><code class="language-js">// 创建二叉树
function TreeNode(val,left=null,right=null){
  this.left=left || null;
  this.right=right || null;
  this.val = val;
}
//     1
//  2    3
//4  5  6  7
function buildTree(){
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}
</code></pre>
<ul>
<li>手写树先序、中序、后序、层序遍历（递归+迭代）</li>
</ul>
<pre><code class="language-js">// 先序遍历
function traverse(root,ret){
    if(!root) return ;
    ret.push(root.val);
    traverse(root.left,ret);
    traverse(root.right,ret);
}
// 测试
const root = buildTree();
const ret = [];
traverse(root,ret);
console.log(ret) // [1, 2, 4, 5, 3, 6, 7]
</code></pre>
<pre><code class="language-js">//层序遍历
function traverse(root,ret,index){
    if(!root) return ;
    ret[index] = ret[index] || [];
    ret[index].push(root.val);
    index++;
    traverse(root.left,ret,index);
    traverse(root.right,ret,index);
}
// 测试
const root = buildTree();
const ret = [];
traverse(root,ret,0);
console.log(ret) //[ [1],[2, 3] , [4, 5, 6, 7]]
</code></pre>
<pre><code class="language-js">// 先序
function traverse(root,ret){
    let stack=[];

    while(root){
        ret.push(root.val);
        stack.push(root);
        root=root.left;
    }
    
    while(stack.length>0){
        const node = stack.pop();
        let t = node.right
        while(t){
            ret.push(t.val)
            stack.push(t)
            t=t.left;
        }
    }
}
</code></pre>
<pre><code class="language-js">// 层序
function traverse(root,ret,index){
    let stack=[];
    let preNode;
    while(root){
        stack.push(root);
        root=root.left;
        index++;
    }
    
    while(stack.length>0){
        const node = stack[stack.length-1];
        if(!node.left &amp;&amp; !node.right ||
           preNode === node.right ||
           preNode === node.left &amp;&amp; !node.right
          ){
                index--;
                ret[index] = ret[index] || [];
                ret[index].push(node.val);
                preNode=node;
                stack.pop();
          }else{
           let t = node.right;
            while(t){
                stack.push(t);
                t=t.left;
                index++;
            } 
          }
    }
}
</code></pre>
<ul>
<li>判断平衡二叉树、搜索二叉树、完全二叉树</li>
</ul>
`}}></div>
  }
  