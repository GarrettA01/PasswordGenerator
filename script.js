// - Variable arrays for each character set (A, a, 0-9, !)
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialArr = ['!', '@', '#', '$', '*', '%']

function generatePassword() {
// Prompt for password length, if statement for if user chooses a number < 8 or > 128
var passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."), 10)

if (passwordLength < 8 || passwordLength > 128) {
  alert("Please make sure selection is between 8 and 128 characters!")
  return "ERROR"
} else {




// Confirmations for each character selection, if statement for if none are chosen
var hasLower = confirm("Would you like lowercase letters in your password? (a)")
var hasUpper = confirm("Would you like uppercase letters in your password? (A)")
var hasNumbers = confirm("Would you like numbers in your password? (0-9)")
var hasSpecial = confirm("Would you like special characters in your password? (!, @, etc.)")

if (!hasLower && !hasUpper && !hasNumbers && !hasSpecial) {
  alert ("You must select at least one character type!")
  return "ERROR"
} else {

// - Create empty variable for selected charcter sets to go in (object)
var usersPasswordChoices = []

if(hasLower){
  usersPasswordChoices = usersPasswordChoices.concat(lowerCaseArr);
}
if(hasUpper){
  usersPasswordChoices = usersPasswordChoices.concat(upperCaseArr);
}
if(hasNumbers){
  usersPasswordChoices = usersPasswordChoices.concat(numbersArr);
}
if(hasSpecial){
  usersPasswordChoices = usersPasswordChoices.concat(specialArr);
}


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
