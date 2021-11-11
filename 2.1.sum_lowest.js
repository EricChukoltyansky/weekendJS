let lowestSum = (numbers) => {
  numbers.sort((a,b) => a - b).filter(x => x>0);
  return numbers[0] + numbers[1];
}

console.log(lowestSum([19, 5, 42, 2, 77]));