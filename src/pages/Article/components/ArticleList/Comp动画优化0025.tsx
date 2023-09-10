
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<p>动画为什么需要优化</p>\n<h3>css动画</h3>\n<p>过渡动画（transition）表示的不同状态之间切换的时候定义的过渡动画，特点是一次性的、简单方便无需关注过程</p>\n<p>帧动画（animation+keyframe）表示使用keyframe自定义动画帧，然后通过animation来调用，animation可以添加一些属性。其特点是可以控制播放的速度、次数，动画细腻流畅</p>\n<p>css动画特点：缺乏控制能力，灵活性不够</p>\n<h3>js动画</h3>\n<p>requestAnimationFrame接收一个回调函数，在浏览器下次重绘之前调用回调，通常用于制作动画，回调函数的执行次数和浏览器屏幕刷新次数相匹配，页面处于后台时，它会被暂停调用。</p>\n<p>dom.animate</p>\n<p>雪碧图动画</p>\n<p>canvas/svg动画和lottie</p>\n"}}></div>
  }
  