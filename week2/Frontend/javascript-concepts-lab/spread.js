// Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combinedArray = [...arr1, ...arr2];

// console.log('Array 1:', arr1);
// console.log('Array 2:', arr2);
// console.log('Combined Array:', combinedArray);


// Example 1
const originalArray = [10, 20, 30];
const newArray = [...originalArray, 40, 50];

console.log('Original Array:', originalArray);
console.log('New Array with Additional Elements:', newArray);


// Example 2
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const mergedArray = [...arr1, ...arr2, ...arr3];

console.log('Array 1:', arr1);
console.log('Array 2:', arr2);
console.log('Array 3:', arr3);
console.log('Merged Array:', mergedArray);