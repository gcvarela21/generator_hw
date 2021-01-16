// Global Variables

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", askLength);

var passwordLength = 0;
var passwordGeneratorList = [];
var password = "";

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function askLength() {

    var length = prompt("How many characters long does your password have to be?", " ");
        length = parseInt(length);
    if (length > 7 && length < 129) {
      passwordLength = length;
      askUpper();  
    } else {
        alert("Please choose a password length that is not less tha 8 or greater than 128 characters.");
        askLength();
    }
  }


function askUpper() {

  var askUpCase = confirm("Will your password require Upper Case Letters?");

  if (askUpCase == true) {   
    passwordGeneratorList.push(randomUpper);
    askLower();
  } else {    
    askLower();
  }
}

function askLower() {
  var askLowCase = confirm("Will your password require lower case letters?");

  if (askLowCase == true) {    
    passwordGeneratorList.push(randomLower);
    askNumber();
  } else {
    askNumber();
  }
}

function askNumber() {
  var askNum = confirm("Will your password require any numbers?");

  if (askNum == true) {
    passwordGeneratorList.push(randomNumber);
    askSymbol(); 
  } else {    
    askSymbol();  
  }
}


function askSymbol() {
  var askSym = confirm("Will your password need and symbols or special characters?");

  if (askSym == true) {    
    passwordGeneratorList.push(randomSymbol);
    checkCharacters();
  } else {    
    checkCharacters();
  }
}

function checkCharacters() {
  if (passwordGeneratorList.length > 0){
    generatePassword();
  } else {
    askLength();
    } 
}

function generatePassword() {
    for( var i = 0; i < passwordLength; i++){
      
      var randomFunction = passwordGeneratorList[Math.floor(Math.random() * passwordGeneratorList.length)]
      password+= randomFunction();
      
    }
    console.log(password);
    writePassword();
}



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

