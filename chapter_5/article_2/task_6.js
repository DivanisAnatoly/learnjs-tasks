function randomInteger(min, max) {
    let range = max - min;
    return min + Math.round(Math.random() * range);
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));