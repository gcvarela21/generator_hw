/////////////////////////////////////////////////////////////////
// Provided Assignment Code
/////////////////////////////////////////////////////////////////
var generateBtn = document.querySelector("#generate");
var charResults = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", askLength);

//////////////////////////////////////////////////////////
// Gloria Varela's SudoCode Below (The Game Plan)
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
//  Gloria Varela's Generator code functions (Step 3)
///////////////////////////////////////////////////////////
function askLength() {
  var length = prompt("How many characters long does your password have to be?", " ");

  if (length > 7 && length < 129) {
    askUpper();
    return (length);
  } else {
      alert("Please choose a numerical password length that is not less tha 8 or greater than 128 characters.");
      askLength();
  }
}
/// askLength has been tested and confirmed
// console.log(askLength());
///////////////////////////////////////////////////////////////////////////////
function askUpper() {
  charResults.pop();
  charResults.pop();
  charResults.pop();
  charResults.pop();
  var askUpCase = confirm("Will your password require Upper Case Letters?");

  if (askUpCase == true) {
    charResults.push("true");
    askLower();

    // return (true);

  } else {
    charResults.push("false");
    askLower();

    // return (false);

  }
}
//// askUpper(); has been tested and confirmed
// console.log(askUpper());
/////////////////////////////////////////////////////////////////
function askLower() {
  var askLowCase = confirm("Will your password require lower case letters?");

  if (askLowCase == true) {
    charResults.push("true");
    askNumber();
    // return (true);
  } else {
    charResults.push("false");
    askNumber();
        // return (false);
  }

}
/// askLower(); has been tested.. its awesome
//console.log(askLower());
/////////////////////////////////////////////////////////////////////
function askNumber() {
  var askNum = confirm("Will your password require any numbers?");

  if (askNum == true) {
    charResults.push("true");
    askSymbol();
    // return (true);
  } else {
    charResults.push("false");
    askSymbol();
    // return (false);
  }
}
// console.log(askNumber());
//////////////////////////////////////////////////////
function askSymbol() {
  var askSym = confirm("Will your password need and symbols or special characters?");

  if (askSym == true) {
    charResults.push("true");
    checkCharacters();
        // return (true);
  } else {
    charResults.push("false");
    checkCharacters();
        // return (false);
  }
}
// console.log(askSymbol());
//////////////////////////////////////////////////
//// Step 3.1 check for dersired character types
///////////////////////////////////////////////////



function checkCharacters() {
  alert("Double checking you Character Selections.");
  console.log(charResults);
  if (charResults[0] == "false" && charResults[1] == "false" && charResults[2] == "false" && charResults[3] == "false") {
      alert("Please choose ('click' OK) for at least one character type.");
      askUpper();
  } else {
      alert("Looks good. Let's do this!");
  }
}

////////////// conditional staement
// crea





////////////////////////////////////////////////////////////
//  Gloria Varela's Generator code functions (Step 1)
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

function randomNumber() {
  // Same as randomLower and randomUpper but the there are only 10 characters from 0-9
  // numbers start at Char Code 48
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  // using const as a replacement for var or let because it's value does not change
  // symbols is equal to an array of symbols inside the single quotes
  // symbols[]; returns the character value that corresponds with the generated numbers position
  const symbols = '!@#$%^&*_+=-(){}[]<>';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

////////////////////////////////////////////////////////////
//  Gloria Varela's Generator code functions (Step 2)
///////////////////////////////////////////////////////////
// console.log the retun value from function random...()
// console.log(randomLower());
// console.log(randomUpper());
// console.log(randomNumber());
// console.log(randomSymbol());
