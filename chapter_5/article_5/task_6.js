function Calculator() {
    this.methods = {
        ["+"]: (a, b) => a + b,
        ["-"]: (a, b) => a - b,
    }

    this.calculate = function (str) {
        try {
            let elems = str.split(' ');
            let [a, operator, b] = elems;
            let method = this.methods[operator];
            return method(+a, +b);
        } catch (error) {
            return "Incorrect input string"
        }
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7"));


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);