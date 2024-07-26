let x;

const arr = [34, 35, 55,95, 20, 25]

// arr.push(5);
//
// arr.pop();
//
// arr.unshift(5);
//
// arr.shift();
//
// arr.reverse();

x = arr.includes(200);

x = arr.indexOf(55);

x = arr.slice(1);

// x = arr.splice(0, arr.length);

// x = arr.splice(4, 1);

x = arr.splice(1, 4).reverse().toString().charAt(1);

console.log(x, arr);
