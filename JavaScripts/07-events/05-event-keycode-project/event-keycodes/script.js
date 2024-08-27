//Method 1
/*window.addEventListener('keydown', (e) => {
    const insert = document.getElementById('insert');
    const insertChildren = insert.children;

    if (insertChildren.length >= 3) {

        e.key === ' ' ?
            insertChildren[0].firstChild.textContent = 'Space'
            : insertChildren[0].firstChild.textContent = e.key;

        insertChildren[1].firstChild.textContent = e.keyCode;
        insertChildren[2].firstChild.textContent = e.code;
    }

});*/

//Method 2
function showKeyCodes(e){
    const insert = document.getElementById('insert');
    insert.innerHTML = '';
    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    }

    for(let key in keyCodes) {
        const div = document.createElement('div');
        div.classList.add('key');

        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const keyValue = document.createTextNode(keyCodes[key]);
        small.appendChild(keyText);
        div.appendChild(keyValue);
        div.appendChild(small);

        insert.appendChild(div);
    }
}

window.addEventListener('keydown', showKeyCodes);