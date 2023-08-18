
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h2>按钮组件</h2>\n<p>按钮的业务属性是可交互，点击可以给到某种反馈。首先是要吸引你可以点击它，然后点击它之后能有一些反应（变化）。因此我们可以定义按钮组件的功能</p>\n<ol>\n<li>可以吸引点击：能够自动执行动画，包括但不仅限于呼吸、抖动、背景光旋转等</li>\n<li>给予某种反馈：点击能有一些变化，包括但不仅限于大小、背景色、背景图、文案等</li>\n<li>完成自定义业务：点击之后能执行指定业务，包括但不仅限于onClick回调函数、</li>\n<li>通用按钮组件：能从外部自定义样式，按钮只做核心通用(点击之后形变+按钮的默认样式)</li>\n</ol>\n<h2>技术方案和输入输出</h2>\n<p>执行自定义动画可以通过添加className或者style的形式实现。点击之后的变化可以通过监听addEventListener touchstart和touchend来实现，如果考虑pc端兼容性，可以通过mousedown、mouseup来实现。完成指定业务可以通过绑定点击事件，外部传入回调函数来实现。通用按钮可以通过props.chilren外部动态传入组件。现在我们可以定义入参和出参了</p>\n<h3>入参</h3>\n<pre><code class=\"language-ts\">interface IButton {\n  children: ReactElement | string;\n  onClick?: (event: TouchEvent) => {};\n  className?: string;\n  style?: CSSStyleDeclaration;\n}\n</code></pre>\n<h3>出参</h3>\n<pre><code class=\"language-jsx\">// 例如\n<Button className={className} onClick={handleClk}><img/></Button>\n</code></pre>\n<h2>实现参考代码</h2>\n<pre><code class=\"language-tsx\">\nexport default function Button({ children, onClick, className, style }: IButton) {\n  const btnRef = useRef<HTMLDivElement | null>(null);\n  useEffect(() => {\n    const dom = btnRef.current as HTMLDivElement;\n\n    const handleStart = () => dom.style.transform = 'scale(0.9)';\n    const handleEnd = () => dom.style.transform = 'scale(1)';\n\n    dom.addEventListener('touchstart', handleStart)\n    document.addEventListener('touchend', handleEnd)\n    return () => {\n      dom.removeEventListener('touchstart', handleStart);\n      document.removeEventListener('touchend', handleEnd);\n    }\n  }, [])\n  return <div\n    style={style}\n    className={classnames('btn', className)}\n    onClick={onClick}\n    ref={btnRef}\n  >\n    {children}\n  </div>\n}\n</code></pre>\n"}}></div>
  }
  