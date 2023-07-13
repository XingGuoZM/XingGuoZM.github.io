const fs = require('fs');

// 读取文件，返回字符串内容
const getStrFromFile = ({ filepath }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

// 将字符串写入文件
const setStr2File = ({ filepath, str }) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, str, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
//删除文件
const removeFile = ({ filepath }) => {
  return new Promise((resolve, reject) => {
    fs.rm(filepath, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

module.exports = {
  getStrFromFile,
  setStr2File,
  removeFile,
}