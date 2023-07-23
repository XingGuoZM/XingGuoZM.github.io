
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>Typescript面试题</h1>
<pre><code>在TypeScript中tsconfig.json有什么作用？
在TypeScript中说说你对声明合并的理解
在TypeScript中as语法是什么？
在TypeScript中枚举和常量枚举有什么区别？
在TypeScript中如何实现继承？
如何将多个ts文件合并为一个js文件？
在TypeScript支持静态类吗？为什么？
在TypeScript中控制成员可见性有哪些方法？
在TypeScript中如何创建对象？
在TypeScript中如何定义和使用泛型？
在TypeScript中如何创建和使用装饰器？
什么是TypeScript接口？
在TypeScript中如何与其他工具和库集成？
在TypeScript中的lambda函数是什么？
在Typescript中如何将字符串转换为数字？
在TypeScript中如何访问模块外定义的类？
在TypeScript中的getter/setter是什么？有什么作用？
在TypeScript中支持哪些JSX模式？
在TypeScript中如何让接口的所有属性都可选？
在TypeScript中如何从子类调用基类构造函数？
在TypeScript中有哪些三斜杠指令？
在TypeScript中是如何检查null和undefined的？
在TypeScript中如何创建变量？
在TypeScript中解释下rest参数的作用及规则
你是如何编译TypeScript的文件？
请说说在TypeScript中什么是联合类型？
在TypeScript中是如何实现函数重载的？
在TypeScript中Omit类型有什么作用？
在TypeScript中使用unknown的场景是什么？
在TypeScript中什么是三斜线指令？
在TypeScript中如何定义类？
在TypeScript中的类与JavaScript类有什么不同？
在TypeScript中怎样定义和使用命名空间？
在TypeScript中是怎样进行类型检查的？
在TypeScript中的void类型是什么？在什么场景下使用？
在TypeScript中如何定义、导入和导出模块？
在TypeScript中的null与undefined有什么区别？
在TypeScript中如何支持类型推断？
在TypeScript中any和unkown有什么区别？
在TypeScript中装饰器有哪些应用场景？
请说说你对TypeScript中装饰器的理解
请说说你对TypeScript中mixin的理解
请说说你对TypeScript中类的理解
在TypeScript中never与void有什么区别？
TypeScript有哪些内置数据类型？
在TypeScript中interface与type有什么区别？
请说说你对TypeScript中泛型的理解
请说说你对TypeScript中模块的理解
为什么要推荐使用TypeScript?
请说说TypeScript有哪些特性？
请说下TypeScript中的类型断言是什么？
请说下在TypeScript中命名空间与模块的区别？
TypeScript中支持的访问修饰符有哪些？
请说说你对TypeScript中枚举的理解
TypeScript中的Declare关键字有什么作用？
你觉得TypeScript难吗？
说说你对TypeScript的了解，它和JS有什么关系？
你有在项目中使用过TypeScript吗？
在TypeScript中泛型有什么作用？
你是怎么优化你的 ts 代码的？
你有用过哪些ts的高级类型？
extends 和 implements 有什么区别？
interface 和 type 到底有什么区别？

</code></pre>
`}}></div>
  }
  