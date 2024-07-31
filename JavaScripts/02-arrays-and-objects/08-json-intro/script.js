const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the post one',
}

//Convert to JSON string
const str = JSON.stringify(post);


//Parse JSON
const obj= JSON.parse(str);


const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post three' },
]


const str2 = JSON.stringify(posts);
console.log(str2);