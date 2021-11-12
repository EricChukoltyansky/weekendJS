let longest = (str) => {
    return Math.max(...str.split(' ').map(word => word.length));
}

console.log(longest("Hello nice toe meet you"));