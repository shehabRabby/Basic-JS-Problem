function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

const numbers = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(numbers));
