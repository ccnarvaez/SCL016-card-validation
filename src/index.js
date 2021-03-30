
 // Import from module  
 import validator from './validator.js';

//Dynamism: home page and validation page
const homePageButton=document.getElementById('homePageButton');
 homePageButton.addEventListener('click', move1);
 
 function move1(){
     document.getElementById('validation').style.display='block';
     document.getElementById('homePageButton').style.display='none';     
 }

//Stored credit card number using variables
const buttonClick = document.getElementById('button');
buttonClick.addEventListener('click', savingNumber);

function savingNumber (){
    //Events what user start clicking "validar" button
    // credit  card number variable
    const creditCardNumber = document.getElementById('number').value; 
    // Starting Maskify () function
    document.getElementById('number').value=validator.maskify(creditCardNumber); 
    // Showing error message 
    const errorMessage=document.getElementById('errorMessage'); 
    // Showing isValid () function results 
    const validationMessage=document.getElementById('validationSection'); 
    
    //Error message: non valid number
    while (creditCardNumber ==0||creditCardNumber ==null) {
        errorMessage.textContent="Por favor ingresa número válido";
        break;
    } 
    //isValid () messages
    validator.isValid(creditCardNumber)===true?
        validationMessage.textContent="Su tarjeta es valida":
        validationMessage.textContent="Su tarjeta no  es valida"; 
}



     
    
    


          


 