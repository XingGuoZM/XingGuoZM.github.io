
// const request = (data, ms) => new Promise(resolve => {
//   setTimeout(() => resolve(data), ms);
// });

// let i = 1;

// function fetch () {
//   i++;
//   return i % 2 === 0 ? request(1, 3000) : request(2, 500)
// }


// async function test () {
//   const res = await fetch()
//   console.log(res);
// }

// test();
// test();


const getBytes = function (str) {
  if (str === null || str === undefined || typeof str !== 'string') return 0;

  let total = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode <= 0x007f) {
      total += 1;
    } else if (charCode <= 0x07ff) {
      total += 2;
    } else if (charCode <= 0xffff) {
      total += 3;
    } else {
      total += 4;
    }
  }
  return total;
}

const arr = [];
for (let i = 0; i < 440000; i++) {
  arr.push(`s1=1`)
}
const str = arr.join('&');
const ans = getBytes(str)
console.log(ans / 1024 / 1024);