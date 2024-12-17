function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));  
    let prev = 0;
    let current = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        current += step;
        if (prev >= n) return -1; 
    }

    for (let i = prev; i < Math.min(current, n); i++) {
        if (arr[i] === target) {
            return i;  
        }
    }

    return -1; 
}

// Example

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = jumpSearch(arr, target);
console.log(result);
