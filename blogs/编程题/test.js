// float

function parseFloat (value, n) {
  const [a, b] = String(value).split('.')
  if (b === void 0)
    return value + '.'.padEnd(n + 1, 0);
  if (b.length <= n)
    return a + '.' + b.padEnd(n, 0);

  const pre = Number(b[n - 1]);
  const end = Number(b[n]);
  const curry = end >= 5 ? (pre + 1) : pre;
  return a + '.' + b.slice(0, n - 1) + curry;
}

console.log(parseFloat(2.12, 4));