
/**
 * markdown -> html字符串过程
 * 
 * 1. 目录下文件路径收集
 * 2. 遍历文件，读取文件内容，收集成字符串
 * 3. 将字符串使用markdownit转化成html
 * 4. 将字符串html写入tsx文件里的dangerouslySetInnerHTML
 * 
 */
// import Editor from 'wangeditor';


// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/xcode.css'
// hljs.registerLanguage('javascript', javascript);

const fs = require('fs');
const path = require('path');


const formatId = (index) => {
  if (index < 10) return `000${index}`;
  if (index < 100) return `00${index}`;
  if (index < 1000) return `0${index}`;
  return index;
}
// 遍历目录下所有文件
function getPath (dir) {
  return new Promise(resolve => {
    let ans = []
    function traverse (dir, ans) {
      fs.readdirSync(dir, { withFileTypes: true }).forEach((file, index) => {
        let filepath = path.join(dir, file.name)
        if (file.isFile()) {
          ans.push({ id: formatId(index), path: filepath, name: file.name })
        } else if (file.isDirectory()) {
          traverse(filepath, ans)
        }
      })
    }
    traverse(dir, ans);
    resolve(ans);
  })
}
// 读取文件，返回字符串内容
const getFileDataStr = (file) => {
  return new Promise(resolve => {
    fs.readFile(file, 'utf8', (err, data) => resolve(data))
  })
}

// 将字符串markdown文本转化成html字符串文本
const parseMd2Html = (mdStr, file) => {
  const MarkdownIt = require('markdown-it');
  const md = new MarkdownIt();
  const result = md.render(mdStr);
  generatorReactFile(`../src/pages/Article/components/ArticleList/${file}.tsx`, result);

}

// html字符串反转译
const parseHtml = (htmlStr) => {
  return htmlStr.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}

const generatorId2Name = (filepath, fileArr) => {
  const mapNameStr = fileArr.map(item => {
    return ({
      id: item.id,
      name: item.name.split('.')[0]
    })
  })

  fs.writeFile(filepath, JSON.stringify(mapNameStr), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
// 将文件名写入映射文件
const generatorMapFile = (filepath, fileArr) => {


  const names = fileArr.map(item => ({ id: item.id, name: item.name.split('.')[0] }));

  const compKeys = names.map(item => `'${item.name}'`);
  const compImport = names.map(item => `import ${item.name} from './${item.name}';`);
  const compCompMap = names.map(item => {
    return `'${item.id}': <${item.name} />`
  })

  const mapCompStr = `
  import React, { ReactElement } from 'react';
  ${compImport.join('\n')}

  const compKeys = [${compKeys}];
  const CompMap: {[key: string]: ReactElement} = {
    ${compCompMap}
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }`

  fs.writeFile(filepath, mapCompStr, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
// 将字符串写入react文件
const generatorReactFile = (filepath, str) => {

  const reactStr = `
  import React,{useEffect} from 'react';
 
  import 'highlight.js/styles/xcode.css';
  const hljs = require('highlight.js');

  export default () => {
    useEffect(()=>{
      document.querySelectorAll('code').forEach(el => {
        el.style.backgroundColor='#f8f8f8';
        hljs.highlightElement(el);
      });
    },[])
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:\`${parseHtml(str)}\`}}></div>
  }
  `

  fs.writeFile(filepath, reactStr, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

try {
  getPath('../blogs').then(fileArr => {
    generatorMapFile(`../src/pages/Article/components/ArticleList/index.tsx`, fileArr);
    generatorId2Name(`../src/data/articleMap.json`, fileArr);
    for (const file of fileArr) {
      getFileDataStr(file.path).then((data) => {
        const name = file.name.split('.')[0]
        parseMd2Html(data, name)
      })
    }
  });

} catch (err) {
  console.error(err);
}

// fs.readFile('./test.md', 'utf8', (err, data) => {
//   if (err) {
//     return;
//   }
// const MarkdownIt = require('markdown-it');
// const md = new MarkdownIt();
// const result = md.render(data);
//   console.log(result)
// })