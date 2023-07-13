
const fs = require('fs');
const path = require('path');
const { removeFile } = require('./file');

// 格式化id
const formatId = (index) => {
  if (index < 10) return `000${index}`;
  if (index < 100) return `00${index}`;
  if (index < 1000) return `0${index}`;
  return index;
}

// 遍历文件夹下所有文件，返回文件相关信息（id，文件路径，文件名）
function getAllFileFromDir ({ dir }) {
  let index = 0;
  return new Promise(resolve => {
    let ans = []
    function traverse (dir, ans) {

      fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
        let filepath = path.join(dir, file.name)
        if (file.isFile()) {
          index += 1;
          ans.push({ id: formatId(index), filepath, name: file.name })
        } else if (file.isDirectory()) {
          traverse(filepath, ans)
        }
      })
    }
    traverse(dir, ans);
    resolve(ans);
  })
}

// 清空文件夹下所有文件
async function cleanAllFileFromDir ({ dir }) {
  const allFile = await getAllFileFromDir({ dir })
  for (let item of allFile) {
    await removeFile({ filepath: item.filepath });
    console.log(`${item.name}删除成功！`);
  }
}

module.exports = {
  getAllFileFromDir,
  cleanAllFileFromDir,
}