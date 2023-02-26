function unique(arr) {
    let unique = [];

    for (let elem of arr) {
        if (!unique.includes(elem)) {
            unique.push(elem);
        }
    }

    return unique;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));