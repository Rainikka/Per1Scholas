/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******* REGEX  316.4 *********/
/******************************/

/******************************/
/****** Form Validation  ******/
/****** with JavaScript *******/
/******** 31-MAR-2025 *********/

/**************************************************
*** REGEX VALIDATION ***
*
* Username includes at least one letter and one number
* (?= [^ a - zA - Z0 - 9] * [a - zA - Z0 - 9])
* Usernamde includes at least two unique characters
* (?=([a - zA - Z0 - 9] * ([a - zA - Z0 - 9])) \1 ? $)
*
*
*
*
*
*
/***************************************************/

/************** Knowledge Inspiration: Geeks4Geeks *****************/

function formvalidate() {
  /*** Get User Input Elements By ID ***/
  const usernameInput = document.getElementById('username').value;
  const emailInput = document.getElementById('email').value;
  const passInput = document.getElementById('password').value;
  const termsAgree = document.getElementById('terms').checked;
  /*** Get Error Message Elements By ID ***/
  const btnRegister = document.getElementById("register");
  const errorDisplay = document.getElementById('errorDisplay');
  /*** Username Regex Validation Requirements ***/
  /*** Must inlude a lettr and a number ***/
  const nameAlphaNumeric = [a - zA - Z0 - 9] + -
  /*** Must inlude 2 unique character ***/
  const name2UniqueChars = (?= (.* (.).*\2) { 1,}) - s
  /*** Password Regex Validation Requirements ***/
  /*** Must inlude a lettr and a number ***/
  /*** Username Regex Validation ***/
  const nameAlphaNumeric = (?= [^ a - zA - Z0 - 9] * [a - zA - Z0 - 9]);
  const name2UniqueChars = (?= ([a - zA - Z0 - 9] * ([a - zA - Z0 - 9])) \1 ? $);

  /*** Error Message Inner HTML ***/
  errorDisplay.innerHTML = "";

  /*** Validation Conditionals ****/
  if (usernameInput === " ")|| (usernameInput.length < 4) || (!nameAlphaNumeric.test(usernameInput)) || (!name2UniqueChars.test(usernameInput)){
    errorDisplay.innerHTML = "Please select a username based on the following criteria: <br>The username cannot be blank.<br>The username must be at least four characters long.<br>The username must contain at least two unique characters.<br>The username cannot contain any special characters or whitespace.";
  }


}

const submitButton = document.querySelector('input[type="submit"]');

// Add click event listener to the button
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Still need this to prevent form submission
  console.log('Submit button clicked!');
  // Your button click logic here
});