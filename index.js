const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5"
, "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",
")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
"?","/"];



let btnGenerate = document.getElementById("btn_generate_password");
let passwordOne = document.querySelector("#password_1");
let passwordTwo = document.querySelector("#password_2");
let passwordLength = document.getElementById("password_length_number");


function generatePasswords(){
    passwordOne.textContent = makeRandomString(passwordLength.value, generateCharacterSet());
    passwordTwo.textContent = makeRandomString(passwordLength.value);
}
function generateCharacterSet(){
    let characterSet = ["a","b","c"];



    return characterSet;
}

function makeRandomString(length = 15, passwordSymbols = characters){
    let randomString = "";
        for(let i=0; i<length; i++){
            randomString += passwordSymbols[Math.floor(Math.random()*passwordSymbols.length)];
        }
    return randomString;
}

