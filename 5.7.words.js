let shortest = (str) => {
    return Math.min(...str.split(' ').map(word => word.length));
}

console.log(shortest("Hello nice toe meet you"))