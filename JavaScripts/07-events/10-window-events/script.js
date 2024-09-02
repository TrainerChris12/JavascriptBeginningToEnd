
// window.onload = function() {
// document.querySelector('h1').textContent = 'Welcome to the JavaScript!';
// }

window.addEventListener('load', function() {
    console.log('Page Loaded!');
})

window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded!');
})

console.log('run me');


window.addEventListener('resize', () => {
document.querySelector('h1').innerText =
    `Resized to ${window.innerHeight}px x ${window.innerWidth}px`;
});

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70 ) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
})

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'blue';
    });
})
window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    });
})