
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>数据类型的隐式转换</h1>\n<p>关键词：parseInt、Number、Boolean、String、new String()、动态语言和静态语言</p>\n<p>静态语言：编译时变量的数据类型即可确定，使用之前必须声明数据类型，如c++、java\n动态语言：运行时确定数据类型的语言，变量使用之前不需要类型声明，变量的类型是被赋值的那个值的类型，如php、js、shell、python</p>\n<p>parseInt(string,radix)等价于解析一个字符串（非字符串隐式转换为字符串）返回一个整数，radix（2-36的整数）表示进制数，超出范围会返回NaN,如果是0则直接将字符串隐式转化为数字。</p>\n<p><a href=\"https://262.ecma-international.org/6.0/#sec-toprimitive\">隐式转换规则</a>\nToPrimitive(input, PreferredType?)\nPreferredType为Number时</p>\n<pre><code>input\nif(input is primitive){\n    return a\n} else if (a.valueOf() is primitive){\n    return a.valueOf()\n} else if (a.toString() is primitive){\n    return a.toString()\n} else {\n    TypeError\n}\n</code></pre>\n<p>PreferredType为String时</p>\n<pre><code>input\nif(input is primitive){\n    return a\n} else if (a.toString() is primitive){\n    return a.toString()\n} else if (a.valueOf() is primitive){\n    return a.valueOf()\n} else {\n    TypeError\n}\n</code></pre>\n<p>PreferredType的值设置规则，即preferredType默认为number类型，Date类型的对象时，默认为string。</p>\n<pre><code>input\nif ( input is Date) {\n    return String\n} else {\n    return Number\n}\n</code></pre>\n<p>一些常见对象的valueOf()和toString()的返回值</p>\n<pre><code class=\"language-js\">// Date\nconst c = new Date();\nc.valueOf() //1688024292030\n\n// Array、Math、RegExp、Function 都返回对象本身\nconst a = new Array();\na.valueOf() === a // true\nconst f = new Function()\nf.valueOf() === f // true\n</code></pre>\n<pre><code class=\"language-js\">Number() // 0\nNumber(undefined) //NaN\nNumber(null) // 0\n// 布尔值\nNumber(true) // 1\nNumber(false) // 0\n//字符串\nNumber('') // 0\nNumber('11') // 11\nNumber('11ff') // NaN\nNumber('fff') // NaN\nNumber('ff11') // NaN\n// symbol\nNumber(Symbol(123)) // TypeError\n// BigInt\nNumber(BigInt(123)) // 123\n\n//对象\nNumber({}) // NaN\nNumber([]) // 0\nNumber([null]) // 0\nNumber([undefined]) // 0\nNumber([9]) // 9\nNumber([1,2]) //NaN\n</code></pre>\n<pre><code class=\"language-js\">String() // ''\nString(undefined) // 'undefined'\nString(null) // 'null'\nString(true) // 'true'\nString(1.22) // '1.22'\n// Symbol\nString(Symbol('111')) // 'Symbol(111)'\n// BigInt\nString(BigInt(111)) // '111'\n// 对象\nString({}) // '[object,Object]'\nString({a:11}) // '[object,Object]'\nString([])  // ''\nString([1,2,3]) // '1,2,3'\nString([{a:1}]) // String([{a:1}])\nString([[1],[2]]) // '1,2'\n</code></pre>\n<p>运算符+ 等例子</p>\n<pre><code class=\"language-js\">[] + {} \n{} + []\n{}+{}\n2*{}\n1 + true\n1 + false \n4<5<6\n6>5>4\n// 定义一个变量a,使得a==1&amp;&amp;a==2&amp;&amp;a==3\n</code></pre>\n<pre><code>[]==![]\n{} == {}\n</code></pre>\n<p>==涉及到的类型隐式转换规则(<strong>顺序无关</strong>)</p>\n<ol>\n<li>只要存在 bool, bool->number</li>\n<li>number vs string, string -> number</li>\n<li>object vs primitive, object -> primitive</li>\n<li>null/undefined vs other -> null/undefined和other比较都返回false，只有他们自己两个宽松比较返回true</li>\n</ol>\n<p>==比较例子</p>\n<pre><code class=\"language-js\">[] == ![] //true\n[] == 0 // true\n[2] == 2 // true\n['0'] == false // true\n'0' == false // true\n[] == false  // true\n[null] == 0 // true\nnull == 0  // false\n[null] == false // true\nnull == false //false\n[undefined] == false//true\nundefined == false // false\n\na == 1 &amp;&amp; a == 2 &amp; a == 3\n</code></pre>\n"}}></div>
  }
  