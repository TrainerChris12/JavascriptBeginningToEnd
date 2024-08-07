const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11,12,13,14,15,16,17,18,19,20];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
//
// console.log(evenNumbers);
//

//Same with forEach
numbers.forEach((number, index) => {
   if (number % 2 != 0) numbers.splice(index, 1);
});

console.log(numbers);