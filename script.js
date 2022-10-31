// - Create variable arrays for each character set (A, a, 0-9, !)
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialArr = ['!', '@', '#', '$', '*', '%']

function generatePassword() {
// - Create prompt for password length - Create var that changed selection 
// into number type
var passwordLength = parseInt(prompt("Please select a apssword length between 8 and 128 characters."), 10)

if (passwordLength < 8 || passwordLength > 128) {
  alert("Please make sure selection is between 8 and 128 characters!")
  return "ERROR"
} else {


// - Create if/else statement for when length is either < 8 or > 128

// - Create confirmations for each charcter set (A, a, 0-9, !)
var hasLower = confirm("Would you like lowercase letters in your password? (a)")
var hasUpper = confirm("Would you like uppercase letters in your password? (A)")
var hasNumbers = confirm("Would you like numbers in your password? (0-9)")
var hasSpecial = confirm("Would you like special characters in your password? (!, @, etc.)")

if (!hasLower && !hasUpper && !hasNumbers && !hasSpecial) {
  alert ("You must select at least one character type!")
  return "ERROR"
} else {
// - Create if/else statement for when no charcters are selected

// - Create empty variable for selected charcter sets to go in (object)
var usersPasswordChoices = {
  passwordLength: passwordLength,
  hasLower: lowerCaseArr,
  hasUpper: upperCaseArr,
  hasNumbers: numbersArr,
  hasSpecial: specialArr
}
return usersPasswordChoices;
}

// utility function to get random element from array
function getRandomValueFromArray(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex]
  return randomElement
}

function generateUserPassword() {
// - Create true/false confirms for each character set, if true, throw array
// into empty variable 
// - Create empty variable for final password
// - Create for loop where i=0, i < password length, i++
// - Create random array variable within for loop, use math thingy, * wanted characters length, creates randomized characters
// - Fill final password var with random character array
// - Send password to html
}

}
}


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
