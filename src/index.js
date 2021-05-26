
 // Import from module  
 import validator from './validator.js';

//Home page and validation page
const homePageButton=document.getElementById('homePageButton');
 homePageButton.addEventListener('click', () => {
     document.getElementById('validation').style.display='block';
     document.getElementById('homePagSection').innerHTML = '';
 });

//Credit card number saved in variables
const buttonClick = document.getElementById('button');
buttonClick.addEventListener('click', () => {
    //Events started clicking "validar" button
    // credit  card number variable
    const creditCardNumber = document.getElementById('number').value; 
    document.getElementById('number').value = validator.maskify(creditCardNumber); 
    const validationMessage = document.getElementById('validationSection'); 
    validationMessage.style.display ='block';
    const errorMessage=document.getElementById('errorMessage'); 
    
    //Error message: non valid number
    if(creditCardNumber ==0||creditCardNumber ==null) {
        errorMessage.textContent='Por favor ingresa número válido';   
    }
    setTimeout(() =>{
        errorMessage.textContent='';  
    }, 1500) 
    //isValid () messages
    validator.isValid(creditCardNumber)===true?
        validationMessage.textContent='Su tarjeta es valida':
        validationMessage.textContent='Su tarjeta no  es valida'; 
});





     
    
    


          


 