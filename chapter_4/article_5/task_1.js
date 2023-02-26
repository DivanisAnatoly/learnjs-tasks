let sameObj = {};

function A() { return sameObj; }
function B() { return sameObj; }

let a = new A();
let b = new B();

console.log( a == b );