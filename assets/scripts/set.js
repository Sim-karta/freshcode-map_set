const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [5, 10, 11];

const set1 = new Set(arr1);
const set2 = new Set(arr1, arr2);

const newArr1 = [...set1];
const newArr2 = [...set2];

console.log(newArr1);
console.log(newArr2);
