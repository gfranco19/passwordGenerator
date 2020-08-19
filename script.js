let userChoice="";
let userChoice2="";
let userChoice3="";
let userChoice4="";

let length = "0";
//values for password
let valueNum= "0123456789";
let valueCap= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let valueLow= "abcdefghijklmnopqrstuvwxyz";
let valueSpecial= "!@#$%^&*()_+";
//password will always start blank
let valuePass=[];

//function for capitol letters
function cap(){
    userChoice = prompt("Would you like Uppercase letters in your password? Enter 'y' for yes and 'n' for no");
    userChoice= userChoice.toLocaleLowerCase();
         if ( userChoice === "y"){
             valuePass[0]=valueCap;
        if ( userChoice === "n"){
            valuePass[0] ="";
        }
}
}
//function for lower case
function low(){
    userChoice2 = prompt("Would you like lowercase letters in your password? Enter 'y' for yes and 'n' for no");
    userChoice2= userChoice2.toLocaleLowerCase();
         if ( userChoice2 === "y"){
             valuePass[1]=valueLow;
             if ( userChoice2 === "n"){
                valuePass[1] ="";
            }
}
}
//function for number
function num(){
    userChoice3 = prompt("Would you like numbers in your password? Enter 'y' for yes and 'n' for no");
    userChoice3=userChoice3.toLocaleLowerCase();
    if ( userChoice3 === "y"){
        valuePass[2]=valueNum;
        if ( userChoice3 === "n"){
            valuePass[2] ="";
        }
}
}

//function for special characters
function special(){
userChoice4 = prompt("Would you like special characters in your password? Enter 'y' for yes and 'n' for no");
userChoice4= userChoice4.toLocaleLowerCase();
if ( userChoice4 === "y"){
   valuePass[3]=valueSpecial;
   if ( userChoice4 === "n"){
    valuePass[3]="";
   }
}
}





//main funtion
function generate(){

    //if statement to promt when generater is activated
        length = length + prompt("Please enter a password length: ");
        if (length < 8 || length >128){
            alert("Please chose a length more than 8 and less than 128");
        }else{ cap();
               
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
