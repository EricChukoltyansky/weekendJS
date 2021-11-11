let summation = (number) => {
    let count=0;
    let sum = 0;
   for (i=0; i<number; i++) {
       count++;
       sum +=count;
   }
   return sum;
}

console.log(summation(8))