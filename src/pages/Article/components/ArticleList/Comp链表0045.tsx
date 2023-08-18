
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>链表</h3>\n<ul>\n<li>用js实现一个链表，包括创建、增删改查操作</li>\n</ul>\n<pre><code class=\"language-js\">function LinkNode (val) {\n  this.next = null;\n  this.val = val;\n}\n\nfunction createLinkList (arr) {\n  let head = new LinkNode(null);\n  let curr = new LinkNode(null);\n\n  head.next = curr;\n  for (const item of arr) {\n    const node = new LinkNode(item);\n    curr.next = node;\n    curr = curr.next;\n  }\n  return head.next;\n}\n\nfunction traverseLinkList (linkList) {\n  let currNode = linkList.next;\n  while (currNode) {\n    currNode = currNode.next;\n  }\n}\n\nconst LinkList = createLinkList([1, 2, 3])\ntraverseLinkList(LinkList)\n\n\n</code></pre>\n<ul>\n<li>写一个函数判断链表是否有环</li>\n<li>如何判断链表是否有环？</li>\n<li>写一个函数实现链表反转</li>\n<li>请使用 js 实现一个双向链表</li>\n<li>写一个单向链数据结构的 js 实现并标注复杂度</li>\n<li>给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。</li>\n<li>反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。</li>\n<li>定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。</li>\n</ul>\n<pre><code class=\"language-js\">//输入: 1->2->3->4->5->NULL\n//输出: 5->4->3->2->1->NULL\n</code></pre>\n<ul>\n<li>给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</li>\n</ul>\n<pre><code class=\"language-js\">// 给定一个链表: 1->2->3->4->5, 和 n = 2.\n// 当删除了倒数第二个结点后，链表变为 1->2->3->5.\n// 说明：给定的n保证是有效的\n</code></pre>\n<ul>\n<li>给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中没有重复出现的数字</li>\n<li>输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。</li>\n</ul>\n"}}></div>
  }
  