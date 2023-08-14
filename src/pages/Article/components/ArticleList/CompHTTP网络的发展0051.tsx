
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>HTTP</h1>\n<h2>关键词</h2>\n<ul>\n<li><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Resources_and_specifications\">http rfc 规范</a></li>\n</ul>\n<h2>HTTP起源</h2>\n<p>Tim Berners-Lee博士在1989年发表一篇论文，提出了万维网项目，是一个通过网络传输超文本的系统。为了实现这个系统，需要确定传输的格式（HTML）、传输的协议（HTTP）、web客户端（浏览器）和web服务器（httpd）。</p>\n<p>HTTP发展至今共经历了HTTP0.9、HTTP1.0、HTTP1.1和HTTP2.0共4个大版本</p>\n<pre><code>0.9版本完成了基本功能实现\n1.0版本主要扩展性\n1.1版本定义了规范，制定了标准\n2.0版本主要体现在传输效率优化上\n</code></pre>\n<h3>HTTP、HTTPS</h3>\n<p>HTTP协议是基于TCP/IP的可靠传输的应用层协议，其特点是简单、扩展性强、无状态、明文传输、队头阻塞，HTTP在版本（1.0、1.1、2.0）迭代中都进行了处理解决，各版本特点如下：<br>\nHTTP1.0</p>\n<pre><code>1. 可以发送任何格式的内容，文本、视频、图像、二进制等\n2. 不支持断点续传，每次都会传送全部的页面和数据\n3. 只使用header中If-Modified-Since和Expire作为缓存失效标准\n4. 请求header中没有传递主机名（hostname）\n</code></pre>\n<p>HTTP1.1</p>\n<pre><code>1. 引入持久连接，即TCP连接默认不关闭，可以被多个请求复用，不用声明Connection:keep-alive,长连接的时长可以通过请求头中的keep-alive设置\n2. HTTP管道\n客户端不需要等待服务器响应请求之后，才能发送后续的请求。但是HTTP管道仍然要求服务器按照接收到的请求的顺序进行响应，因此，如果管道中的单个请求执行缓慢，则对客户端的所有后续响应都将相应的延迟，这个问题就是队头阻塞。当时的解决方案是在客户端的每台主机上建立多个TCP连接，同时设置了最大可以同时连接的限制，以达到微妙的平衡。\n\n3. 增加E-tag、If-Modified-Since、If-Match、If-None-Match\n4. 支持断点续传，通过请求头中的Range来实现\n5. 使用虚拟网络，在一台物理服务器上可以存在多个虚拟主机，并且他们共享一个IP地址\n6. 新增方法：PUT、PATCH、OPTIONS、DELETE\n</code></pre>\n<p>HTTP2.0</p>\n<ol>\n<li>\n<p>二进制分帧\n采用二进制格式，全部传输01串，便于机器解码，这样的报文格式被拆分为一个个二进制帧，用Header帧存放头部字段，Data帧存放请求体数据</p>\n</li>\n<li>\n<p>头部压缩：HPACK算法+哈夫曼编码</p>\n</li>\n</ol>\n<p>为什么要压缩？在HTTP/1.x中，HTTP请求和响应都是由状态行、请求/响应头部、消息主体三部分组成的。一般来说，消息主体都会经过gzip压缩，或者本身就是经过压缩后的二进制文件（如图片、视频），但是状态行和头部却没有经过任何压缩，直接以纯文本传输。随着web功能的越来越复杂，请求数量也会越来越多，大量的请求导致消耗在请求头部的流量变多，每次都要传输UserAgent、Cookie这类不频繁变动的字段内容，完全是一种浪费，这导致传输头部的网络开销可能比消息主体还要大，因此就有了头部压缩技术，HTTP/2.0使用的是HPACK算法进行压缩</p>\n<p>HPACK，在支持HTTP/2.0的浏览器和服务端之间：</p>\n<ol>\n<li>\n<p>维护一份相同的静态字典，包含常见的头部名称，以及特别常见的头部名称与值的组合\n对于完全匹配的头部键值对，例如:method:GET，可以直接使用一个字符表示\n对于头部名称可以匹配的键值对，例如cookie:xxx，可以将名称使用一个字符表示</p>\n</li>\n<li>\n<p>维护一份相同的动态字典，可以动态添加内容</p>\n</li>\n<li>\n<p>支持基于静态哈夫曼表的哈夫曼编码，<a href=\"https://zhuanlan.zhihu.com/p/390459645\">哈夫曼编码的原理</a>即统计所有出现字符的次数，然后根据字符出现次数构建一颗哈夫曼树，哈夫曼树的特点就是出现频率越高的字符越靠近根结点，最后以哈夫曼树进行编码/解码，编码的过程即沿着树向要编码的字符前进，如果走了左节点则标记为0，走了右节点则标记为1，从根结点到叶子节点的路径就是该字符的编码。出现字符次数越多的，编码越短，最终压缩之后的编码越短，起到压缩的目的。gzip就使用了哈夫曼编码进行压缩</p>\n</li>\n<li>\n<p>多路复用\nHTTP/1.x中，如果想并发多个请求，必须使用多个TCP连接，且浏览器为了控制资源还会对单个域名有6-8个的TCP连接请求限制\nHTTP/2.0中，同域名下的所有通信都是在单个连接下完成的，单个连接可以承接任意数量的双向数据流，数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装，即流标识符（Stream ID），有了它，接收双方就能从乱序的二进制帧中选择ID相同的帧，按照顺序组装成请求/响应报文</p>\n</li>\n</ol>\n<p>在TCP协议层上仍然存在这类似的队头阻塞阻塞的问题，当一个TCP包在传输过程中丢失时，在服务器重新发送丢失的包之前，接收方无法确认传入的包，由于TCP在设计上不受诸如HTTP之类的高级协议的影响，因此一个丢失的数据包将阻塞所有正在传输的HTTP请求的流，直到丢失的数据重新被发送</p>\n<ol start=\"4\">\n<li>\n<p>服务器推送</p>\n</li>\n<li>\n<p>请求优先级</p>\n</li>\n</ol>\n<p>HTTP/3.0<br>\nHTTP/2.0下使用多路复用，同一域名下只需要使用一个TCP连接，但是当这个TCP连接出现丢包的情况，就会导致整个TCP开始等待重传，也导致后面的数据都被阻塞了。出现包阻塞的原因是因为底层TCP协议导致的问题，Google基于UDP协议推出一个QUIC协议，使用在HTTP/3上。QUIC的优点有：</p>\n<ul>\n<li>避免包阻塞</li>\n<li>快速重启会话</li>\n</ul>\n<h3>HTTPS</h3>\n<p>HTTPS = HTTP + SSL/TLS。TLS/SSL的功能实现主要依赖于三类基本算法：散列函数、对称加密和非对称加密。使用非对称加密实现身份认证和密钥协商，对称加密算法采用协商的密钥对数据加密，基于散列函数验证数据的完整性。</p>\n<p>SSL（Secure Socket Layer）安全套接层，是1994年由Netscape公司设计的一套协议，并于1995年发布3.0版本。TLS（Transport Layer Security）传输安全是IETF在SSL3.0基础上设计的协议，实际相当于SSL的后续版本。</p>\n<p>SSL/TLS工作原理：用CA证书认证身份（证书签名）及传递公钥（服务端），用非对称加密算法，交换用于对称加密的密钥，通过对称加密算法，加密正常的网络通信。</p>\n<p>工作过程：\n客户端发起HTTP请求，服务端发送CA证书（证书中含有证书签名和服务端公钥），客户端认证真伪，然后解密出服务端公钥\n用公钥加密自己生成的对称加密的密钥，发送给服务端</p>\n<h3>加密算法</h3>\n<p>对称加密算法，DES、AES\nDES（Data Encryption Standard）原理：利用56+8奇偶校验位（第8、16、24、32、40、48、56、64）=64位的密钥对以64为单位的块数据进行加解密。\nAES（Advanced Encryption Standard）原理：AES算法主要有四种操作处理，分别是密钥加法层(也叫轮密钥加，英文Add Round Key)、字节代换层(SubByte)、行位移层(Shift Rows)、列混淆层(Mix Column)。而明文x和密钥k都是由16个字节组成的数据(当然密钥还支持192位和256位的长度，暂时不考虑)，它是按照字节的先后顺序从上到下、从左到右进行排列的。</p>\n<p>RSA经典的非对称加密算法\n原理：给定连个素数，很容易得出他们的乘积，但是反过来，给定出他们的乘积，却很难得到这两个素数。如果能解决大整数（如几百位的整数）分解的快速方法，那么RSA算法将轻易被破解</p>\n<p>SSH工作原理即使用非对称加密来保证安全性，在传输过程中数据是加密的，使用最多的是安全登录和文件传输</p>\n<p>状态码</p>\n<p>1XX：接受的请求正在处理，信息类状态码\n2XX：成功\n3XX：重定向\n4XX：客户端错误\n5XX：服务器错误</p>\n<p>缓存</p>\n<pre><code>cache-control\nexpire\n</code></pre>\n<p>跨域和浏览器同源策略</p>\n<p>Cookie（Session）和Token</p>\n<p>ASCII编码</p>\n"}}></div>
  }
  