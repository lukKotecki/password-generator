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

let smallLetters = document.getElementById("small-letters");
let capitalLetters = document.getElementById("capital-letters");
let numbers = document.getElementById("numbers");
let specialCharacters = document.getElementById("special-characters");



function generatePasswords(){

    if(!smallLetters.checked && !capitalLetters.checked && !numbers.checked && !specialCharacters.checked){
        console.log(smallLetters.checked);
        console.log(capitalLetters.checked);
        console.log(numbers.checked);
        console.log(specialCharacters.checked);
        passwordOne.textContent = "admin123"
        passwordTwo.textContent = "mojehaslo1"
    }else{

        console.log(characters.slice(0,3));
        passwordOne.textContent = makeRandomString(passwordLength.value, generateCharacterSet());
        passwordTwo.textContent = makeRandomString(passwordLength.value, generateCharacterSet());
    }
}
function generateCharacterSet(){
    if(smallLetters.checked && capitalLetters.checked && numbers.checked && specialCharacters.checked){
        return characters;
    }
    let characterSet = [];

    if(capitalLetters.checked){
        characterSet = characterSet.concat(characters.slice(0,26))
    }
    if(smallLetters.checked){
        characterSet = characterSet.concat(characters.slice(26,52));
    }
    if(numbers.checked){
        characterSet = characterSet.concat(characters.slice(52, 62));
    }
    if(specialCharacters.checked){
        characterSet = characterSet.concat(characters.slice(62, 91));
    }



    console.log(characterSet);


    return characterSet;
}

function makeRandomString(length = 15, passwordSymbols = characters){
    let randomString = "";
        for(let i=0; i<length; i++){
            randomString += passwordSymbols[Math.floor(Math.random()*passwordSymbols.length)];
        }
    return randomString;
}


function copyContent(director){
    console.log("copyContent "+director);

    if(director ==="pas1"){
        navigator.clipboard.writeText(passwordOne.textContent);
    }else if(director ==="pas2"){
        navigator.clipboard.writeText(passwordTwo.textContent);
    }

}