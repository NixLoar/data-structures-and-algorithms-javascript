function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = linearSearch(arr, target);
console.log(result); 
