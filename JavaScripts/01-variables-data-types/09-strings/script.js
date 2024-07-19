let x;
const name = 'John';
const age = 31;

x = 'Hello, my name is ' + name + ' and I am ' + age +
    ' years old';

//Template Literals/Strings
x = `Hello, my name is ${name} and I am ${age} years old`;

console.log(x);

//String Properties and Methods
const s = new String('Hello World');

x = typeof s;

x = s.length;

//Access value by key
x =s[1];

x = s.__proto__;

x =  s.toUpperCase();
x = s.toLowerCase();



console.log(x);

