
 // Import from module  
 import validator from './validator.js';


//Dynamism: home page and validation page
 let homePageButton=document.getElementById('homePageButton');
 homePageButton.addEventListener('click', move1);
 
 function move1(){
     document.getElementById('validation').style.display='block';
     document.getElementById('homePageButton').style.display='none';     
 }

//Storage credit card number using variables

let buttonClick = document.getElementById('button');
buttonClick.addEventListener('click', savingNumber);


function savingNumber (){

    //Events what user start clicking "validar" button
   let creditCardNumber = document.getElementById('number').value; // credit  card number variable
    document.getElementById('number').value=validator.maskify(creditCardNumber); // Starting Maskify () function
    let validationMessage=document.getElementById('validationSection'); // Showing isValid () function results 
    
    //Error message when user write a non valid number
    while (creditCardNumber ==0||creditCardNumber ==null) {
        alert("Por favor ingresa numero valido");
        break;
    } 

    //isValid () messages

    if(validator.isValid(creditCardNumber)===true){
      validationMessage.textContent="Su tarjeta es valida";
    }

    else{ validationMessage.textContent="Su tarjeta no  es valida";}
 
       
   
}// This is function curly bracket 



     
    
    


          


 