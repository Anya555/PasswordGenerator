
var generate = document.getElementById("generate");
var passLength = document.getElementById("customRange2").value;
var specialChar = document.getElementById("special");
var numericChar = document.getElementById("numbers");
var lowercaseChar = document.getElementById("lowercase");
var uppercaseChar = document.getElementById("uppercase");

var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charType = special + numbers + lowercase + uppercase;
var pswd; 

function generatePassword() {
 
   pswd = "";

  if (specialChar.checked) {
    pswd += special;
  }
  if (numericChar.checked) {
    pswd += numbers;
  }
  if (lowercaseChar.checked) {
    pswd += lowercase;
  }
  if (uppercaseChar.checked) {
    pswd += uppercase;
  } 
  else {
    alert("Please choose at least one charcter type");
  }

  for (var i = 0; i < passLength; i++) {
    pswd += charType.charatAt(Math.floor(Math.random() * charType.length));
  }
  return pswd;
}


generate.addEventListener("click", generatePassword);
var generatePassword = function (event) {
  event.preventDefault();
}

var input = document.getElementById("password");
var btnCopy = document.getElementById("copy");

btnCopy.onclick = function () {
  input.select();
  document.execCommand("copy");
};

