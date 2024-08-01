//Create a function called getCelsius() that takes a temperature in Fahrenheit
// as an argument and returns the temperature in celsius.
const getCelsius = F => ((F - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);


//Create an arrow function called minMax() that takes in an array of numbers and returns an object
// with the minimum and maximum numbers in the array.
const minMax = arr => ({
    min: Math.min(...arr),
    max: Math.max(...arr),
})

console.log(minMax([1, 2, 3, 4, 5]));


//Create an IIFE (Immediately Invoked Function Expression) that takes in
// the length and width of a rectangle outputs it to the console in a message as soon as the page loads.
((width, length) => {
    const area = width * length;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
})(5, 10);
