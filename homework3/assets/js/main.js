
var generateBtn = document.querySelector("#generate");

var confirmSpchar = confirm("If you like your password to include special characters press 'ok'");
var confirmNum = confirm("If you like your password to iclude numbers press 'ok'");
var confirmLow = confirm("If you like your password to include lowercase characters press 'ok'");
var confirmUp = confirm("If you like your pasword to include uppercase characters press 'ok'");

function generatePassword() {
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numericChar = "0123456789";
  var lowecaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pswd = "";
  if (specialChar) {
    for (var i = 0; i >= 8 && i <= 128; i++) {
      pswd += pswd + specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    }
    return pswd;
  }
  else if (numericChar) {
    for (var i = 0; i >= 8 && i <= 128; i++) {
      pswd += pswd + numericChar.charAt(Math.floor(Math.random() * numericChar.length));
    }
    return pswd;
  }
  else if (lowecaseChar) {
    for (var i = 0; i >= 8 && i <= 128; i++) {
      pswd += pswd + lowercaseChar.charAt(Math.floor(Math.random() * lowercaseChar.length));
    }
    return pswd;
  }
  else if (uppercaseChar) {
    for (var i = 0; i >= 8 && i <= 128; i++) {
      pswd += pswd + uppercaseChar.charAt(Math.floor(Math.random() * uppercaseChar.length));
    }
    return pswd;
  }
  else {
    alert("please select at least one charachter type");
  }
  }

// console.log(generatePassword);

generate.addEventListener("click", generatePassword);
var generatePassword = function (event) {
  event.preventDefault();
}

copy.addEventListener("click", copyToClipboard);
var copyToClipboard = function (event) {
  event.preventDefault();
}
