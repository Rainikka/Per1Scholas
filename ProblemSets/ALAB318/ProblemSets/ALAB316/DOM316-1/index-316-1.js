/****** Rainikka Corprew *****/
/******** JAVASCRIPT *********/
/******* ALAB 316.1.1 ********/
/*****************************/

/******************************/
/***** DOM Manipulation *******/
/******** (Part One) **********/

/*** CODE SANDBOX ***
 * https://codesandbox.io/p/sandbox/alab-dom-manipulation-part-one-forked-r83kdr?file=%2Fsrc%2Findex.js%3A1%2C9-88%2C1/ 
 ***/

/******* PROBLEM SET TASK *********************************
This lab is the first of a two-part assignment in which you will manipulate the DOM using various tools and techniques.This portion of the activity focuses on adding static elements created with JavaScript.le space and potential growth.
****************************************************************/

/********** Part 1: Getting Started ***
 * Start the project by building a main content element using the
 * following steps:
 * 1. Select and cache the <main> element in a variable named mainEl.
 * 2. Set the background color of mainEl to the value stored in the
 *  --main-bg CSS custom property.
 * 3. Set the content of mainEl to <h1>DOM Manipulation</h1>.
 * 4. Add a class of flex-ctr to mainEl. **/

const body = document.querySelector("body");
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1> DOM Manipulation </h1>";
mainEl.classList.add("flex-ctr");

/********** Part 2: Creating A Menu Bar *****
 * 1. Select and cache the <nav id="top-menu"> element in a variable
 * named topMenuEl.
 * 2. Set the height of the topMenuEl element to be 100%.
 * 3. Set the background color of topMenuEl to the value stored in
 * the --top-menu-bg CSS custom property.
 * 4. Add a class of flex-around to topMenuEl. **/

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

/********** Part 3: Add Menu Buttons *****
 * Copy the following data structure to the top of your index.js
 * file to create your menu buttons;
 * 
 * /**** Menu data structure *
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
***/
/***
 *
 c

/*****  ATTEMPT TO LOOP OVER OBJECT KEYS AND SET AS ATTRIBUTE *****?
function navLinks(text, href) {
  for (let i = 0; i < menuLinks.length; i++) {
    const aLink = document.createElement("a");
    const aText = document.createElement("p");

    aLink.setAttribute("href", "aLink");
    aText.textContent("text");

/***** ---------- NOTE  ---------- *****/
/*** Not sure how to access key/obj pairs and pass it 
 * through the created elements. I feel like I almost know,
 * but not quite. 
  
  }
}
topMenuEl.appendChild("");
**/

