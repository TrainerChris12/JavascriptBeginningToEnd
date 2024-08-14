function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replace First';

    firstItem.replaceWith(li);
}

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replace Second</li>'
}

function replaceAllItems()  {
    const allLi = document.querySelectorAll('li');
    //                           *---SHORT HAND---*
    allLi.forEach((li, index)=>
        (index === 1) ? li.outerHTML = '<li>Second Item</li>' : li.outerHTML = '<li>We are All Replaced!</li>');


    //                           *---LONG WAY---*
    // allLi.forEach((li, index) => {
    //     // li.outerHTML = '<li>We are all replaced!</li>'
    //     if (index === 1) {
    //         li.innerHTML = 'Second Item'
    //     } else {
    //         li.innerHTML = 'We are all Replaced!'
    //     }
    // });

}

function replaceChildHeading() {
    const ul = document.querySelector('li').parentElement;

    const newLi = document.createElement('li');
    newLi.textContent = 'Replaced Child';
    ul.replaceChild(newLi, ul.firstElementChild.nextElementSibling.nextElementSibling);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();