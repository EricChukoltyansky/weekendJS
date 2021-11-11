let fibonacci = (n) => {
  arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

console.log(fibonacci(55));