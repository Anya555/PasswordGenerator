
// grabbing id's of needed html tags for generating password

var generate = document.getElementById("generate");
var specialChar = document.getElementById("special");
var numericChar = document.getElementById("numbers");
var lowercaseChar = document.getElementById("lowercase");
var uppercaseChar = document.getElementById("uppercase");
var characters = document.getElementById("password");
var btnCopy = document.getElementById("copy");


// making variables for spacial characters that user is choosing from and assigning values to them
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// writing  a function for generating password
function generatePassword() {
  // making a variable wor password length and grabits it value by id from html
   passLength = document.getElementById("customRange2").value;

   // a local variable that groups all character types
   var characters = "";

  // checking if certain character type has been chosen by a user and concatinating a new value to that based on chosen character types
  if (specialChar.checked) {
    characters += special;
  }
  if (numericChar.checked) {
    characters += numbers;
  }
  if (lowercaseChar.checked) {
    characters += lowercase;
  }
  if (uppercaseChar.checked) {
    characters += uppercase;
  } 
  // alerting a user that at least one character type has to be chosen by making an alert
  else {
    alert("Please choose at least one character type");
  }
 
  // a local variable that has an empty value, that we use to add a new value once all prompts
  // have been answered by user and we looped through all selected character types
  var newPassword = "";

  // making a loop that will pick random characters (using Math.floor(Math.random()) from all character types selected by user 
  //referring to a certain password length selected by user
  for (var i = 0; i < passLength; i++) {
    newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // using console.log to check if a password length changes properly based on user selection
  console.log("pw length: " + passLength);
   // using console.log to check if  a password is being generated after user makes all selections
  console.log(newPassword);

  // calling a function 
  var characters = document.getElementById("password");
  characters.value = newPassword;
  return newPassword;
}

// adding an event listener to capture when  user clicks on generate button
generate.addEventListener("click", generatePassword);

// adding an onclick event to a copy to clipboard button, so when user cliks on a button, we perform select
// event to highlight generated password and perfom execCommand event to actually copy a password
btnCopy.onclick = function () {
  characters.select();
  document.execCommand("copy");
};

