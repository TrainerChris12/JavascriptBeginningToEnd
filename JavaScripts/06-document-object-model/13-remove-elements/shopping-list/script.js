function removeClearButton() {
    const clearButton = document.querySelector('#clear')

    clearButton.remove();
}


//                  *---REMOVING THE ELEMENT DIRECTLY---*
function removeItem(itemNumber) {
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    li.remove();
}

//                  *---USING .removeChild() ON THE PARENT ELEMENT---*
function remove(itemNumber) {
    const ul = document.querySelector(`ul`);
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}

//                  *---USING .removeChild() ON THE PARENT ELEMENT---*
//                  USING THE NODE LIST (querySelectorAll)
//                  AND PASSING IN THE PARAMETER AS AN INDEX OF THE NODE LIST ARR
//                  WITH THIS APPROACH, REMEMBER THAT THE NODE LIST IS 0 INDEXED (ARRAY)
function remove2(itemNumber) {
    const ul = document.querySelector(`ul`);
    const li = document.querySelectorAll('li');
    //added the "- 1" below after the previous notes were already written -
    // still want to keep them for my case
    ul.removeChild(li[itemNumber - 1]);
}

//                                *---SHORT HAND---*
const remove3 = (itemNumber) => document.querySelector('ul')
    .childNodes[itemNumber - 1].remove();

//                        *---EVEN SHORTER (VIDEO METHOD) SHORT HAND---*
const remove4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();


// removeClearButton();
// removeFirstItem();

// removeItem(3);

// remove(1);
// remove2(1);
remove4(1);
