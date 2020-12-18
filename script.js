// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////
// SudoCode Below (The Game Plan)
//////////////////////////////////////////////////////////
// 1. Create functions that generate a random Number, Symbol, lowerCase, and upperCase from charset
// 2. How to get results of fuctions that create the random things
// 3. Create a prompt and series of Comfirms from generate button click to ask for:
//     - length (prompt)
//     -if length is 8> or = 128  then alert ("needs to be more 8 or more characters or no greater than 129")
//     -length (prompt)
//     -if length is is within param then confirm characters
//     -confirm Number
//     -confirm Symbol
//     -confirm upperCase
//     -confirm lowerCase
//     -check if at least 1 charset is chosen if false then Alert()
//     3.1 -ruturn results from confirms to see what we need to build password
//     3.4 build and array/ function to put it together
// 4. document.print results into generate text textarea!
// 5. done... super easy

////////////////////////////////////////////////////////////
// Generator code functions
///////////////////////////////////////////////////////////

//// my own fucntion. Pulling from the ASCII Character Set
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
///testing math.random to the cosole. math floor for whole numbers
// Math.random() generates a random decimal less than 1.0
// Math.random() * 10 generates a random decimal from 0 to a value less than 10
// * 26 to get something from 0-25. corresponds with amount of letters to the alphabet when counting from zero
// + 97 because lower case alpha starts at 97 in the char set code
/// console log example of a value of 97+ that relates to the char set code
// console.log(Math.floor(Math.random() * 26) + 97);
//console.log the retun value from function randomLower();
// console.log(randomLower());

function randomUpper() {
  // Same as above but the upper case alphabet starts at Char Code 65
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}




// console.log the retun value from function random...
console.log(randomLower());
console.log(randomUpper());
// console.log(randomNumber());
// console.log(randomSymbol());
