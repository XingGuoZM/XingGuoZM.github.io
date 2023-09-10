
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<ul>\n<li>给定一个没有重复数字的序列，返回其所有可能的全排列。</li>\n<li>给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合</li>\n</ul>\n<pre><code class=\"language-js\">/* \n输入：n = 4,k = 2;\n输出：\n[\n  [2,4],\n  [3,4],\n  [2,3],\n  [1,2],\n  [1,3],\n  [1,4],\n]\n */\n</code></pre>\n<ul>\n<li>给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。说明：解集不能包含重复的子集</li>\n</ul>\n<pre><code class=\"language-js\">// 输入： nums = [1,2,3]\n/* \n输出\n[\n  [3],\n  [1],\n  [2],\n  [1,2,3],\n  [1,3],\n  [2,3],\n  [1,2],\n  []\n]\n*/\n</code></pre>\n<ul>\n<li>给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。</li>\n</ul>\n<pre><code class=\"language-js\">// 示例\n// 输入:\nnums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;\n// 输出:\n[3, 3, 5, 5, 6, 7];\n</code></pre>\n<ul>\n<li>使用js写方法把0123456789生成每组4个数，共有多少个组合和多少个排列？</li>\n<li>写一个方法，计算有N个数（可重复），分别放到M个位置中，有多少种排列？</li>\n<li>写一个方法求给定1485个元素中取33个元素的组合有多少种（大数据处理，小心CPU爆炸）</li>\n</ul>\n"}}></div>
  }
  