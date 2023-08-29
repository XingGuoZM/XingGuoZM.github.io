

const { getAllFileFromDir, cleanAllFileFromDir } = require('../utils/dir');
const { setStr2File, getStrFromFile } = require('../utils/file');
const { getLastDirName, getFileName, removeHtmlTag, removeSensitiveWord } = require('../utils/index');
const MarkdownIt = require('markdown-it');
// 将md字符串转成html字符串
const parseMd2Html = (mdStr) => {
  return new MarkdownIt().render(mdStr);
}
// 将html字符串转成react字符串
const parseHtmlStr2ReactTemplate = (htmlStr) => {

  const reactStr = `
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:${JSON.stringify(htmlStr)}}}></div>
  }
  `
  return reactStr;
}

// 根据react文件名生成react组件映射
const parseFileName2ReactMap = (allFile) => {
  const fileArr = allFile.map(item => ({ id: item.id, name: getFileName(item.name) }));

  const importStr = fileArr.map(item => `import Comp${item.name}${item.id} from './Comp${item.name}${item.id}'`).join('\n');

  const compMapStr = fileArr.map(item => `'${item.id}':<Comp${item.name}${item.id}/>`).join(',\n  ');

  return `import React, { ReactElement } from 'react';\n${importStr}

  const CompMap: {[key: string]: ReactElement} = {
    ${compMapStr}
  }
  
  export default ()=> {
    const id = location.search.split('=')[1]
    
    return (
      <div>
        {CompMap[id]}
      </div>
    );
  }
  `
}
// 根据文件生成博客信息对象
const parseArr2TabList = (arr) => {
  const map = {};
  let res = [];
  for (let item of arr) {
    if (map[item.dir] === undefined) {
      res.push({ id: res.length, tabTitle: item.dir, tabData: [] })
      map[item.dir] = res.length - 1;
    }
    const index = map[item.dir];
    res[index].tabData.push({ ...item })
  }
  return res;
}
// html字符串转译
const handleHtmlStr = (htmlStr) => {
  return htmlStr
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}
const generatorBlogFile = async ({ sourceDir, targetDir }) => {
  // 清空目标目录下所有文件
  await cleanAllFileFromDir({ dir: targetDir });
  // 遍历源目录下所有文件 保存文件id、路径、名称，存入数组
  const allFile = await getAllFileFromDir({ dir: sourceDir, type: 'md' });
  // 生成文件名->react组件的映射
  const reactMapStr = parseFileName2ReactMap(allFile);

  // const fileArr = [];
  let fileArr = []

  // 遍历刚才存取的数组，读取所有文件内容，转化为字符串,
  for (const file of allFile) {

    const name = getFileName(file.name);
    const id = file.id;
    // 获取md string
    const mdStr = await getStrFromFile({ filepath: file.filepath });
    // md string -> html string
    const htmlStr = parseMd2Html(mdStr);
    // handle html string
    const resHtmlStr = handleHtmlStr(htmlStr);
    const filename = getFileName(file.name);
    const dirname = getLastDirName(file.filepath)
    const fileObj = {
      id: file.id,
      dir: removeSensitiveWord(dirname),
      name: filename,
      title: filename,
      desc: removeHtmlTag(resHtmlStr).slice(0, 100),
      url: `/article?id=${file.id}`
    }
    fileArr.push(fileObj)

    // html string -> react string
    const reactStr = parseHtmlStr2ReactTemplate(resHtmlStr);
    // react string 写入文件
    await setStr2File({ filepath: `${targetDir}/Comp${name}${id}.tsx`, str: reactStr });
    console.log(`${name}写入成功！`);

  }
  // react string map 写入文件
  await setStr2File({ filepath: `${targetDir}/index.tsx`, str: reactMapStr });
  console.log('react 映射文件写入成功');
  const resFileArr = parseArr2TabList(fileArr);
  await setStr2File({ filepath: '../../src/pages/Blog/data/data.js', str: `export const data = ${JSON.stringify(resFileArr)}` })
}

const sourceDir = '../../blogs';
const targetDir = '../../src/pages/Article/components/ArticleList'
// 生成博客文件
generatorBlogFile({ sourceDir, targetDir });

