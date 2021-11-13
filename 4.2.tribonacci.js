let tribonacci = (signature, n) => {
  let trib = signature;
  for (i = 3; i < n; i++) {
    trib.push((trib[i-1] + trib[i-2] + trib[i-3]));
  }
  return trib.slice(0, n);
};

console.log(tribonacci(9));
console.log(tribonacci(4));
console.log(tribonacci(6));
console.log(tribonacci(7));
