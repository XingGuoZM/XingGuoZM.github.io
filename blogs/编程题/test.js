
/**
 *
 */
// 4位读取
function translate (str) {
  const unit = ['千', '百', '十', ''];
  const UpperNumber = '零一二三四五六七八九'
  return str.padStart(4, '0').split('').reduce((acc, item, index) => {
    if (item === '0') {
      if (acc === '' || acc[acc.length - 1] === UpperNumber[0]) return acc;
      return `${acc}${UpperNumber[0]}`;
    }
    return acc += UpperNumber[item] + unit[index % 4];
  }, '');
}

function split (str) {
  const arr = [];
  let temp = ''
  for (let i = str.length - 1; i >= 0; i--) {
    temp = str[i] + temp;
    if (temp.length === 4) {
      arr.push(temp);
      temp = '';
    }
  }
  temp.length > 0 && arr.push(temp)
  return arr;
}

function convert2Chinese (num) {
  const unit = ['', '万', '亿', '兆']
  const arr = split(String(num));
  return arr.reduceRight((acc, item, index) => {
    return acc += translate(item) + unit[index % 4];
  }, '');
}

console.log(convert2Chinese(1005))