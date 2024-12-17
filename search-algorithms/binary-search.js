function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const guess = arr[middle];

        if (guess === target) {
            return middle;
        }
        if (guess > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1; 
}

// Example

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearch(arr, target);
console.log(result);