
 // Validacion, importacion desde el modulo  
 import validator from './validator.js';

 console.log('ENTRO');
 console.log(validator.maskify(1234567891234567));
 
//0. Dinamismo pagina de inicio- pagina validacion
 let buttonClickHomePage=document.getElementById('buttonHomePage');
 buttonClickHomePage.addEventListener('click', move);
 
 function move(){
     document.getElementById('validation').style.display='block';
     document.getElementById('buttonHomePage').style.display='none';
 }


//a. Almacenamiento de datos en variables

let buttonClick = document.getElementById('button');
buttonClick.addEventListener('click', savingNumber);

function savingNumber (){

    let creditCardNumber = document.getElementById('number').value;
    console.log(creditCardNumber);

    //b. Mensajes de error por numeros no validos
    while (creditCardNumber ==0||creditCardNumber ==null||creditCardNumber.length<16) {
    alert("Por favor ingresa numero valido");
    break;
    } 

}



//d. ocultar ultimos 4 digitos

// e. mensaje validacion ok u validacion erronea
