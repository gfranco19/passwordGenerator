let userChoice="";
let userChoice2="";
let userChoice3="";
let userChoice4="";

let length = 0;
//values for password
let valueNum= "0123456789";
let valueCap= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let valueLow= "abcdefghijklmnopqrstuvwxyz";
let valueSpecial= "!@#$%^&*()_+";
//password will always start blank
let valuePass="";
let pwd ="";

//function for capitol letters
function cap(){
    userChoice = prompt("Would you like Uppercase letters in your password? Enter 'y' for yes and 'n' for no");
    userChoice= userChoice.toLocaleLowerCase();
         if ( userChoice === "y"){
             valuePass=valuePass+valueCap;
        if ( userChoice === "n"){
            valuePass=valuePass+"";
        }
}
}
//function for lower case
function low(){
    userChoice2 = prompt("Would you like lowercase letters in your password? Enter 'y' for yes and 'n' for no");
    userChoice2= userChoice2.toLocaleLowerCase();
         if ( userChoice2 === "y"){
             valuePass=valuePass+valueLow;
             if ( userChoice2 === "n"){
                valuePass=valuePass+"";
            }
}
}
//function for number
function num(){
    userChoice3 = prompt("Would you like numbers in your password? Enter 'y' for yes and 'n' for no");
    userChoice3=userChoice3.toLocaleLowerCase();
    if ( userChoice3 === "y"){
        valuePass=valuePass+valueNum;
        if ( userChoice3 === "n"){
            valuePass=valuePass+"";
        }
}
}

//function for special characters
function special(){
userChoice4 = prompt("Would you like special characters in your password? Enter 'y' for yes and 'n' for no");
userChoice4= userChoice4.toLocaleLowerCase();
if ( userChoice4 === "y"){
   valuePass=valuePass+valueSpecial;
   if ( userChoice4 === "n"){
    valuePass=valuePass+"";
   }
}
}





//main funtion
function generate(){

    //if statement to promt when generater is activated
        length = prompt("Please enter a password length: ");
        if (length < 8 || length >128){
            alert("Please chose a length more than 8 and less than 128");
        }else{ cap();
                low();
                num();
                special();
                
                console.log(valuePass);
                console.log(length);

            for (var i = 0; i <= length; i++){
                pwd = pwd +valuePass.charAt(Math.floor(Math.random()* Math.floor(valuePass.length -1)));
               
            }
           
        }
        console.log(pwd);
    }
