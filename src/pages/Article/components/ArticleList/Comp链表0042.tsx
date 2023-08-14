
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>链表</h3>\n<ul>\n<li>用js实现一个链表，包括创建、增删改查操作</li>\n</ul>\n<pre><code class=\"language-js\">function LinkNode (val) {\n  this.next = null;\n  this.val = val;\n}\n\nfunction createLinkList (arr) {\n  let head = new LinkNode(null);\n  let curr = new LinkNode(null);\n\n  head.next = curr;\n  for (const item of arr) {\n    const node = new LinkNode(item);\n    curr.next = node;\n    curr = curr.next;\n  }\n  return head.next;\n}\n\nfunction traverseLinkList (linkList) {\n  let currNode = linkList.next;\n  while (currNode) {\n    currNode = currNode.next;\n  }\n}\n\nconst LinkList = createLinkList([1, 2, 3])\ntraverseLinkList(LinkList)\n\n\n</code></pre>\n<ul>\n<li>写一个函数判断链表是否有环</li>\n</ul>\n<ul>\n<li>如何判断链表是否有环？</li>\n</ul>\n<ul>\n<li>写一个函数实现链表反转</li>\n</ul>\n<ul>\n<li>请使用 js 实现一个双向链表</li>\n<li>写一个单向链数据结构的 js 实现并标注复杂度</li>\n</ul>\n"}}></div>
  }
  