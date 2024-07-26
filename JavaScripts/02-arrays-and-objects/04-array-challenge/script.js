let x;

const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
x = arr.reverse()

console.log(x);

let y;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

y = [...arr1, ...arr2];

y.splice(4, 1);

console.log(y);
