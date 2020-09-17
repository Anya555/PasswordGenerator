


var generate = document.getElementById("generate");
var specialChar = document.getElementById("special");
var numericChar = document.getElementById("numbers");
var lowercaseChar = document.getElementById("lowercase");
var uppercaseChar = document.getElementById("uppercase");
var characters = document.getElementById("password");
var btnCopy = document.getElementById("copy");


var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function generatePassword() {
 
   passLength = document.getElementById("customRange2").value;

  
   var characters = "";

  
  var optionsChecked = 0;

  if (specialChar.checked) {
    characters += special;
    optionsChecked++;
  }
  if (numericChar.checked) {
    characters += numbers;
    optionsChecked++;
  }
  if (lowercaseChar.checked) {
    characters += lowercase;
    optionsChecked++;
  }
  if (uppercaseChar.checked) {
    characters += uppercase;
    optionsChecked++;
  } 

  if(optionsChecked === 0) {
    alert("Please choose at least one character type");
  }

  var newPassword = "";


  for (var i = 0; i < passLength; i++) {
    newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }


  console.log("pw length: " + passLength);
  
  console.log(newPassword);

 
  var characters = document.getElementById("password");
  characters.value = newPassword;
  return newPassword;
}


generate.addEventListener("click", generatePassword);

btnCopy.onclick = function () {
  characters.select();
  document.execCommand("copy");
};

