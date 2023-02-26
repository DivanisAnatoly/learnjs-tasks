function getSalariesSum(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(getSalariesSum(salaries))

salaries = {}
console.log(getSalariesSum(salaries))