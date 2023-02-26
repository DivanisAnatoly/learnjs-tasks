let n = 119;

label:
for (let i = 2; i <= n; i++) {

    if (i % 2 == 0 && i != 2) continue;

    for (let j = 2; j < i; j++) {
        if (i % j == 0){
            continue label;
        }
    }

    console.log(i);
}