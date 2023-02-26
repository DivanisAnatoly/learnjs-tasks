function shuffle(arr) {
    arr = arr.sort((a,b)=>(Math.random()*2)-1);
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);