  // Assignment code here

  // Initialize constant arrays, for picking characters later on
  const upperAlpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
  const lowerAlpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const numbers = [...Array(10)].map((_, i) => i);
  const symbols = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

  /**
   * Prompts user for length of password and the types of characters they wish to include in the password
   * @returns {string} returns randomly generated password
   */
  function generatePassword() {
    // Declare local variables, initialize most
    let invalid = true;
    let passLength;
    let options = [];
    let alertMessage = "";
    let password = "";


    // Prompt user for length of password
    passLength = prompt("Length of password?");

    // Prepare alert message if password length is invalid
    isNaN(passLength) || passLength < 8 || passLength > 128 ?
        alertMessage = "Password length must be a valid number between 7 and 129." : invalid = false;

    // Do not prompt user further unless prior conditions are met
    if (!invalid) {

      // Prompt user for types of characters they wish to use, log which characters go unused
      confirm("Use UPPERCASE letters?") ? options.push(0) : console.log("No UPPERCASE characters.");
      confirm("Use lowercase letters?") ? options.push(1) : console.log("No lowercase letters.");
      confirm("Use Numb3rs?") ? options.push(2) : console.log("No Numb3rs.");
      confirm("Use $ymbols?") ? options.push(3) : console.log("No $ymbols.");

      // Ensure at least one character type has been chosen, prepare alert if not
      if (options.length !== 0) {
        // Pick characters until password length condition is satisfied
        for (let i = 0; i < passLength; i++) {

          // Choose character type at random, then choose character of that type at random
          switch (options[Math.floor(Math.random() * options.length)]) {
            case 0:
              password += upperAlpha[Math.floor(Math.random() * upperAlpha.length)];
              break;
            case 1:
              password += lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)];
              break;
            case 2:
              password += numbers[Math.floor(Math.random() * numbers.length)];
              break;
            case 3:
              password += symbols[Math.floor(Math.random() * symbols.length)];
              break;
            default:
              // Do nothing; Code execution should never reach here

          }

        }
        // Return generated password
        return password;

      } else {
        alertMessage += "Please choose at least one kind of character of which to generate the password with."

      }

    }
    // Will reach alert if password conditions aren't met, returns appropriate alert message
    alert(alertMessage);

  }

  // Get references to the #generate element
  const generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);