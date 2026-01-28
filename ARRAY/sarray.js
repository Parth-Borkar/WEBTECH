function largest(arr) {
    let max = arr[0];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > max)
            max = arr[i];
        i++;
    }
    return max;
}
const arr = [1, 2, 3, 4, 5];
console.log(largest(arr));