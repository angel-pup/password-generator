  // Assignment code here
  const upperAlpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
  const lowerAlpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const numbers = [...Array(10)].map((_, i) => i);
  const symbols = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
  console.log(upperAlpha, lowerAlpha, numbers, symbols);

  function generatePassword() {
    let invalid = true;
    let passLength;
    let options;
    let alertMessage;
    let password = "";

    while(invalid) {

      alertMessage = "";
      options = [];

      passLength = prompt("Length of password?");

      if (isNaN(passLength)) {
        alertMessage += "Password length given is not a number.\n";
      } else if (passLength < 8 || passLength > 128) {
        alertMessage += "Password length must be between 7 and 129 characters long.\n";
      } else {
        invalid = false;
      }

      confirm("Use UPPERCASE letters?") ? options.push(0) : console.log("No UPPERCASE characters.");
      confirm("Use lowercase letters?") ? options.push(1) : console.log("No lowercase letters.");
      confirm("Use Numb3rs?") ? options.push(2) : console.log("No Numb3rs.");
      confirm("Use $ymbols?") ? options.push(3) : console.log("No $ymbols.");

      if (options.length !== 0) {
        for (let i = 0; i < passLength; i++) {

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
              console.error("Switch broke from withing password generation function");
          }
        }

        return password;

      } else {
        invalid = true;
        alertMessage += "Please choose at least one kind of character of which to generate the password.";
      }

      alert(alertMessage);

    }
  }

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);