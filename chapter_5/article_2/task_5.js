function random(min, max) {
    let range = max - min;
    return min + Math.random() * range;
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));