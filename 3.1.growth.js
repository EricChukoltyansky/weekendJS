let nb_year = (p0, percent, aug, p) => {
    let count = 0;
    for (let i=0; p0 < p; i++){
        p0 = p0 * (1 + percent/100) + aug;     
        count++
      }
      return count;
      
}

console.log(nb_year(1500, 5, 100, 5000)) 
console.log(nb_year(1500000, 2.5, 10000, 2000000)) 
