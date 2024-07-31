//Step 1 Create an array of objects called library. Add 3 objects with a property of title, author, status.
// Title and author should be strings (whatever value you want) and status should be another object with the
// properties of own, reading and read. Which should all be boolean values. For all status,
// set own to true and reading and read to false.
const library = [
     {
        title: "Red",
         author: "January",
         status: {
            own: true,
             reading: false,
             read: false,
         },
    },
    {
        title: "Blue",
        author: "February",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "Green",
        author: "March",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
]

//Step 2 You finished reading all the books. Set the read value for all of them to true.
// Do not edit the initial object. Set the values using dot notation.
library[0].read = true;
library[1].read = true;
library[2].read = true;

console.log(library[0].read, library[1].read, library[2].read);
console.log(library[0], library[1], library[2]);


//Step 3 Destructure the title from the first book and rename the variable to firstBook
const [{title: firstBook} ] = library;

console.log(firstBook);

//Step 4 Turn the library object into a JSON string
const libObjStr = JSON.stringify(library);

console.log(libObjStr);
