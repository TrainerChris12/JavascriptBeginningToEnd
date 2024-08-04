const colorObj = {
    color1: 'red',
    color2: 'green',
    color3: 'blue',
    color4: 'purple',
}

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}