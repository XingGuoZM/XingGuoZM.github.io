// float

// function parseFloat (value, n) {
//   const [a, b] = String(value).split('.')
//   if (b === void 0)
//     return value + '.'.padEnd(n + 1, 0);
//   if (b.length <= n)
//     return a + '.' + b.padEnd(n, 0);

//   const pre = Number(b[n - 1]);
//   const end = Number(b[n]);
//   const curry = end >= 5 ? (pre + 1) : pre;
//   return a + '.' + b.slice(0, n - 1) + curry;
// }

// console.log(parseFloat(2.12, 4));

function sum(...args){
  if(args.length===0) return 0;
  let arr = [].concat(args)
  return function fn(){
    if(arguments.length===0){
      return arr.reduce((cur,acc)=>cur+acc);
    }
    arr = arr.concat([...arguments]);
    return fn;
  }
}
// sum() == 0
// sum(1)(2)(3)()
// sum(3)(4)() == 7
// sum(v1)(v2)...(vn)() == v1+v2+...+vn


console.log(sum())
console.log(sum(1)(2)(3)())
console.log(sum(3)(4)())