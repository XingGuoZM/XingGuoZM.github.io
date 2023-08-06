
const array2Object = (arr) => {
  return arr.reduce((pre, item) => {
    pre[item[0]] = item[1];
    return pre;
  }, {});
}

const arr = [
  ['name', 'jack'],
  ['age', '11'],
  ['sex', '男']
]
console.log(array2Object(arr));
