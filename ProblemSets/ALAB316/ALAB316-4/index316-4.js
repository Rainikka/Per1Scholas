/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******* REGEX  316.4 *********/
/******************************/

/******************************/
/****** Form Validation  ******/
/****** with JavaScript *******/
/******** 31-MAR-2025 *********/

/************************************************/
/*************** REGEX VALIDATION ***************/
/**
* ********* Username Regex ****************
* Username includes at least one letter and one number
* (?= [^ a - zA - Z0 - 9] * [a - zA - Z0 - 9]);
* Usernamde includes at least two unique characters
* (?= ([a - zA - Z0 - 9] * ([a - zA - Z0 - 9])) \1 ? $);
*
* ************ Email Regex *****************
* Email is valid with a "@" and "."
* (/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
*
* ********* Password Regex ****************
* Password Requirements
* (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$ %^&*()\-_=+{};:,<.>]).{ 12,}$/);
*
/**********************************************************/
/************ Knowledge Inspiration: Geeks4Geeks **********/

function formvalidate() {
  /*** Get User Input Elements By ID ***/
  const usernameInput = document.getElementById('username').value;
  const emailInput = document.getElementById('email').value;
  const passInput = document.getElementById('password').value;
  const termsAgree = document.getElementById('terms').checked;

  /*** InnerHTML Error Messages By Type ***/
  /*** Error Message Inner HTML ***/
  const errorDisplay = document.getElementById('errorDisplay');
  errorDisplay.id = 'errorDisplay';

  const usernameError = errorDisplay.innerHTML = "";
  const emailError = errorDisplay.innerHTML = "";
  const passError = errorDisplay.innerHtml = "";
  const termsError = errorDisplay.innerHHTML = "";

  /*** Get Error Message Elements By ID ***/
  const btnRegister = document.getElementById("register");

  /*** Username Regex Validation Requirements ***/
  /*** Username inludes a letter and a number ***/
  const nameAlphaNumeric = ([a - zA - Z0 - 9] + -);
  /*** Username inludes 2 unique character ***/
  const name2UniqueChars = ((?= (.* (.).*\2) { 1,}) - s);
  /*** Email Regex Validation Requirements ***/
  /*** Email inludes a "@" and "." ***/
  const emailInvalid = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  /*** Password Regex Validation Requirements ***/
  /*** Password inludes a "@" and "." ***/
  const passInvalid = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$ %^&*()\-_=+{};:,<.>]).{ 12,}$/);

  /*** Validation Conditionals ****/
  if (usernameInput === "") || (usernameInput.length < 4) || (!nameAlphaNumeric.test(usernameInput)) || (!name2UniqueChars.test(usernameInput)){
    errorDisplay.innerHTML = usernameError;
  } else if (emailInput === "") || (!emailInvalid.test(emailInput)) {
    errorDisplay.innerHTML = emailError;
  } else if (passInput === "") || (!passInvalid.test(passInput)) {
    errorDisplay.innerHTML = passError;
  } else {
    console.log('Submit button clicked!');
  }
}

const submitButton = document.querySelector('input[type="submit"]');

// Add click event listener to the button submit Button
addEventListener('click', function (event) {
  console.log('Submit button clicked!');
  // Your button click logic here
});

usernameError = "USERNAME ERROR: Please select a username based on the following criteria: <br>The username cannot be blank.<br>The username must be at least four characters long.<br>The username must contain at least two unique characters.<br>The username cannot contain any special characters or whitespace";

emailError = "EMAILE ERROR: Email is not valid"";

passError = "PASSWORD ERROR: Passwords must be at least 12 characters long.<br> Passwords must have at least one uppercase and one lowercase letter.<br> Passwords must contain at least one number.<br> Passwords must contain at least one special character.<br> Passwords cannot contain the word "password".<br> Passwords cannot contain the username.<br>Both passwords must match.";