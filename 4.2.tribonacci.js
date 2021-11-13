let tribonacci = (signature,n) => {
  let signature =
  let arr = []
  
  for (i = 3; i <= n; i++) {
    arr[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
  }
  return arr
};

console.log(tribonacci(9));
console.log(tribonacci(4));
console.log(tribonacci(6));
console.log(tribonacci(7));
