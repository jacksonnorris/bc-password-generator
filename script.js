// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let ucString = 'ABCDEFGHIJKLMNOPQRTUVWXYZ';
let lcString = 'abcdefghijklmnopqrstuvwxyz';
let numString = '1234567890';
let symString = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  let totalString =''
  let uppercaseChecked = document.getElementById("uppercaseVal").checked;
  let lowercaseChecked = document.getElementById("lowercaseVal").checked;
  let numbersChecked = document.getElementById("numbersVal").checked;
  let symbolsChecked = document.getElementById("symbolsVal").checked;
  if (uppercaseChecked | lowercaseChecked | numbersChecked | symbolsChecked) {
    document.querySelector(".errorWarn").style.display = "none";
    if (uppercaseChecked) totalString += ucString;
    if (lowercaseChecked) totalString += lcString;
    if (numbersChecked) totalString += numString;
    if (symbolsChecked) totalString += symString;
    var generatedPassword = randomString(totalString, 16);
    return verifyPassword(uppercaseChecked, lowercaseChecked, numbersChecked, symbolsChecked, generatedPassword, 16);
  }
  else {
    document.querySelector(".errorWarn").style.display = "block";
    return '';
}
}
function randomString (str, len) {
  let myPassword = ''
  let totalLen = str.length;
  for (let i = 0; i < len; i++) {
    myPassword += str.charAt(Math.floor(Math.random()*totalLen));
  }
  console.log(myPassword);
  return myPassword;
}
function verifyPassword (uc, lc, num, sym, str, len) {
  if (uc) {
    var ucRegexp = /[A-Z]/g;
    if (str.match(ucRegexp) == null) { randomString (uc,lc,num,sym,str,len) }
  }
  return str;
}