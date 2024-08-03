const items = ['book', 'book1', 'book2', 'book3'];
const users = [
    {name: 'Brad'},
    {name: 'Sally'},
    {name: 'Rachel'},
];

// for (const item of items) {
//     console.log(item);
// }

for (const user of users) {
    console.log(user.name);
}

//Loop over strings
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

//loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);


for (const [key, value] of map) {
    console.log(key, value);
}
