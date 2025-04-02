/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******* ALAB 316.3.1 *********/
/******************************/

/******************************/
/****** DOM Manipulation ******/
/********* (Part Tw0) *********/
/******** 24-MAR-2025 *********/

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

const topMenuEl = document.querySelector('nav');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

/********** Part 3: Add Menu Buttons 
 * 
 * 1. Iterate over the entire menuLinks array and for each
 * "link" object:
* 2. Create an < a > element.
* 3. On the new element, add an href attribute with its value
 * set to the href property of the "link" object.
* 4. Set the new element's content to the value of the text
 * property of the "link" object.
* 5. Append the new element to the topMenuEl element. ***/

// Menu data structure
// let menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

// menuLinks.forEach((link) => {
//   const aLink = document.createElement("a");
//   aLink.id = "aLink";
//   aLink.textContent = link.text;
//   aLink.href = link.href;
//   document.querySelector('nav').appendChild(aLink);
// });


/***********  DOM316.3: PART TWO  ***********/
/********* Part 3: Creating Submenus ********/

/*** 
1. Select and cache the <nav id = "sub-menu"> element in a variable named subMenuEl.
2. Set the height subMenuEl element to be "100%".
3. Set the background color of subMenuEl to the value stored in the--sub-menu- bg CSS custom
property.
4. Add the class of flex - around to the subMenuEl element.
***/
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.id = "subMenuEl";
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
document.querySelector('header').appendChild(subMenuEl);
subMenuEl.style.top = "0";
subMenuEl.style.position = "absolute";

/********* Part 4: Adding Menu Interaction ********/
// Update the menuLinks array to the following:/
let menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

menuLinks.forEach((link) => {
  const aLink = document.createElement("a");
  aLink.textContent = link.text;
  aLink.href = link.href;
  document.getElementById('top-menu').appendChild(aLink);
});

/*** Select and cache all of the < a > elements inside of topMenuEl in a variable named topMenuLinks. ***/

/*** 2. Attach a delegated 'click' event listener to topMenuEl.
 * The first line of code of the event listener function should call the event object's preventDefault() method.
 * The second line of code of the function should immediately return
* if the element clicked was not an < a > element.
* Log the content of the < a > to verify the handler is working.
***/

/******** Default Value: Knowledge Inspiration: w3schools ********/
const topMenuLinks = document.querySelectorAll('a');
topMenuLinks.forEach(bLink => {
  bLink.addEventListener("click", function (event) {
    // Add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    bLink.classList.add("nav a.active");
    subMenuEl.style.top = "100%";
    console.log(bLink);
  });
})
if (event.target !== topMenuLinks) {
  event.preventDefault()
};

/********* Part 5: Submenu Interaction ****
Attach a delegated 'click' event listener to subMenuEl.
The first line of code of the event listener function should call the event
object's preventDefault() method.
The second line of code within the function should immediately return if the element clicked was not an < a > element.
Log the content of the < a > to verify the handler is working.
2. Next, the event listener should set the CSS top property of subMenuEl to 0.
3. Remove the active class from each < a > element in topMenuLinks.
4. Update the contents of mainEl, within an < h1 >, to the contents of the < a > element clicked
within subMenuEl.
5. If the ABOUT link is clicked, an < h1 > About</ > should be displayed.
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.id = "subMenuEl";
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
document.querySelector('header').appendChild(subMenuEl);
subMenuEl.style.top = "0";
subMenuEl.style.position = "absolute";
****/

// Catalog Sub-Menu
let catLinks = [
  { text: 'all', href: '/catalog/all' },
  { text: 'top selling', href: '/catalog/top' },
  { text: 'search', href: '/catalog/search' },
];
// Append to Sub-Menu
catLinks.forEach((link) => {
  const catLink = document.createElement("a");
  catLink.textContent = link.text;
  catLink.href = link.href;
  document.querySelector('subMenuEl').appendChild('catLink');
});
// Add Click Event Listener & Block Default Value
const subCatalogLinks = document.querySelectorAll('catLink');
subCatalogLinks.forEach(cLink => {
  cLink.addEventListener("click", function (event) {
    // Add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    cLink.classList.add("nav a.active");
    subMenuEl.style.top = "100%";
    console.log(cLink);
  });
})
if (event.target !== subCatalogLinks) {
  event.preventDefault()
};

// Orders Sub-Menu
let ordLinks = [
  { text: 'new', href: '/orders/new' },
  { text: 'pending', href: '/orders/pending' },
  { text: 'history', href: '/orders/history' },
];
// Append to Sub-Menu
ordLinks.forEach((link) => {
  const ordLink = document.createElement("a");
  ordLink.textContent = link.text;
  ordLink.href = link.href;
  document.querySelector(subMenuEl).appendChild('ordLink');
});
// Add Click Event Listener & Block Default Value
subOrdersLinks = document.querySelectorAll('ordLink');
subOrdersLinks.forEach(dLink => {
  bLink.addEventListener("click", function (event) {
    // Add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    dLink.classList.add("nav a.active");
    subMenuEl.style.top = "100%";
    console.log(dLink);
  });
})
if (event.target !== subOrdersLinks) {
  event.preventDefault()
};

// Accounts Sub-Menu
let acctLinks = [
  { text: 'profile', href: '/account/profile' },
  { text: 'sign out', href: '/account/signout' },
];
// Append to Sub-Menu
acctLinks.forEach((link) => {
  const acctLink = document.createElement("a");
  acctLink.textContent = link.text;
  acctLink.href = link.href;
  document.querySelector(subMenuEl).appendChild('acctLink');
});
// Add Click Event Listener & Block Default Value
const subAccountLinks = document.querySelectorAll('acctLink');
subAccountLinks.forEach(eLink => {
  bLink.addEventListener("click", function (event) {
    // Add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    eLink.classList.add("nav a.active");
    subMenuEl.style.top = "100%";
    console.log(EncodedAudioChunkLink);
  });
})
if (event.target !== subAccountLinks) {
  event.preventDefault()
};
