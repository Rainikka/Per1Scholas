/****************** TESTING ********************/
/************* Set Image Attributes ***********/
const picList = ['./pics/0.png', './pics/1.png', './pics/2.png', './pics/3.png', './pics/4.png', './pics/5.png', './pics/6.png', './pics/7.png', './pics/8.png', './pics/9.png', './pics/10.png', './pics/11.png', './pics/12.png', './pics/13.png', './pics/14.png', './pics/15.png', './pics/16.png', './pics/17.png', './pics/18.png', './pics/19.png', './pics/20.png', './pics/21.png', './pics/22.png', './pics/23.png', './pics/24.png', './pics/25.png', './pics/26.png', './pics/27.png', './pics/28.png', './pics/29.png', './pics/30.png', './pics/31.png', './pics/32.png', './pics/33.png', './pics/34.png', './pics/35.png', './pics/36.png', './pics/37.png', './pics/38.png', './pics/39.png', './pics/40.png', './pics/41.png', './pics/42.png', './pics/43.png', './pics/44.png', './pics/45.png', './pics/46.png', './pics/47.png', './pics/48.png', './pics/49.png', './pics/50.png']

/**** Knowledge Inspiration: W3Schools: Random Number Generator ****/
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
    maxA = 24;
    const numARandom = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    return numARandom;
  }
  function imageBRandom() {
    minB = 25;
    maxB = 50;
    const numBRandom = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    return numBRandom;
  }
} else {
  function imageARandom() {
    minA = 26;
    maxA = 51;
    const numARandom = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    return numARandom;
  }
  function imageBRandom() {
    minB = 0;
    maxB = 25;
    const numBRandom = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    return numBRandom;
  }
}

const leftPic = picList.splice(imageARandom(), 1);
leftPic.id = 'leftPic';
const picAFrame = document.getElementById("picAFrame");
const imageA = document.createElement('img');
imageA.id = 'imageA';
imageA.setAttribute('src', leftPic);
picAFrame.append(imageA);

const rightPic = picList.splice(imageBRandom(), 1);
rightPic.id = 'rightPic';
const picBFrame = document.getElementById("picBFrame");
const imageB = document.createElement('img');
imageB.id = 'imageB';
createImageBitmap.setAttribute('src', rightPic);
picBFrame.append(imageB);

// const rightPic = picList.splice(imageBRandom(), 1);
// rightPic.id = 'rightPic';
// const randomImage = document.getElementById('random-image');
// randomImage.src = rightPic;

const buttonClick = document.getElementById('buttonClick'); buttonClick.addEventListener('click', imageRandom);


/****************** TESTING ********************/
/************* Set Image Attributes ***********/


// let imgA = document.createElement('img');
// imgA.id = 'imgA';
// document.getElementById(frameA).appendChild('imgA');


// imgA = "./images/2.png";
// main.appendChild(playSection);

// document.getElementById('imageA').setAttribute("src", "./images/*.png");

// document.getElementById(imageA).src = "imgA";

// var array = ["dog.jpg", "fox.jpg", "mouse.jpg", "alligator.jpg", "fish.jpg", "parrot.jpg", "cat.jpg"];

// function displayImage() {
//   var num = Math.floor(Math.random() * array.length + 1);
//   document.canvas.src = 'images/array[num]';
// }


/****************** THIS WORKS *******************/
// document.getElementById('imageA').setAttribute("src", "./images/2.png");
// document.getElementById('imageB').setAttribute("src", "./images/4.png");

/****************** THIS WORKS TOO *******************/
// document.getElementById(imageA).src = "./images/4.png";
// document.getElementById(imageB).src = "./images/5.png";


/************* Random Number Generator Photo ***********/
// let boxA = Math.floor(Math.random() * 51);
// console.log(boxA);
// let boxB;

// if (boxA <= 25) {
//   boxB = Math.floor(Math.random() * (51 - 27 + 1) + 26);
// } else {
//   boxB = Math.floor(Math.random() * (26 - 0 + 1) + 0);
// }

//
// console.log(boxA);
// console.log(boxB);

// let imageX = `"./images/${boxA}.png"`;
// console.log(imageX);

// let imageY = `./ images / ${ boxB }.png;
// console.log(imageY)`;

// let demo = document.getElementById("demo");
// demo.setAttribute("src", "imageX");


/************ *Html Tables */
// < !--Table Box for Randomization Play-- >
//   < !-- < table id = "table" > -->
//   < !-- < tr id = "row1" class="row" >
//     <td id="frameA">
//       <img id="imgA" class="photos" src="./images/4.png" style="width: 200px; height: 200px";></td>
//     <td id="frameB">
//       <img id="imgB" class="photos" src="./images/8.png" style="width: 200px; height: 200px";>
//     </td>
//   </ >
//   <tr id="row2" class="row">
//     <td>A</td>
//     <td>B</td>
//   </tr> -->
//   < !-- </table > -->

//   < !--Image Box for Randomization Play-- >
//   < !-- < div id = "imgBox" style = "width:100px; height: 100px; border: 1px solid black" >
//     <img id="demo" style="width:100%; height:100%;">
//     </> -->

//   < !-- < img id = "imgA" class="pics" >
//   <img id="imgB" class="pics"> -->

/** For-Loop Knowledge Inspiration:  Andrew Waterman **
 * 
 * Courtesy of screenshot taken on 3/10/2025
 * of coursework example Andrew Waterman
 * shared with class on zoom. ** See in images: "codeAndrew" ***
 * 
 ***/


/************************** FIXING RIGHT NOW ******************/

if (picB < 26 && userInput == "B" || "b") {
  document.getElementById('response').innerHTML =
    "<em>YOUWZA!<em><br>You Are Smarter Than AI";
  document.getElementById('response').style.color = "green";
  document.getElementById('frameB').style.border = "5px solid seaGreen";
  document.getElementById('cellB').style.background = "seaGreen";
  document.getElementById('cellB').style.border = "5px solid seaGreen";
  document.getElementById('cellB').textContent = "I Am Real"
  document.getElementById('cellB').style.color = "white";

} else if (picB >= 26 && userInput == "B" || "b") {
  document.getElementById('response').innerHTML =
    "<em>BAMBOOZLED BY AI!<em><br>You Are <u>Not</u> Smarter Than AI";
  document.getElementById('response').style.color = "crimson";
  document.getElementById('frameB').style.border = "5px solid crimson";
  document.getElementById('cellB').style.background = "crimson";
  document.getElementById('cellB').style.border = "5px solid crimson";
  document.getElementById('cellB').textContent = "I Am AI"
  document.getElementById('cellB').style.color = "white";

} else if (picA <= 25 && userInput == "A" || "a") {
  document.getElementById('response').innerHTML =
    "<em>YOWZAH!</em><br>You Are Smarter Than AI";
  document.getElementById('response').style.color = "green";
  document.getElementById('frameA').style.border = "5px solid seaGreen";
  document.getElementById('cellA').style.background = "seaGreen";
  document.getElementById('cellA').style.border = "5px solid seaGreen";
  document.getElementById('cellA').textContent = "I Am Real"
  document.getElementById('cellA').style.color = "white";

} else if (picA >= 26 && userInput == "A" || "a") {
  document.getElementById('response').innerHTML =
    "<em>BAMBOOZLED BY AI!<em><br>You Are <u>Not</u> Smarter Than AI";
  document.getElementById('response').style.color = "crimson";
  document.getElementById('frameA').style.border = "5px solid crimson";
  document.getElementById('cellA').style.background = "crimson";
  document.getElementById('cellA').style.border = "5px solid crimson";
  document.getElementById('cellA').textContent = "I Am AI"
  document.getElementById('cellA').style.color = "white";

} else {
  document.getElementById('response').innerHTML =
    "<em>OOPS! Something Is Amiss -- Retry.<em>";
}




const picList = ['./pics/0.png', './pics/1.png', './pics/2.png', './pics/3.png', './pics/4.png', './pics/5.png', './pics/6.png', './pics/7.png', './pics/8.png', './pics/9.png', './pics/10.png', './pics/11.png', './pics/12.png', './pics/13.png', './pics/14.png', './pics/15.png', './pics/16.png', './pics/17.png', './pics/18.png', './pics/19.png', './pics/20.png', './pics/21.png', './pics/22.png', './pics/23.png', './pics/24.png', './pics/25.png', './pics/26.png', './pics/27.png', './pics/28.png', './pics/29.png', './pics/30.png', './pics/31.png', './pics/32.png', './pics/33.png', './pics/34.png', './pics/35.png', './pics/36.png', './pics/37.png', './pics/38.png', './pics/39.png', './pics/40.png', './pics/41.png', './pics/42.png', './pics/43.png', './pics/44.png', './pics/45.png', './pics/46.png', './pics/47.png', './pics/48.png', './pics/49.png', './pics/50.png'];

// const picA = picList.splice(imageARandom(), 1);
// const picB = picList.splice(imageBRandom(), 1);