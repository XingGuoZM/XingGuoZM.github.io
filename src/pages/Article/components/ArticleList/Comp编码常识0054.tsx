
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>编码常识</h1>\n<p>关键词：utf-8、GBK</p>\n<h3>ASCII编码</h3>\n<p>ASCII编码一共规定了128个字符的编码规则，这128个字符形成的集合就叫做ASCII字符集。在ASCII编码中，每个字符占用一个字节的后面7位，最前面的1位统一规定为0。在ASCII编码中，0~31 是控制字符如换行回车删除等，32~126 是可打印字符，可以通过键盘输入并且能够显示出来。</p>\n<h3>Unicode字符集</h3>\n<p>ASCII码字符集，总共才能容纳256个字符，对于全世界各国语言来说，很难全部包含在内，所有后来就出现了Unicode字符集。Unicode字符集是一个很大的字符集合，现在的规模可以容纳100多万个符号。每个符号的编码都不一样。Unicode只是一个字符集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何编码如何存储</p>\n<p>这就造成了两个问题：</p>\n<p>第一个问题是，如何才能区别Unicode和ASCII？计算机怎么知道三个字节表示一个符号，而不是分别表示三个符号呢？\n第二个问题是，我们已经知道，英文字母只用一个字节表示就够了，如果unicode统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有二到三个字节是0，这对于存储来说是极大的浪费，文本文件的大小会因此大出二三倍，这是无法接受的。</p>\n<p>为了解决Unicode字符集存在的问题，就出现了UTF(Unicode Transformation Formats)系列的编码规则。UTF编码规则具体规定了Unicode字符集中的字符是如何编码的。</p>\n<h3>base64</h3>\n<p>btoa()、atob()</p>\n<h3>UTF-8</h3>\n<p>UTF-8编码是Unicode的实现方式之一,其他实现方式还包括UTF-16和UTF-32。UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码规则。UTF-8用1到4个字节编码Unicode字符。用在网页上可以统一页面显示中文简体繁体及其它语言（如英文，日文，韩文）。UTF-8最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度（UTF-8编码可以容纳2^21个字符，总共200多万个字符</p>\n<h3>GBK</h3>\n<p>GB2312编码是第一个汉字编码国家标准，GB2312编码适用于汉字处理、汉字通信等系统之间的信息交换，通行于中国大陆；新加坡等地也采用此编码。中国大陆几乎所有的中文系统和国际化的软件都支持GB2312。GBK是对GB1212的扩展，也是占用2个字节，GBK不再要求低字节一定是127号之后的内码，只要第一个字节是大于127就固定表示这是一个汉字的开始，不管后面跟的是不是扩展字符集里的内容。GBK 包括了 GB2312 的所有内容，同时又增加了近20000个新的汉字（包括繁体字）和符号。GB18030采用变长编码，可以是1个字节、2个字节和4个字节。是对GB2312和GBK的扩展，完全兼容两者。</p>\n<h3>位、字节、字符</h3>\n<p>位：数据存储的最小单位。每个二进制数字0或者1就是1个位</p>\n<p>字节：8位构成一个字节即 1Byte(B) = 8bit(位)\n1KB = 1024B\n1MB = 1024KB(2^10 B)\n1GB = 1024MB(2^20 B)\n1TB = 1024GB(2^30 B)</p>\n<p>字符\na、A、中、+、*、の......均表示一个字符；\n一般 utf-8 编码下，一个汉字 字符 占用 3 个 字节；\n一般 gbk 编码下，一个汉字  字符  占用 2 个 字节；</p>\n"}}></div>
  }
  