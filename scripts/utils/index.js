// 首字母大写
function formatCompName (name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
}

// 获取文件名称
function getFileName (filename) {
  return filename.split('.')[0];
}

module.exports = {
  formatCompName,
  getFileName,
}