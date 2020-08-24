//this will be defined one the user choses his answer
let userChoice="";
let userChoice2="";
let userChoice3="";
let userChoice4="";
//the length has to be zero and then added to the users length choice
let length = 0;
//values for password
let valueNum= "0123456789";
let valueCap= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let valueLow= "abcdefghijklmnopqrstuvwxyz";
let valueSpecial= "!@#$%^&*()_+";
//password will always start blank
let valuePass="";
//this will be the randomized version of the password with the chosen length
let pwd = "";

//function for capitol letters
function cap(){
    userChoice = confirm("Would you like Uppercase letters in your password? Press 'Okay' for yes and 'Cancel' for no");
    
         if ( userChoice === true){
             valuePass=valuePass+valueCap;
             if ( userChoice === false){
            valuePass=valuePass+"";            
            
         }
    }
}
//function for lower case
function low(){
    userChoice2 = confirm("Would you like lowercase letters in your password? Press 'Okay' for yes and 'Cancel' for no");
    
         if ( userChoice2 === true){
             valuePass=valuePass+valueLow;
             if ( userChoice2 === false){
                valuePass=valuePass+"";        
            
        }
    }
}

//function for number
function num(){
    userChoice3 = confirm("Would you like numbers in your password? Press 'Okay' for yes and 'Cancel' for no");
    
    if ( userChoice3 === true){
        valuePass=valuePass+valueNum;
            if ( userChoice3 === false){
                valuePass=valuePass+"";
            
        }
        
        
    }
}

//function for special characters
function special(){
    userChoice4 = confirm("Would you like special characters in your password? Press 'Okay' for yes and 'Cancel' for no");
    
        if ( userChoice4 === true){
        valuePass=valuePass+valueSpecial;
         if ( userChoice4 === false){
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
//this is a loop that will randomize the password as long as it the length size chosen length
            for (var i = 0; i < length; i++){
                pwd += valuePass.charAt(Math.floor(Math.random()* Math.floor(valuePass.length )));
            
               
            }
            //displays the  password in the text box
            document.querySelector("#password").value = pwd;
           
        console.log(pwd); 


}
}

//function to relaod page when clear is hit
function refresh(){
            
setTimeout(function(){
    
    window.location.reload(1);
 }, 0);
 
}

