if (true) {
    console.log('This is true');
}

if (false) {
    console.log('This is false');
}

const x = 10;
const y = 5;

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is not equal to ${y}`);
}

if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
}
if (x !== y) {
    var z = 20;
    console.log(`${z} is equal to ${z}`);
}

console.log(z);


//Shorthand If
if (x >= y) console.log(`${x} is greater than or equal to ${y}`), console.log('This is true');
else console.log('This is false');