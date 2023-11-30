var user = [];
var charLength = [];
var speChar = ['!','@','#','$','%','^','&','*','(',')','~','_','+','-','=','[',']','{','}',':',';','"','<','>','?','/'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var abcd = myFunction();
  var passwordText = document.querySelector("#password");

  //This is to validate the user requirements.
  if (myFunction){
    var password = generatePassword();
    passwordText.value = password;
  }
  else{
    passwordText.value = "Try Again";
  }
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

// Function for password generation.
function generatePassword() {
  var password = '';
  for(var i = 0; i < charLength; i++) {
    var index = Math.floor(Math.random() * user.length);
    var password = password + user[index];
  }
  return password;
}

//Function for collecting requirements from user.
function myFunction(){
  user = [];
  charLength = prompt("How many characters must be in the password?(must be between 8 and 128)");

  if (charLength < 8 || charLength > 128){
    alert("Type a number between 8 and 128");
    return false;
  }

  if(confirm("Do you like special characters in the password?")){
    user = user.concat(speChar);
  }

  if(confirm("Do you like numbers in the password?")){
    user = user.concat(number);
  }

  if(confirm("Do you like lowercase letters in the password?")){
    user = user.concat(lowerCase);
  }

  if(confirm("Do you like uppercase letters in the password?")){
    user = user.concat(upperCase);
  }
  return true;
}
