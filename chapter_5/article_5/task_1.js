function camelize(str) {
    let arr = str.split('-');

    arr = arr.map((word, i) => {
        return (i == 0) ? word
            : word[0].toUpperCase() + word.substring(1);
    });

    return arr.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));