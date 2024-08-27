const clearBtn = document.querySelector('#clear');

function onClear() {
    alert('Clear Items');
}

function clearAllItems() {
    const elements = Array.from(document.querySelector('#item-list').childNodes);
    elements.forEach((element) => element.remove());
}

function clearAllItems2() {
    const elements = Array.from(document.querySelector('#item-list').childNodes);
    for (const element of elements) {
        element.remove();
    }
}

function clearAllItems3() {
    const elements = document.querySelectorAll('li');
    for (const element of elements) {
        element.remove();
    }
}

function clearAllItems4() {
    const allLi = document.querySelectorAll('li')
    let elements = [];
    for (let i = 0; i < allLi.length; i++) {
        elements.push(allLi.item(i));
    }
    elements.forEach((element) => element.remove());
}

clearBtn.addEventListener('click', clearAllItems4);

//JavaScript Event Listener
// clearBtn.onclick = function () {
//     alert('Clear Items');
// };

// clearBtn.onclick = function () {
//     console.log('Clear Items');
// };

// addEventListener
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

