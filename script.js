// Assignment Code
// prompts for the number of characters the password needed, looking for a number and stores it in a variable called pwLength.
  var pwLength = Number(prompt("How many characters would you like your password to be?"));
// check pwLength and make sure its between 8 and 128 charachters, otherwise prompts to for required charactaristics. 
  while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) pwLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
// if all character lenghth is okay, prompt the following allowable characters.
  var capLetter = confirm("Would you like to use uppercase letters?");
  var lowLetter = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  while (!capLetter && !lowLetter && !numbers && !symbols) {
    // if non of the characteristics are selected, alert to sillict at least once and cycle through them again.
    alert("You must select at least one character type!");
    capLetter = confirm("Would you like to use uppercase letters?");
    lowLetter = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }


window.addEventListener('load', function () {
  writePassword();
});
//password function
  function writePassword() {
// password is stored in string
    var password = "";
    // select password ID
    var passwordText = document.querySelector("#password");
  
    var charSelected = {};
    // if charachter catigory selected, randomly store it in charselected variable
    if (capLetter) password += rando(charSelected.capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (lowLetter) password += rando(charSelected.lowLetter = "abcdefghijklmnopqrstuvwxyz");
    if (numbers) password += rando(charSelected.numbers = "1234567890");
    if (symbols) password += rando(charSelected.symbols = "!@#$%^&*(){}[]=<>/,.");
    // loops as many times as pwLength and selects characterselected and stores them into password variable.
    for (var i = password.length; i < pwLength; i++) password += rando(rando(charSelected).value);
    passwordText.value = password;
// replaces place holder with passowrd
    document.getElementById("password").value = randoSequence(password).join("");
  
  }
  // an added function for refresh button to refresh page incase diffrent characteristics are needed. 
function refresh() {
  window.location.reload("Refresh")
}
  
