// Assignment Code
  // GIVEN I need a new, secure password
  // need a button or link to get a new password
  // need to show the password on the page

  var generateBtn = document.querySelector("#generate");

  var length = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }


window.addEventListener('load', function () {
  writePassword();
});
  // Write password to the #password input
      // WHEN I click the button to generate a password
    // THEN I am presented with a series of prompts for password criteria
       // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  function writePassword() {

    var password = "";
    var passwordText = document.querySelector("#password");
  
    var allowed = {};
    if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
    if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
    if (numbers) password += rando(allowed.numbers = "1234567890");
    if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

    for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);
    passwordText.value = password;

    document.getElementById("password").value = randoSequence(password).join("");
  
  }
  
  // ************************ function here *********************************
  // write a function called generatePassword which will have a series of prompts for user input
  
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  
  
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // We have to ask the user for how many characters they want in a password
  // we have to check to make sure it is between 8 and 128
  // otherwise, we tell user to fix their input.
  
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // confirm if they want lowercase
  // confirm if they want uppercase
  // confirm if they want numeric
  // confirm if they want special characters
  
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // we need to show an error if they gave us no characters to choose from
  
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // from all the characters chosen, choose one randomly and add it to our password X number of times
  // 
  
  // ************************ function ends here *********************************
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  