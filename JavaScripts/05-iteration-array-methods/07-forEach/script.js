const socials = ['Twitter', 'Facebook', 'Linkedin', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//    console.log(`[${item}]: ${item}`);
// });

// socials.forEach((item, index, arr) => console.log(`${index}: ${item}`, arr));

function logSocial(social) {
    console.log(social);
}

// socials.forEach(logSocial);

const socialObjs = [
    {name: 'Twitter', url: 'https://www.twitter.com/'},
    {name: 'Facebook', url: 'https://www.facebook.com/'},
    {name: 'LinkedIn', url: 'https://www.linkedin.com/'},
    {name: 'Instagram', url: 'https://www.instagram.com/'},
];

socialObjs.forEach((item) => console.log(item));