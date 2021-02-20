const validator = {

  // 1. CARD VALIDATION: isValid

  isValid:(creditCardNumber)=>{

    //Scope general de este tramo
    let creditCardStep1='';
    let finalAdittion=0;
    
    
    // Loop to complete Luhn algoritsm 

    for (let i=0; i<=creditCardNumber.length-1; i++){

      /* PAIR NUMBERS SELECTION: 
      To select pair positions, it was considerer counting option explained by Michelle
      -video reference: (https://www.youtube.com/watch?v=f0zL6Ot9y_w)-
      So we got the followings statements :

              creditCardNumber[0]= position 1 (odd)
              creditCardNumber[1]= position 2 (pair)...

      */

      if (i%2===0){
        creditCardStep1+=creditCardNumber[i];
      }
        
      else {
        creditCardStep1+=creditCardNumber[i]*2;
      }
       
    }

    //Adittion

    for (let j=0; j<=creditCardStep1.length-1; j++){

        finalAdittion+=parseInt(creditCardStep1.charAt(j));
    }

    console.log(finalAdittion);

    //Credit card number validation

      if (finalAdittion%10==0 && finalAdittion!==0){

        return true;
      }
      else{
        return false;
      }    

  },  

  


  // 2. CARD VALIDATION: MASKIFY
  maskify: (creditCardNumber)=>{

  let cardMaskify='';
  
  //Replace first positions numbers
  
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