// Prompt for password length
let passwordLength;
do {
  passwordLength = parseInt(prompt("Enter a password length between 8 and 128 characters"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
  } else {
    console.log("Password length is valid", passwordLength);
  }
} while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  
// Prompt for character types
let includelowerCaseLetters, includeupperCaseLetters, includenumericCharacters, includespecialCharacters;
do {
  includelowerCaseLetters = confirm("Include lowercase characters?");
  includeupperCaseLetters = confirm("Include uppercase characters?");
  includenumericCharacters = confirm("Include numeric characters?");
  includespecialCharacters = confirm("Include special characters?");
  
  if (!includelowerCaseLetters && !includeupperCaseLetters && !includenumericCharacters && !includespecialCharacters) {
    alert("You must select at least one character type.");
  }
} while (!includelowerCaseLetters && !includeupperCaseLetters && !includenumericCharacters && !includespecialCharacters);


// Character sets
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "1234567890";
var specialCharacters = "!@#$%^&*()-_=+[{]}\|;:',<.>/?";


// Write password to the input
function writePassword() {
 //Pass the user inputs to generatePassword
 var password = generatePassword(passwordLength, includelowerCaseLetters, includeupperCaseLetters, includenumericCharacters, includespecialCharacters);
 var passwordText = document.querySelector("#password");
 //Set passwordText textbox to value of password... which is the value returned from generatePassword function
 passwordText.value = password;
}

//GENERATE PASSWORD FUNCTION
//Function that takes in password length and types of characters using true/false for each type
function generatePassword(passwordLength, useLowerCaseLetters, useUpperCaseLetters, useNumericCharacters, useSpecialCharacters) {
 var passwordCharacters = "";
 var passwordResult = "";
 
 //Each if/then adds chosen character set to passwordCharacters if true
 if (useLowerCaseLetters) {
   passwordCharacters += lowerCaseLetters;
 }
 if (useUpperCaseLetters) {
   passwordCharacters += upperCaseLetters;
 }
 if (useNumericCharacters) {
   passwordCharacters += numericCharacters;
 }
 if (useSpecialCharacters) {
   passwordCharacters += specialCharacters;
 }
 

 //Loop from 0 to passwordLength
 for (let i = 0 ; i < passwordLength ; i++) {
   //Choose random integer number (rounded to nearest integer) between 0 and passwordCharacters.length-1 (remember length is normal.. array starts at 0, not 1)
   var randomCharacterNum = Math.floor(Math.random() * passwordCharacters.length);


   //Pick random letter from passwordCharacters using randomCharacterNum from above and add it to passwordResult
   passwordResult = passwordResult.concat(passwordCharacters.charAt(randomCharacterNum));
 }
 //End function and return value of passwordResult
 return passwordResult;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);