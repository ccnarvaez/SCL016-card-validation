
 // Validacion, importacion desde el modulo  
 import validator from './validator.js';


//Dinamismo pagina de inicio- pagina validacion
 let buttonClickHomePage=document.getElementById('buttonHomePage');
 buttonClickHomePage.addEventListener('click', move1);
 
 function move1(){
     document.getElementById('validation').style.display='block';
     document.getElementById('buttonHomePage').style.display='none';     
 }

//Almacenamiento de datos en variables

let buttonClick = document.getElementById('button');
buttonClick.addEventListener('click', savingNumber);

function savingNumber (){

    let creditCardNumber = document.getElementById('number').value; // Se guarda numero de tarjeta
    document.getElementById('number').value=validator.maskify(creditCardNumber);// Se sustituyen valores por '#' luego de que el usuario ingrese numero
    
    // Comprobaciones (eliminar al final)
    console.log(creditCardNumber);
    console.log(validator.maskify(creditCardNumber));
    console.log(validator.isValid(creditCardNumber));
    
    //b. Mensajes de error por numeros no validos
    while (creditCardNumber ==0||creditCardNumber ==null||creditCardNumber.length<16) {
        alert("Por favor ingresa numero valido");
        break;
    } 
    
   
    
}


          


 