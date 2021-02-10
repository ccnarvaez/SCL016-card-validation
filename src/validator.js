const validator = {

  // Declaro funcion para enmascarar considerando que estoy dentro de un objeto
  maskify: (creditCardNumber)=>{

  let cardMaskify='';
   


  //Se desea sustituir el valor de los digitos de la tarjeta por '#', a excepcion de los ultimos 4
  
  for (let i=0; i< creditCardNumber.length-4; i++){

    // Si la posicion i es menor a la posicion menos los ultimos 4, entonces se debe sustituir el valor por #
      if (i<creditCardNumber.length-4){
        cardMaskify[i]='#';
      }

    // Cuando se trata de los ultimos numeros, se debe igualar al valor almacenado en creditCardNumber, en la posicion indicada
      else{
        cardMaskify[i]=creditCardNumber[i];
      }
      
  }
  return cardMaskify;
 }
};

export default validator;