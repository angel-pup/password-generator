// Assignment code here
// Initialize constant arrays, for picking characters later on
const upperAlpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
// const upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const lowerAlpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const numbers = [...Array(10)].map((_, i) => i);
const symbols = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
// Get references to the #generate element - KU Code (moved up to be with other constants)
const generateBtn = document.querySelector("#generate");

/**
 * For picking a random item from a passed in array
 * @param _ passed in array
 * @returns {*} returns a random value from the array
 */
function chooseRandom(_) {
  return _[Math.floor(Math.random() * _.length)];
}

/**
 * Prompts user for length of password and the types of characters they wish to include in the password
 * @returns {string} returns randomly generated password
 */
function generatePassword() {
  // Declare local variables, initialize most
  let invalid = true;
  let passLength;
  let options = [];
  let alertMessage;
  let password = "";

  // Prompt user for length of password
  passLength = prompt("Password length?\n[Must be anywhere from 8 to 128 characters long].\n\n");

  // Prepare alert message if password length is invalid
  isNaN(passLength) || passLength < 8 || passLength > 128
      ? alertMessage = "Please input a valid number."
      : invalid = false;

  // Do not prompt user further unless prior conditions are met
  if (!invalid) {
    // Prompt user for types of characters they wish to use, log which characters go unused
    confirm("Press OK to use UPPERCASE letters.") ? options.push(0) : console.log("No UPPERCASE letters.");
    confirm("Press OK to use lowercase letters.") ? options.push(1) : console.log("No lowercase letters.");
    confirm("Press OK to use Numb3rs.") ? options.push(2) : console.log("No Numb3rs.");
    confirm("Press OK to use $ymbols.") ? options.push(3) : console.log("No $ymbols.");

    // Ensure at least one character type has been chosen, prepare alert if not
    if (options.length !== 0) {
      // Pick characters until password length condition is satisfied
      while(passLength--) {
        // Choose type at random, then choose character of that type at random
        switch (chooseRandom(options)) {
          case 0:
            password += chooseRandom(upperAlpha);
            break;
          case 1:
            password += chooseRandom(lowerAlpha);
            break;
          case 2:
            password += chooseRandom(numbers);
            break;
          case 3:
            password += chooseRandom(symbols);
            break;
          default:
            // Do nothing; Code execution should never reach here
                throw new Error("Code execution did, in fact, reach here.");
        }
      }
      // Return generated password
      return password;
    } else {
      alertMessage = "Please choose at least one kind of character of which to generate the password with."
    }
  }
  // Will reach alert if password conditions aren't met, returns appropriate alert message
  alert(alertMessage);
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);