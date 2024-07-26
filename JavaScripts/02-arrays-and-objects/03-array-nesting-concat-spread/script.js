let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberries', 'blueberries', 'raspberries'];


// fruits.push(berries);

// x = fruits[3][1];

const allfruits = [fruits, berries];

x = allfruits[1][0];

x = fruits.concat(berries);

//Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object

x = Array.isArray(fruits);


x = Array.from('12345');


const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
// for (let i = 0; i < x.length; i++) {
//    x[i] = parseInt(x[i]);
// }

console.log(x);
