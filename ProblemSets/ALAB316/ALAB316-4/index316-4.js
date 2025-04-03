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

const usernameErrorNote = "USERNAME ERROR: <br>Please select a username based on the following criteria: <br>The username cannot be blank.<br>The username must be at least four characters long.<br>The username must contain at least two unique characters.<br>The username cannot contain any special characters or whitespace.<br><br>";

const emailErrorNote = "EMAIL ERROR: <br> Email must be typed in valid email formatd<br><br>";

const passErrorNote = "PASSWORD ERROR: <br>Passwords must be at least 12 characters long.<br> Passwords must have at least one uppercase and one lowercase letter.<br> Passwords must contain at least one number.<br> Passwords must contain at least one special character.<br> Passwords cannot contain the word 'password'.<br> Passwords cannot contain the username.<br> Both passwords must match.<br><br>";

const termsErrorNote = "TERMS AGREEMENT ERROR: <br>Please agree to the terms of service.<br><br>";

/**********************************************************/
/************ Knowledge Inspiration: Geeks4Geeks **********/
function formValidate(event) {
  event.preventDefault(); {
    /*** Get User Input Elements By ID ***/
    const usernameInput = document.getElementById('username').value;
    const emailInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;
    const
      passCheckInput = document.getElementById('passCheck').value;
    const termsAgree = document.getElementById('terms').checked

    /*** Get Error Display Message Element ***/
    let errorDisplay = document.getElementById('errorDisplay');
    errorDisplay.id = 'errorDisplay';
    errorDisplay.style.display = 'block';
    errorDisplay.innerHTML = '';

    /*** Username Regex Validation Requirements ***/
    /*** Username inludes a letter and a number ***/
    const nameAlphaNumeric = /^[a-zA-Z0-9]+$/;
    /*** Username inludes 2 unique character ***/
    const name2UniqueChars = /^(?=.*(.).*\1)[a-zA-Z0-9]{4,}$/;
    /*** Email Regex Validation Requirements ***/
    /*** Email inludes a "@" and "." ***/
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /*** Password Regex Validation Requirements ***/
    /*** Password inludes a "@" and "." ***/
    const passValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{ };:,<.>]).{12,}$/;

    /*** Validation Conditionals ****/
    if ((usernameInput === "") || (usernameInput.length < 4) || (!nameAlphaNumeric.test(usernameInput)) || (!name2UniqueChars.test(usernameInput))) {
      errorDisplay.innerHTML = usernameErrorNote;
    } else if ((emailInput === "") || (!emailValid.test(emailInput))) {
      errorDisplay.innerHTML = emailErrorNote;
    } else if ((passInput === "") || (passInput.length < 12) || (passInput !== passCheckInput) || (!passValid.test(passInput))) {
      errorDisplay.innerHTML = passErrorNote;
    } else if (!termsAgree.checked) {
      errorDisplay.innerHTML = termsErrorNote;
    } else {
      errorDisplay.innerHTML = 'SUCCESS!<br><br>Your Registration Is Complete.';
      console.log("success");
    }
  }
}

/*** Register Button Validation ***/
const btnRegister = document.getElementById("register");
btnRegister.addEventListener('click', formValidate);