let x;

//Array Literal
const numbers = [1, 2, 3, 4];

//Array Constructor
const fruits = new Array('apple', 'grape', 'orange');
console.log(numbers);

x = numbers[0];

x = numbers[0] + numbers[3];

x = numbers.length

x = `My favorite fruits is ${fruits[2]}`;

fruits[2] = 'pear';
fruits[3] = 'strawberry';

fruits[fruits.length] = 'bananas'
//fruits.length = 2;

x = fruits;

console.log(x);