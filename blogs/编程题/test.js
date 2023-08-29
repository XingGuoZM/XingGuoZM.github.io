// 分别封装精确运算的加减乘除四个方法

String.prototype.numberAdd = function (number) {

  const Max = Math.max(this.length, number.length);
  let curry = 0;
  let n1 = this.padStart(Max, '0');
  let n2 = number.padStart(Max, '0');
  let sum = '';
  for (let i = Max - 1; i >= 0; i--) {
    const temp = Number(n1[i]) + Number(n2[i]) + curry;
    sum = temp % 10 + sum;
    curry = temp > 9 ? 1 : 0;
  }
  return curry === 1 ? '1' + sum : sum;
}
String.prototype.numberMinus = function (number) {
  const Max = Math.max(this.length, number.length);
  let curry = 0;

  let flag = true;
  let n1 = this.padStart(Max, '0');
  let n2 = number.padStart(Max, '0');
  if (Number(this) <= (number)) {
    n1 = number.padStart(Max, '0');
    n2 = this.padStart(Max, '0');
    flag = false;
  }
  let ans = ''
  for (let i = Max - 1; i >= 0; i--) {
    let num1 = Number(n1[i]), num2 = Number(n2[i])
    curry === 1 && num1--;
    curry = num1 < num2 ? 1 : 0;
    const temp = num1 + 10 * curry - num2;

    ans = temp + ans;
  }
  return flag ? ans : `-${Number(ans)}`;
}
String.prototype.numberMultiply = function (number) {
  const n1 = Number(this);
  const n2 = Number(number);
  const min = n1 < n2 ? n1 : n2;
  const max = n1 < n2 ? number : this;
  let sum = '';
  for (let i = 0; i < min; i++) {
    sum = sum.numberAdd(max)
  }
  return sum;
}
String.prototype.numberDivide = function (number) {
  let t1 = 0
  let t2 = 0
  let r1
  let r2
  try {
    t1 = this.split('.')[1].length
    t2 = number.split('.')[1].length
  } catch (e) { }
  r1 = Number(this.replace('.', ''))
  r2 = Number(number.replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

console.log('2'.numberDivide('3'));