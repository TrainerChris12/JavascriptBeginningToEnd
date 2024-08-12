const div = document.createElement('div');
div.className = 'myElement';
div.id = 'myElement';
div.setAttribute('title', 'myElement');

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World!')
div.appendChild(text);

document.querySelector('ul').appendChild(div);