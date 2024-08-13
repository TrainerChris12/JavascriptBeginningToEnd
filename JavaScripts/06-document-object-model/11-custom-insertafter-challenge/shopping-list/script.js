//My Solution
function insertAfter(newEl, existingEl) {
    existingEl.insertAdjacentElement('afterend', newEl);
}

//Video Solution
function insertAfter2(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
// insertAfter(li, firstItem);
insertAfter2(li, firstItem);
console.log(document.body);