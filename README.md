# Generating a Password

Unit 03 JavaScript: The Joys of Arrays and the Many Many functions(); 

This generator makes a password stronger, meaner, faster than ur fingers could type!
Using an HTML Template and some Starter JS Code I am left to my own devices to execute a Password of a minimun of 8 characters and maximun of 128 characters! But thats not all!
Requirements:

Here is a visual:

![Sample Page](https://gcvarela21.github.io/password_generator/varela.png)

* [This is Live Site on Git Hub until 12/22/20](https://gcvarela21.github.io/varela_portfolio/)
* [See all my repositories HERE](https://github.com/gcvarela21/)
* [If your reading this you are probably HERE](https://github.com/gcvarela21/password_generator/)
​

## **Built With**

* [HTML](https"//w3schools.com)
* [CSS](https"//w3schools.com)
* [JavaScript](https://getbootstrap.com/)
* [gitBash](https://git-scm.com/downloads)
* [gitHub](https"//gitHub.com)
* [Atom](https://atom.io/)

______________________________________________________________________________

### **Summary**

My brain likes to work in steps. Instead of creating a really-really-long if-else statement to go through the prompt and sucessive comfirms and alerts once the generate password button is selected, I opted for many functions that chained with if-else statements. Fucntions don't scare me. There are probably easiers ways to do this.
Lets take a loot at some code snippets.  
​__________________________________________________________________________________
​

#### **Code Snippet**

​
Like a series of dominoes this it all triggered with a push, or more of a "click".
An eventListener attached to the id of the button awaits to kick of the series of prompt and confirms with conditions that need to be met. Here is all the JS code I started with:

```
var generateBtn = document.querySelector("#generate");
var charResults = [];
var saveLength = [];
var l = randomLower();
var u = randomUpper();
var n = randomNumber();
var s = randomSymbol();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", askLength);
```

askLength is the function I created to start the first prompt
______________________________________________________________________________
​

​**Code Snippet**

saveLength.pop(); clears out the global array of saveLength so the users new input of password lenth can be pushed into the empty array for later Access. It works as a great reset tool to prevent errors if the browser doesn't get refreshed.

charResults.pop(); is also attactched to an empty global array that i have created to store the users selections of true or false from window confirm. A string of true or false is push()-ed into the array. The array is made visible with a consol.log();
​

```
function askLength() {

  saveLength.pop();
  var length = prompt("How many characters long does your password have to be?", " ");
      saveLength.push(length);
  if (length > 7 && length < 129) {
    askUpper();

  } else {
      alert("Please choose a numerical password length that is not less tha 8 or greater than 128 characters.");
      askLength();
  }
}

function askUpper() {

  charResults.pop();
  charResults.pop();
  charResults.pop();
  charResults.pop();

  var askUpCase = confirm("Will your password require Upper Case Letters?");

  if (askUpCase == true) {
    charResults.push("true");
    askLower();
  } else {
    charResults.push("false");
    askLower();
  }
}

```

______________________________________________________________________________

​**Code Snippet**

[Pulling from the ASCII Character Set](https://www.w3schools.com/html/html_charset.asp) with the help of some online resources and testing with the console.log(); I was able to piece this together to give me a more clean looking way to randomize.

Testing began with logging some math.random to the console and throwing in some good ol Math.floor to get whole numbers. I turns out that Math.random() generates a random decimal less than 1.0.

I moved the decimal over to whole numbers Math.random() * 10, but it still generates a random decimal from 0 to a value less than 10. Math.floor is a life saver to get those whole numbers rounded down.

To get these functions to return what i wanted i used both Math.random and Math.floor to start. I that * 26 to get something from 0-25. corresponds with amount of letters to the alphabet when counting from zero.

In the first function shown a + 97 is there because lower case alphabet starts at postition 97 in the Character Set. 97 would be our starting point and what ever random mumber that is generated would reference further down the Character Set index.

Same as above but the upper case alphabet starts at Char Code 65, and the numbers start at index 46.

In the randomSymbols() I opted on using const as a replacement for var or let because it's value does not change. I created an array/string of symbols I would prefer to use or see and randomly selected a symbol with some more Math and index and some self referencing.

```
​function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}
function randomUpper() {
return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  const symbols = '!@#$%^&*_+=-(){}[]<>';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSymbol());

```

______________________________________________________________________________
​
​

### **Deployed Link**

* [See Live Site on Git Hub](https://gcvarela21.github.io/password_generator/)
​
​

### **Gloria C Varela**

* [Link to Portfolio Site](https://www.glo.digital)
* [Link to Github](https://github.com/gcvarela21)
* [Link to LinkedIn](https://www.linkedin.com/in/glovarela)
​
​
​______________________________________________________________________________
​

#### **License**

​
This project is licensed under the MIT License

#### **Some Reference Materials I collected on this Journey**

##### **HTML References**

* [The ASCII Character Set](https://www.w3schools.com/html/html_charset.asp)

##### **JavaScript Refrences**

* [Math.random()](https://www.w3schools.com/js/js_random.asp)
* [Math.floor()](https://www.w3schools.com/js/js_random.asp)
* [JavaScript String fromCharCode() Method](https://www.w3schools.com/jsref/jsref_fromcharcode.asp)
* [JavaScript return Statement](https://www.w3schools.com/jsref/jsref_return.asp)
* [JavaScript Array forEach() Method](https://www.w3schools.com/jsref/jsref_foreach.asp)

* [JavaScript Let](https://www.w3schools.com/js/js_let.asp)
* [JavaScript Const](https://www.w3schools.com/js/js_const.asp)

* [JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)
* [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)

* [JavaScript Popup Boxes](https://www.w3schools.com/js/js_popup.asp)
* [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

* [JavaScript Sorting Arrays](https://www.w3schools.com/js/js_array_sort.asp)
* [JavaScript String indexOf() Method](https://www.w3schools.com/jsref/jsref_indexof.asp)

##### **JS DOM References**

* [querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp)
* [addEventListener](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)

* [Textarea readOnly Property](https://www.w3schools.com/jsref/prop_textarea_readonly.asp)
* [Input Text placeholder Property](https://www.w3schools.com/jsref/prop_text_placeholder.asp)

##### **Window References**

* [Window prompt() Method](https://www.w3schools.com/jsref/met_win_prompt.asp)
* [Window confirm() Method](https://www.w3schools.com/jsref/met_win_confirm.asp)
