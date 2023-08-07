
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
<ul>
<li>在TypeScript中tsconfig.json有什么作用？</li>
<li>在TypeScript中说说你对声明合并的理解</li>
<li>在TypeScript中as语法是什么？</li>
<li>在TypeScript中枚举和常量枚举有什么区别？</li>
<li>在TypeScript中如何实现继承？</li>
<li>如何将多个ts文件合并为一个js文件？</li>
<li>在TypeScript支持静态类吗？为什么？</li>
<li>在TypeScript中控制成员可见性有哪些方法？</li>
<li>在TypeScript中如何创建对象？</li>
<li>在TypeScript中如何定义和使用泛型？</li>
<li>在TypeScript中如何创建和使用装饰器？</li>
<li>什么是TypeScript接口？</li>
<li>在TypeScript中如何与其他工具和库集成？</li>
<li>在TypeScript中的lambda函数是什么？</li>
<li>在Typescript中如何将字符串转换为数字？</li>
<li>在TypeScript中如何访问模块外定义的类？</li>
<li>在TypeScript中的getter/setter是什么？有什么作用？</li>
<li>在TypeScript中支持哪些JSX模式？</li>
<li>在TypeScript中如何让接口的所有属性都可选？</li>
<li>在TypeScript中如何从子类调用基类构造函数？</li>
<li>在TypeScript中有哪些三斜杠指令？</li>
<li>在TypeScript中是如何检查null和undefined的？</li>
<li>在TypeScript中如何创建变量？</li>
<li>在TypeScript中解释下rest参数的作用及规则</li>
<li>你是如何编译TypeScript的文件？</li>
<li>请说说在TypeScript中什么是联合类型？</li>
<li>在TypeScript中是如何实现函数重载的？</li>
<li>在TypeScript中Omit类型有什么作用？</li>
<li>在TypeScript中使用unknown的场景是什么？</li>
<li>在TypeScript中什么是三斜线指令？</li>
<li>在TypeScript中如何定义类？</li>
<li>在TypeScript中的类与JavaScript类有什么不同？</li>
<li>在TypeScript中怎样定义和使用命名空间？</li>
<li>在TypeScript中是怎样进行类型检查的？</li>
<li>在TypeScript中的void类型是什么？在什么场景下使用？</li>
<li>在TypeScript中如何定义、导入和导出模块？</li>
<li>在TypeScript中的null与undefined有什么区别？</li>
<li>在TypeScript中如何支持类型推断？</li>
<li>在TypeScript中any和unkown有什么区别？</li>
<li>在TypeScript中装饰器有哪些应用场景？</li>
<li>请说说你对TypeScript中装饰器的理解</li>
<li>请说说你对TypeScript中mixin的理解</li>
<li>请说说你对TypeScript中类的理解</li>
<li>在TypeScript中never与void有什么区别？</li>
<li>TypeScript有哪些内置数据类型？</li>
<li>在TypeScript中interface与type有什么区别？</li>
<li>请说说你对TypeScript中泛型的理解</li>
<li>请说说你对TypeScript中模块的理解</li>
<li>为什么要推荐使用TypeScript?</li>
<li>请说说TypeScript有哪些特性？</li>
<li>请说下TypeScript中的类型断言是什么？</li>
<li>请说下在TypeScript中命名空间与模块的区别？</li>
<li>TypeScript中支持的访问修饰符有哪些？</li>
<li>请说说你对TypeScript中枚举的理解</li>
<li>TypeScript中的Declare关键字有什么作用？</li>
<li>你觉得TypeScript难吗？</li>
<li>说说你对TypeScript的了解，它和JS有什么关系？</li>
<li>你有在项目中使用过TypeScript吗？</li>
<li>在TypeScript中泛型有什么作用？</li>
<li>你是怎么优化你的 ts 代码的？</li>
<li>你有用过哪些ts的高级类型？</li>
<li>extends 和 implements 有什么区别？</li>
<li>interface 和 type 到底有什么区别？</li>
</ul>
`}}></div>
  }
  