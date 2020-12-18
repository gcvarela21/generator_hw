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
// SudoCode Below
//////////////////////////////////////////////////////////
// 1. Create functions that generate a random Number, Symbol, lowerCase, and upperCase
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
