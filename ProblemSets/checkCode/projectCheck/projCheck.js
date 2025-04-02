
const body = document.body;

const picList = ['./pics/1.png', './pics/2.png', './pics/3.png', './pics/4.png', './pics/5.png', './pics/6.png', './pics/7.png'];

const demo0 = document.getElementById("demo0")
demo0.innerHTML = randomRandom();

function randomRandom() {
  const totalChoices = 2;
  const numRandom = Math.floor((Math.random() * totalChoices) + 1);
  return numRandom;
}

let minA;
let maxA;
let minB;
let maxB;

if (randomRandom() % 2) {
  function imageARandom() {
    minA = 0;
    maxA = 3;
    const numARandom = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    return numARandom;
  }
  function imageBRandom() {
    minB = 4;
    maxB = 7;
    const numBRandom = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    return numBRandom;
  }
} else {
  function imageARandom() {
    minA = 4;
    maxA = 7;
    const numARandom = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    return numARandom;
  }
  function imageBRandom() {
    minB = 0;
    maxB = 3;
    const numBRandom = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    return numBRandom;
  }
}

const demoA = document.getElementById("demoA")
demoA.innerHTML = imageARandom();

const demoB = document.getElementById("demoB")
demoB.innerHTML = imageBRandom();

// if (randomRandom() % 2) {
//   function imageARandom() {
//     let minA = 1;
//     let maxA = 25;
//     const numARandom = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
//     return numARandom;
//   }
//   function imageBRandom() {
//     let minB = 26;
//     let maxB = 51;
//     const numBRandom = Math.floor(Math.random() * (maxB - minA B Bb + 1)) + minB;
//     return numBRandom;
// }
// const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// function imageARandom() {
//   let minA;
//   let maxA;
//   const numARandom = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
//   return numARandom;
// }

// function imageBRandom() {
//   const totalImages = 6;
//   const numBRandom = Math.floor((Math.random() * totalImages) + 1);
//   return numBRandom;
// }
// const prefix = "./pics/";
// const suffix = ".png";
// const numRandom = imageRandom();

// const randomARandom = `'${prefix}${numRandom}${suffix}'`;
// const randomBRandom = `'${prefix}${numRandom}${suffix}'`;
// const demoA = document.getElementById("demoA")
// demoA.innerHTML = randomARandom;
// const demoB = document.getElementById("demoB")
// demoB.innerHTML = randomBRandom;

// return `"${imageFolder}${numRandom}${fileExtension}"`;

const leftPic = picList.splice(imageARandom(), 1);
leftPic.id = 'leftPic';
const pic1Frame = document.getElementById("pic1Frame");
const image = document.createElement('img');
image.id = 'image';
image.setAttribute('src', leftPic);
pic1Frame.append(image);

const rightPic = picList.splice(imageBRandom(), 1);
rightPic.id = 'rightPic';
const randomImage = document.getElementById('random-image');
randomImage.src = rightPic;

/***************** THIS WORKS ****************/
// const leftPic = picList.splice(4, 1);
// leftPic.id = 'leftPic';
// const pic1Frame = document.getElementById("pic1Frame");
// const image = document.createElement('img');
// image.id = 'image';
// image.setAttribute('src', leftPic);
// pic1Frame.append(image);

// const rightPic = picList.splice(6, 1);
// rightPic.id = 'rightPic';
// const randomImage = document.getElementById('random-image');
// randomImage.src = rightPic;

// function imageBRandom() {
//   const totalImages = 6;
//   const numBRandom = Math.floor((Math.random() * totalImages) + 1);
//   return numBRandom;
// }
/***************** THIS WORKS ****************/

// const demo1 = document.getElementById("demo1").innerHTML = leftPic;
// const demo2 = document.getElementById("demo2").innerHTML = rightPic;
// const demo3 = document.getElementById("demo3");
// demo3.innerHTML = imageRandom();

//   const totalImages = 6;
//   const numBRandom = Math.floor((Math.random() * totalImages) + 1);
//   return numBRandom;
// }

// function imageBRandom() {
//   const totalImages = 6;
//   const numBRandom = Math.floor((Math.random() * totalImages) + 1);
//   return numBRandom;
// }

const buttonClick = document.getElementById('buttonClick'); buttonClick.addEventListener('click', imageRandom);

// // Generate random number within range
// const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;



/*********************OLD CODE **************/
// const rightPic = picList.splice(2, 1);
// rightPic.id = 'rightPic';
// const randomImage = document.getElementById('random-image');
// // randomImage.setAttribute('src', rightPic);
// randomImage.src = rightPic;

// function imageRandom() {
//   const totalImages = 50;
//   const numRandom = Math.floor(Math.random() * totalImages) + 1;
//   // return `"${imageFolder}${numRandom}${fileExtension}"`;
//   return numRandom
// }
// const buttonClick = document.getElementById('buttonClick').addEventListener('click', imageRandom);
/*********************OLD CODE **************/



// // Configuration
// const imageFolder = './imagesFolder/';  // Path to your images folder
// const totalImages = 7;         // Total number of images (1.png to 10.png)
// const fileExtension = '.png';   // Image file extension

// //Function to get a random image
// function getRandomImage() {
//   const randomNumber = Math.floor(Math.random() * totalImages) + 1;
//   return `"${imageFolder}${randomNumber}${fileExtension}"`;
// }
// console.log(getRandomImage());

// // Function to display the random image
// function displayRandomImage() {
//   const imgElement = document.getElementById('random-image');
//   // imgElement.id = 'random-image';
//   imgElement.src = "./imagesFolder/5.png" /*getRandomImage();*/
//   imgElement.alt = 'Randomly selected image';

//   const container = document.getElementById('image-container');
//   container.innerHTML = '';
//   container.appendChild(imgElement);
//   return imgElement.src;
// }
// console.log(imgElement.src);

// const element = document.getElementById("random-btn");
// element.addEventListener("click", displayRandomImage);

/*******************************************************************************/
// Initial display and button click handler
// button.addEventListener('click'() => {
//   document.getElementById('random-btn')
//   displayRandomImage();
// });




/********************************************************************/
/************************* UNTOUCHED CODE **************************/
/********************************************************************/
// const photoArray = ["bear.png, goat.png, dog.png, fox.png, rabbit.png, cat.png, bird.png"];

// // const imageBox = document.querySelector(#imageBox);
// // imageBox.innerHTML = imageBox.appendChild(imgElement);


// // Configuration
// const imageFolder = 'images/';  // Path to your images folder
// const totalImages = 10;         // Total number of images (1.png to 10.png)
// const fileExtension = '.png';   // Image file extension

// // Function to get a random image
// function getRandomImage() {
//   const randomNumber = Math.floor(Math.random() * totalImages) + 1;
//   return `${ imageFolder }${ randomNumber }${ fileExtension } `;
// }

// // Function to display the random image
// function displayRandomImage() {
//   const imgElement = document.getElementById('random-image') || document.createElement('img');
//   imgElement.id = 'random-image';
//   imgElement.src = getRandomImage();
//   imgElement.alt = 'Randomly selected image';

//   const container = document.getElementById('image-container');
//   container.innerHTML = '';
//   container.appendChild(imgElement);
// }

// // Initial display and button click handler
// window.addEventListener('DOMContentLoaded', () => {
//   displayRandomImage();
//   document.getElementById('random-btn').addEventListener('click', displayRandomImage);
// });

