// function add(a,b) {
//     return a + b;
// }

//Arrow Functions
const add = (a, b) => {
    return a + b
};


//Implicit Return
const subtract = (a, b) => a - b;

//Can leave off parenthesis if you have only one parameter
const double = a => a * 2;

//Returning an Object
const createObj = () => ({
    name: 'Brad',
});

const numbers = [1,2,,3,4,5,6,7,8,9,10];

numbers.forEach(function (n) {
    console.log(n)
});

//Arrow function in a callback
numbers.forEach(n => console.log(n));

console.log(add(2, 3));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());