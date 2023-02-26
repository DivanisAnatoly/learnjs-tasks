function topSalary(salaries) {

    let max = 0;
    let employe = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            employe = name;
        }
    }

    return employe;
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


console.log(topSalary(salaries));