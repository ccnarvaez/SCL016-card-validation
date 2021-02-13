const validator = {

  //1. Validacion tarjeta de credito

  isValid:(creditCardNumber)=>{

    let creditCardStep1= 0;
    let finalAdittion=0;
    
    for (let i=0; i<=creditCardNumber.length-1; i++){

        // tratamiento numeros pares
        if (i%2==0){
          creditCardStep1+=creditCardNumber[i]*2
        }

        // tratamiento impares

        else{
          creditCardStep1+=creditCardNumber[i];
        }
    }

  //Hacer suma global de los digitos internos

    for (let j=0; j<=creditCardStep1.length-1; j++){

        finalAdittion+=parseInt(creditCardStep1.charAt(j));
    }

  //Condicion de validez o invalidez

   finalAdittion%10==0?alert('Tarjeta valida'):alert('Tarjeta no valida');

  return finalAdittion;
  },


  // 2. Maskify
  maskify: (creditCardNumber)=>{

  //Variable para contener nuevo numero de tarjeta enmascarado
  let cardMaskify='';
  
  //Se desea sustituir el valor de los digitos de la tarjeta por '#', a excepcion de los ultimos 4
  
  for (let i=0; i< creditCardNumber.length; i++){

    // Si la posicion i es menor a la posicion menos los ultimos 4, entonces se debe sustituir el valor por #
      if (i<creditCardNumber.length-4){
        cardMaskify+='#';
        
      }

    // Cuando se trata de los ultimos numeros, se debe igualar al valor almacenado en creditCardNumber, en la posicion indicada
      else{
        cardMaskify+=creditCardNumber[i];
      }
      
  }
  return cardMaskify;
 }
};

export default validator;