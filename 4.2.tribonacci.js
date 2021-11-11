let tribonacci = (n) => {
  arr = [];
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 1;
  for (i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n];
};

console.log(tribonacci(9));
console.log(tribonacci(4));
console.log(tribonacci(6));
console.log(tribonacci(7));
