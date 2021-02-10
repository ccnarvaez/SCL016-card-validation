
 // Validacion, importacion desde el modulo  
 import validator from './validator.js';

 console.log(validator);
 
//0. Dinamismo pagina de inicio- pagina validacion
 let buttonClickHomePage=document.getElementById('buttonHomePage');
 buttonClickHomePage.addEventListener('click', move);
 
 function move(){
     document.getElementById('validation').style.display='block';
     document.getElementById('buttonHomePage').style.display='none';
 }


//a. Almacenamiento de datos en variables

let buttonClick=document.getElementById('button');
buttonClick.addEventListener('click', oneFunction);
function oneFunction(){
    let cardNumber=document.getElementById('number').value;
    return cardNumber;

}

//b. Mensajes de error por numeros no validos
while (cardNumber==0||cardNumber==null) {
    alert("Por favor ingresa numero valido");
    break;
}
//c. Llamar funcion validacion

//d. ocultar ultimos 4 digitos

// e. mensaje validacion ok u validacion erronea
