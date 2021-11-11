let lowestSum = (arr) => {
  let sum = 0;
  let sortedArr = arr.sort((a, b) => a - b);
  for(i of sortedArr) {
      sum = sortedArr[i] + sorted[i+1]
  }
return sum
}

console.log(lowestSum([19, 5, 42, 2, 77]));