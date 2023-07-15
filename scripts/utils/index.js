// 首字母大写
function formatCompName (name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
}
// 获取最底层目录名称
function getLastDirName (filepath) {
  const pathArr = filepath.split('/');
  return pathArr[pathArr.length - 2]
}
// 获取文件名称
function getFileName (filename) {
  return filename.split('.')[0];
}
// 去除html标签及换行\n
function removeHtmlTag (htmlstr) {
  return htmlstr.replace(/(<[^>]+>|\n)/g, '');
}


module.exports = {
  formatCompName,
  getLastDirName,
  getFileName,
  removeHtmlTag,
}