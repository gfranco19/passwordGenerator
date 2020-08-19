//create length
function generate(){
    let useChoice=""
    let length = "0";
//values for password
    let valuesCap= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let valuesLow= "abcdefghijklmnopqrstuvwxyz";
    let valuesSpecial= "!@#$%^&*()_+"
    //password will always start blank
    let valuePass=[];
    //if statement to promt when generater is activateds
    for (var i =o; i<=length; i++){
        length = length + prompt("Please enter a password length: ");
        if (length < 8 || length >128){
            alert("Please chose a length more than 8 and less than 128");
        }else{
            prompt("Would you like Uppercase letters in your password?");
                if ( userChoice === "y")
            
        }

    }
}
    //loop to promt length
    //for (var i = 0; i <= length; i++){






















// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
