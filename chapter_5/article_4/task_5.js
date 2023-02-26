function getMaxSubSum(arr) {
    let maxSum = 0;
    let tempSum = 0;

    let i = 0;
    
    loop1:
    while (i < arr.length) {
        let number = arr[i];

        if (number >= 0) {
            tempSum += number;
            i++;
            continue
        }

        if (tempSum == 0) {
            i++;
            continue;
        }

        if (tempSum + number > 0) {
            let innerSum = 0;
            for (let j = i; j < arr.length; j++) {
                innerSum += arr[j];
                if (innerSum > 0) {
                    tempSum += innerSum;
                    i = j + 1;
                    continue loop1;
                }
            }
        }

        maxSum = Math.max(tempSum, maxSum);
        tempSum = 0;
        i++;
        continue
    }

    return Math.max(tempSum, maxSum);
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));