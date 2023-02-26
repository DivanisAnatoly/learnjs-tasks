function ucFirst(str) {
    return str ? str[0].toUpperCase() + str.slice(1)
        : null;
}

console.log(ucFirst("вася"));
console.log(ucFirst(""));
console.log(ucFirst(null));