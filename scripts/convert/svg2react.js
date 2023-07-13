const { getAllFileFromDir } = require('../utils/dir');
const { getStrFromFile, setStr2File } = require('../utils/file');
const { formatCompName } = require('../utils');

// 获取svg文件
const filterSvgFile = (allFile) => {
  return allFile.filter(item => item.name.split('.')[1] === 'svg');
}

// 遍历所有文件
const traverseAllFile = async (allFile) => {
  let str = `import React from 'react';\n interface IProps { className?:string;fill?:string;}`
  const arr = filterSvgFile(allFile);
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const filename = item.name.split('.')[0];
    const fileStr = await getStrFromFile({ filepath: item.filepath });
    const ans = fileStr.replace(/"#ffffff"/g, '{fill}').replace(/class/g, 'className').replace(/"icon"/g, '{ className }');
    str += `export function ${formatCompName(filename)}Svg ({ fill="#ffffff", className="" }:IProps) {\n  return ${ans}\n};\n`
  }
  return str;
}

// 执行
const run = async ({ dir, filepath }) => {
  const allFile = await getAllFileFromDir({ dir });
  const str = await traverseAllFile(allFile);
  await setStr2File({ filepath, str });
  console.log('convert success!');
}

const sourceDir = '../../src/assets';
const targetFile = '../../src/assets/index.tsx';
run({ dir: sourceDir, filepath: targetFile });