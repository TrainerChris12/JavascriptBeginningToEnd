let x;

const todo = new Object();

todo.id = 1;
todo.name= 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        cords: {
            lat: 42.9384,
            lng: -71.8934,
        },
    },
};

x = person.address.cords.lat;


const obj1  = {a: 1, b: 2};
const obj2  = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};

x = obj3;
console.log(x);