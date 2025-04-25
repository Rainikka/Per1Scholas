
// /images/1.png

const numb = [0, 1, 2, 3, 4, 5]


let boxA = Math.floor(Math.random() * 51);
console.log(boxA);
let boxB;

if (boxA <= 25) {
  boxB = Math.floor(Math.random() * (51 - 27 + 1) + 26);
} else {
  boxB = Math.floor(Math.random() * (26 - 0 + 1) + 0);
}

console.log(boxA)
console.log(boxB);

let imageA = `./images/${boxA}.png`;
console.log(imageA);

let imageB = `./images/${boxB}.png`;
console.log(imageB);



//="./images/" + + ".png" 