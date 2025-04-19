/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********* BOM 316.2 **********/
/******************************/

/******************************/
/****** BOM Manipulation ******/
/****** with JavaScript *******/
/******** 29-MAR-2025 *********/

/************* Body Dressing **************/
const body = document.querySelector("body");



/************************************************/
/****************** TESTING AREA ****************
 * document.getElementById('test0').id = "test0";
 * document.getElementById('test1').id = "test1";
 * document.getElementById('test2').id = "test2";
 * test0.innerHTML = randomFrame() % 2;
 * test1.innerHTML = picA;
 * test2.innerHTML = picB;
/************************************************
/************************************************/

/***************************/
/************* Elements Created ****************/
const main = document.createElement("main");
const header = document.createElement("header");
const title = document.createElement("h1");
const subtitle = document.createElement("p");
const answer = document.createElement("p");
const playSection = document.createElement("section");
const responseBox = document.createElement("div");
const responseLoud = document.createElement("p");
const response = document.createElement("p");
const table = document.createElement("table");
const buttonBox = document.createElement("div");
const button2Play = document.createElement("button");
const button2Reset = document.createElement("button");

/******* Append Elements *********/
document.body.appendChild(main);
main.appendChild(header);
header.appendChild(title);
header.appendChild(subtitle);
main.appendChild(playSection);
playSection.appendChild(responseBox);
responseBox.appendChild(responseLoud);
responseBox.appendChild(response);
playSection.appendChild(table);
playSection.appendChild(buttonBox);
buttonBox.appendChild(button2Play);
buttonBox.appendChild(button2Reset);

/********* Adding Id to Elements *********/
main.id = "main";
header.id = "header";
title.id = "title";
subtitle.id = "subtitle";
playSection.id = "playSection";
responseBox.id = "responseBox";
responseLoud.id = "responseLoud";
response.id = "response";
table.id = "table";
buttonBox.id = 'buttonBox';
button2Play.id = 'button2Play';
button2Reset.id = 'button2Reset';

/*** Append to Table Row 0, Header, & Image Frames, ***/
for (let i = 0; i < 1; i++) {
  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);
  headerRow.classList.add("rows");

  for (let j = 0; j < 2; j++) {
    const frame = document.createElement("th");
    headerRow.appendChild(frame);
    frame.classList.add("frames");

    for (let k = 0; k < 1; k++) {
      const image = document.createElement("img");
      frame.appendChild(image);
      image.classList.add("images");
    }
  }
}
/*** Append to Table Row 1, Header & Cells ***/
for (let l = 0; l < 1; l++) {
  const row = document.createElement("tr");
  table.appendChild(row);
  row.classList.add("rows");

  for (let m = 0; m < 2; m++) {
    const cell = document.createElement("td");
    row.appendChild(cell);
    cell.classList.add("cells");
  }
}

/******* Assign IDs to Row Y Cell  Elements in Table *********/
/*** Row IDs ***/
const row0 = table.firstChild.id = "row0";
const row1 = table.lastChild.id = "row1";
/*** Frame IDs ***/
const frameA = document.getElementById(row0).firstChild.id = 'frameA';
const frameB = document.getElementById(row0).lastChild.id = 'frameB';
/*** Cell IDs ***/
const cellA = document.getElementById(row1).firstChild;
cellA.id = "cellA";
document.querySelector('cellA');
cellA.textContent = "A";
const cellB = document.getElementById(row1).lastChild;
cellB.id = "cellB";
document.querySelector('cellB');
cellB.textContent = "B";

/************************* PIC RANDOMIZATION ************************/
/*************************** Pic List Folder ************************/
/**** Knowledge Inspiration: W3Schools: Random Number Generator ****/

/*** Frame Randomization ***/
function randomFrame() {
  const totalFrames = 2;
  const randomNumber = Math.floor((Math.random() * 2) + 1);
  return randomNumber;
}

/*** Set Minimum & Maximum ***/
const atRandom = randomFrame();
let minA = 1;
let maxA = 222;
let minB = 1;
let maxB = 222;
let totalAPics;
let totalBPics;

/*** Pic Randomization ***/
if (atRandom % 2 === 0) {
  function randomAImage() {
    // folderA = 1N; // Real-Natural Pics
    const randomANumber = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    return randomANumber
    // return folderA;
  }
  function randomBImage() {
    // folderB = 0S; // AI-Synthetic Pics
    const randomBNumber = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    return randomBNumber;
    // return folderB;
  }
} else {
  function randomAImage() {
    // folderA = 0S; // AI-Synthetic
    const randomANumber = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
    return randomANumber;
    // return folderA;
  }
  function randomBImage() {
    // folderB = 1N; // Real-Natural  Pics
    const randomBNumber = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
    return randomBNumber;
    // return folderB;
  }
}

/************* Set Image Attributes ***********/
/*** Image Frame Elements ***/
const imageA = document.getElementById(frameA).firstChild;
imageA.id = 'imageA';
const imageB = document.getElementById(frameB).firstChild;
imageB.id = 'imageB';

/******** Knowledge Inspiration: Geeks4Geeks ********/
/*** Select Random Pic ***/
let folderA;
let folderB;
let picA;
let picB;
const picPrefix = "./images/";
const picSuffix = ".png";

if (atRandom % 2 === 0) {
  folderA = "pics0S/";     // AI-Synthetic Photos 
  folderB = "pics1N/";    // Real-Natural Photos
  picA = `${picPrefix}${folderA}${randomAImage()}${picSuffix}`
  // picA.id = 'picA';
  picB = `${picPrefix}${folderB}${randomBImage()}${picSuffix}`
  // picB.id = 'picB';
} else {
  folderA = "pics1N/";     // Real-Natural Photos
  folderB = "pics0S/";    // AI-Synthetic Photos
  picA = `${picPrefix}${folderA}${randomAImage()}${picSuffix}`
  picB = `${picPrefix}${folderB}${randomBImage()}${picSuffix}`
}

/*** Set Image Attributes Attributes ***/
imageA.setAttribute('src', picA);
imageB.setAttribute('src', picB);

document.getElementById('button2Reset').addEventListener('click', function () {
  location.reload(); // Knowledge Inspiration : FreeCodeCamp
});

/****************** Prompt Elements ******************/
function responseAI() {
  /************ User Prompt *************/
  let userInput = prompt("Which Person Is Really REAL: A or B ?");

  /************ Prompt Response: FRAME A IS REAL *************/
  if ((userInput === "A" || userInput === "a") && (atRandom % 2 !== 0)) {
    /******* Game Elements *********/
    const subtitle = document.getElementById('subtitle');
    const responseLoud = document.getElementById('responseLoud');
    const response = document.getElementById('response');
    const frameA = document.getElementById('frameA');
    const cellA = document.getElementById('cellA');
    /******* InnerHTML ********/
    subtitle.innerHTML = "";
    responseLoud.innerHTML = "YOWZAH!";
    response.innerHTML = "You Are Smarter Than AI";
    cellA.textContent = "I am Real";
    /******* Add ClassList ********/
    responseLoud.classList.add('shoutRight');
    response.classList.add('yesRight');
    frameA.classList.add('frameRight');
    cellA.classList.add('cellRight');

    /************ Prompt Response: FRAME A IS AI *************/
  } else if ((userInput === "A" || userInput === "a") && (atRandom % 2 === 0)) {
    /******* Game Elements *********/
    const subtitle = document.getElementById('subtitle');
    const responseLoud = document.getElementById('responseLoud');
    const response = document.getElementById('response');
    const frameA = document.getElementById('frameA');
    const cellA = document.getElementById('cellA');
    /******* InnerHTML ********/
    subtitle.innerHTML = "";
    responseLoud.innerHTML = "BAMBOOZLED BY AI!";
    response.innerHTML = "You Are Not Smarter Than AI";
    cellA.textContent = "I am AI";
    /******* Add ClassList ********/
    responseLoud.classList.add('shoutWrong');
    response.classList.add('noWrong');
    frameA.classList.add('frameWrong');
    cellA.classList.add('cellWrong');

    /************ Prompt Response: FRAME B IS REAL *************/
  } else if ((userInput === "B" || userInput === "b") && (atRandom % 2 === 0)) {
    /******* Game Elements *********/
    const subtitle = document.getElementById('subtitle');
    const responseLoud = document.getElementById('responseLoud');
    const response = document.getElementById('response');
    const frameB = document.getElementById('frameB');
    const cellB = document.getElementById('cellB');
    /******* InnerHTML ********/
    subtitle.innerHTML = "";
    responseLoud.innerHTML = "YOWZAH!";
    response.innerHTML = "You Are Smarter Than AI";
    cellB.textContent = "I am Real";
    /******* Add ClassList ********/
    responseLoud.classList.add('shoutRight');
    response.classList.add('yesRight');
    frameB.classList.add('frameRight');
    cellB.classList.add('cellRight');

    /************ Prompt Response: FRAME B IS AI *************/
  } else if ((userInput === "B" || userInput === "b") && (atRandom % 2 !== 0)) {
    /******* Game Elements *********/
    const subtitle = document.getElementById('subtitle');
    const responseLoud = document.getElementById('responseLoud');
    const response = document.getElementById('response');
    const frameB = document.getElementById('frameB');
    const cellB = document.getElementById('cellB');
    /******* InnerHTML ********/
    subtitle.innerHTML = "";
    responseLoud.innerHTML = "BAMBOOZLED BY AI!";
    response.innerHTML = "You Are Not Smarter Than AI";
    cellB.textContent = "I am AI";
    /******* Add ClassList ********/
    responseLoud.classList.add('shoutWrong');
    response.classList.add('noWrong');
    frameB.classList.add('frameWrong');
    cellB.classList.add('cellWrong');
    /************ Prompt Response: 404 USER INPUT ERROR *************/
  } else {
    /******* Game Elements *********/
    const responseLoud = document.getElementById('responseLoud');
    const response = document.getElementById('response');
    /******* InnerHTML Response ********/
    responseLoud.innerHTML = "<h1> #404</h1>  <h3> OOPSY &#8212; DAISY </h3>";
    response.innerHTML = "<h4> Something Is Amiss &#8211; Retry.</h4>";
    /******* Add ClassList ********/
    responseLoud.classList.add('neutral');
    response.classList.add('neutral');
  }
}
button2Play.addEventListener('click', responseAI);

/*********** Style: Game Title **********/
title.innerHTML = "<h1> AI <span> or </span> Nawh? </h1>";
title.style.textAlign = "center";
title.style.color = "#33333";
title.style.fontFamily = "Arial, Helvetica, sansSerif";
title.style.fontWeight = "bolder";
title.style.letterSpacing = "4px";

/******** Style: Game Subtitle  ********/
subtitle.innerHTML = "Can You Tell Who Is <em><b> Real</b></em> and Who Is AI-Generated?";
subtitle.style.textAlign = "center";
subtitle.style.fontFamily = "Roboto"
subtitle.style.fontSize = "20px";
subtitle.style.fontWeight = "normal";
subtitle.style.color = "darkslateblue";

/*********** Style: Button2Play **********/
button2Play.innerHTML = "<em> Try Your Luck </em>";
button2Play.style.width = "0 28px";
button2Play.style.padding = "12px 28px";
button2Play.style.backgroundColor = "steelBlue";

/*********** Style: Button2Reset**********/
button2Reset.innerHTML = "<em> Reset</em>";
button2Reset.style.width = "0 20px";
button2Reset.style.padding = "12px 18px";
button2Reset.style.backgroundColor = "gray";

/*********** Style: Cells **********/
cellA.style.borderRight = "1px solid lightgray";
cellB.style.borderLeft = "1px solid lightgray";
// cells.style.width = "auto";
// cells.style.height = "auto";
// cells.style.textAlign = "center"
// cells.style.fontSize = "32px";
// cells.style.color = "#333333";

/******************* PIC RANDOMIZATION *******************/
/******* Photo Screenshots Origin: AI-Generated **********
 * 
 * Nightingale S.J., Farid H. (2022).AI - synthesized faces are indistinguishable from real
 * faces and more trustworthy.Proceedings of the National Academy of Sciences, USA, 119(8
 * Article e2120481119.https://doi.org/10.1073/pnas.2120481119
 * 
 * Miller, E.J., Steward, B.A., Witkower, Z., Sutherland, C.A.M., Krumhuber, E.G., & Dawel, A  * (2023).  AI Hyperrealism: Why AI Faces Are Perceived as More Real Than Human Ones
 * Psychological Science, 0(0).https://doi.org/10.1177/09567976231207095
 * 
 * Muñoz, C., Zannone, S., Mohammed, U., & Koshiyama, A.S. (2023).Uncovering Bias in Face
 * Generation Models.ArXiv, abs / 2302.11562.
 * 
 * Nightingale S.J., Farid H. (2022).AI - synthesized faces are indistinguishable from real
 * faces and more trustworthy.Proceedings of the National Academy of Sciences, USA, 119(8
 * Article e2120481119.https://doi.org/10.1073/pnas.2120481119
 * 
 * 
/******* Photo Screenshots Origin: Real People **********
 * 
 * UnSplash: https://unsplash.com
 * Pexels: https://www.pexels.com
 * PixaBay: https://pixabay.com
 * 
 * 
 /********************* --- THE END --- ******************/