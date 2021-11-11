let unique = (numbers) => {
    let arr = numbers.sort();
    if (arr[0] !== arr[1]) {
      return arr[0];
    } else {
      return arr[arr.length - 1];
    }
  }

console.log(unique([1, 1, 1, 1, 1, 0.5]));
