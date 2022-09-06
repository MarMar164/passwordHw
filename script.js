// Assignment Code
var generateBtn = document.querySelector("#generate");

let upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ["@", "#", "$", "%", "<", "^", "<"];
let passwordValue = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function printRadio() {

}

function generatePassword() {

  if (document.querySelector("#upper").checked) {
    passwordValue = passwordValue.concat(upperCaseAlphabet);
  }

  if (document.querySelector("#lower").checked) {
    passwordValue = passwordValue.concat(lowerCaseAlphabet);
  }
  
  if (document.querySelector("#numbe").checked) {
    passwordValue = passwordValue.concat(numbers);
  }
  
  if (document.querySelector("#special").checked) {
    passwordValue =  passwordValue.concat(specialCharacters);
  }
 console.log(passwordValue);
  let password = "";
  
  for (let i = 0; i < document.querySelector("#num").value; i++) {
    let randomNumber = Math.floor(Math.random() * passwordValue.length);
    
    
    console.log(randomNumber);
    let randomLetter = passwordValue[randomNumber];
    console.log(randomLetter);
     password += randomLetter;
  }

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 
