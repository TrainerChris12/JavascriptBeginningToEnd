const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map(number => number * 2);
//
// console.log(doubledNumbers);

//Same with ForEach
const doubledNumbers  = [];
numbers.forEach(number => doubledNumbers.push(number * 2));

//Chain map methods
const squareAndDouble = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

//Chaining different methods
const evenDouble = numbers
    .filter(number => number % 2 == 0)
    .map((number) => number * 2);

console.log(evenDouble);