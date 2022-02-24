// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthSlider = document.getElementById("lengthVal");
var lengthLabel = document.getElementById("sliderLabel");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let ucString = 'ABCDEFGHIJKLMNOPQRTUVWXYZ';
let lcString = 'abcdefghijklmnopqrstuvwxyz';
let numString = '1234567890';
let symString = '-!"#$%&\'()*+,.\/:;<=>?@[\]^_`{|}~';

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
lengthSlider.oninput = function() {
  lengthLabel.innerHTML = lengthSlider.value;
}

function generatePassword () {
  let totalString ='';
  let prependString ='';
  let uppercaseChecked = document.getElementById("uppercaseVal").checked;
  let lowercaseChecked = document.getElementById("lowercaseVal").checked;
  let numbersChecked = document.getElementById("numbersVal").checked;
  let symbolsChecked = document.getElementById("symbolsVal").checked;
  if (uppercaseChecked | lowercaseChecked | numbersChecked | symbolsChecked) {
    document.querySelector(".errorWarn").style.display = "none";
    if (uppercaseChecked)  { totalString += ucString; prependString += ucString.charAt(Math.floor(Math.random()*ucString.length)); }
    if (lowercaseChecked) { totalString += lcString; prependString += lcString.charAt(Math.floor(Math.random()*lcString.length)); }
    if (numbersChecked) { totalString += numString; prependString += numString.charAt(Math.floor(Math.random()*numString.length)); }
    if (symbolsChecked) { totalString += symString; prependString += symString.charAt(Math.floor(Math.random()*symString.length)); }
    var generatedPassword = randomString(totalString, lengthSlider.value, prependString);
    return verifyPassword(uppercaseChecked, lowercaseChecked, numbersChecked, symbolsChecked, generatedPassword, lengthSlider.value);
  }
  else {
    document.querySelector(".errorWarn").style.display = "block";
    return '';
}
}
function randomString (str, len, prependStr) {
  let myPassword = prependStr;
  let totalLen = str.length;
  for (let i = myPassword.length; i < len; i++) {
    myPassword += str.charAt(Math.floor(Math.random()*totalLen));
  }
  console.log(myPassword);
  return myPassword;
}
function verifyPassword (uc, lc, num, sym, str, len) {
  if (uc) {
    var ucRegexp = /[A-Z]/;
    if (str.match(ucRegexp) == null) { console.log("errorUc: " + str); randomString (str,len); }
  }
  if (lc) {
    var lcRegexp = /[a-z]/;
    if (str.match(lcRegexp) == null) { console.log("errorLc: " + str); randomString (str,len); }
  }
  if (num) {
    var numRegexp = /[0-9]/;
    if (str.match(numRegexp) == null) { console.log("errorNum: " + str); randomString (str,len); }
  }
  if (sym) {
    var symRegexp = /[-!"#$%&\'()*+,.\/:;<=>?@[\]^_`{|}~ ]/;
    if (str.match(symRegexp) == null) { console.log("errorSym: " + str); randomString (str,len); }
  }
  return str;
}