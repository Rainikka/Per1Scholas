// //got all out elements cached
// const body = document.querySelector('body');
// const div1 = document.createElement('div');
// const div2 = document.createElement('div');
// const ol1 = document.createElement('ol');
// const ul2 = document.createElement('ul');

// //adding elements to the body
// body.appendChild('div1');
// body.appendChild('div2');
// div1.appendChild('ol');
// div2.appendChild('ul');

// div1.style.backgroundColor = "blue";

let one = 1, two = 2;
console.log(one + two)
/*
ol.appendChild('li');
ol.appendChild('li');
ol.appendChild('li');
ul.appendChild('li');
ul.appendChild('li');
*/

var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const myObject = { a: 1, b: 2, c: 3 };
for (const key in menuLinks) {
  if (menuLinks.hasOwnProperty(key)) {
    // Check if the property belongs to the object itself
    console.log(key, menuLinks[key]);
  }
}

/***************************************/

for (const key in menuLinks) {
  if (menuLinks.hasOwnProperty(key)) {
    // document.createElement('a');
    console.log(`a.setAttribute('href', menuLinks[key]`);
    console.log(`a.textContent("key")`);
    console.log(key, menuLinks[key]);
  }
}




/*****************************************/
// const myObject = { a: 1, b: 2, c: 3 };

// for (const key in myObject) {
//   if (myObject.hasOwnProperty(key)) { // Check if the property belongs to the object itself
//     console.log(key, myObject[key]);
//   }
// }