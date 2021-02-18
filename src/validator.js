const validator = {

  // 1. CARD VALIDATION: isValid

  isValid:(creditCardNumber)=>{

    //Scope general de este tramo
    let creditCardStep1='';
    let creditCardArrayToString=0;
    let finalAdittion=0;
    
    // Tratamiento inicial: Obtengo un array en orden inverso 

    let creditCardReverse= creditCardNumber.split('').reverse();
    
    // Se aplica loop para implementar criterio de Luhn sobre digitos pares

    for (let i=0; i<=creditCardNumber.length-1; i++){

      /* CRITERIO PARA DEFINICION DE POSICIONES PARES E IMPARES: 
      Para la seleccion de las posiciones pares,se toma en cuenta el criterio del 
      video de Michelle (https://www.youtube.com/watch?v=f0zL6Ot9y_w),
      en el que:

              creditCardNumber[0]= posicion 1 (impar)
              creditCardNumber[1]= posicion 2 (par)...
      Por lo tanto cuando i=0,2,4,6...
      en realidad me refiero a digitos en posiciones impares de acuerdo a este criterio
      */

      

   // Digito impar (creditCardNumber[0] string= posicion 1, creditCardNumber[2] = posicion 3)
      if (i%2===0){
        creditCardStep1+=creditCardReverse[i];
        }
        
   // Digito par

      else {creditCardStep1+=creditCardReverse[i]*2;}
            
    }

    //Devuelvo conversion del array (obtengo cadena string) 

      creditCardArrayToString= creditCardStep1.toString();
    
    //Hacer suma global de los digitos internos

    for (let j=0; j<=creditCardArrayToString.length-1; j++){

        finalAdittion+=parseInt(creditCardArrayToString.charAt(j));
    }

    console.log(finalAdittion);

    //Condicion de validez o invalidez

      if (finalAdittion%10===0){
        return true;
      }

      else {return false;}

  },  

  


  // 2. CARD VALIDATION: MASKIFY
  maskify: (creditCardNumber)=>{

  let cardMaskify='';
  
  //Sustitucion por #
  
  for (let i=0; i< creditCardNumber.length; i++){

      if (i<creditCardNumber.length-4){
        cardMaskify+='#';  
      }

      else{cardMaskify+=creditCardNumber[i];}
      
  }
  return cardMaskify;
 }


};

export default validator;