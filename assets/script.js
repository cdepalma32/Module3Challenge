// Prompt for password length
let length = parseInt(
  prompt ("Enter a password between the length of 8 and 128 characters")
  );
  // // Validate the length input
  // if (length < 8 || length > 128 || isNaN(length)) {
  //   alert("Invalid length. Please enter a number between 8 and 128.");
  //   return null;
  // } 
  
 // Prompt for character types
  let includelowerCaseLetters = confirm("Include lowercase characters?");
  let includeupperCaseLetters = confirm("Include uppercase characters?");
  let includenumericCharacters = confirm("Include numeric characters?");
  let includespecialCharacters = confirm("Include special characters?");
  

// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "1234567890";
var specialCharacters = "!@#$%^&*()-_=+[{]}\|;:',<.>/?";



// Write password to the #password input
function writePassword() {
  //This is where pw length and types of characters are input into function (from interface)
  var password = generatePassword(length, includelowerCaseLetters, includeupperCaseLetters, includenumericCharacters, includespecialCharacters);
  var passwordText = document.querySelector("#password");

  //Set passwordText textbox to value of password... which is the value returned from generatePassword function
  passwordText.value = password;
}

//Function that takes in password length and types of characters using true/false for each type
function generatePassword(passwordLength, useLowerCaseLetters, useUpperCaseLetters, useNumericCharacters, useSpecialCharacters) {
  var passwordCharacters = "";
  var passwordResult = "";
  
  //Each if/then adds chosen character set to passwordCharacters if true
  if (useLowerCaseLetters == true) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters);
  }
  if (useUpperCaseLetters == true) {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters);
  }
  if (useNumericCharacters == true) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }
  if (useSpecialCharacters == true) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  
  //Loop from 0 to passwordLength
  for (let i = 0 ; i < passwordLength ; i++) {
    //Choose random integer number (rounded to nearest integer) between 0 and passwordCharacters.length-1 (remember length is normal.. array starts at 0, not 1)
    randomCharacterNum = Math.round(Math.random() * ((passwordCharacters.length - 1) - 0));


    //Pick random letter from passwordCharacters using randomCharacterNum from above and add it to passwordResult
    passwordResult = passwordResult.concat(passwordCharacters.charAt(randomCharacterNum));
  }

  //End function and return value of passwordResult
  return passwordResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
