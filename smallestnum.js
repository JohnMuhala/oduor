/*Create a function that returns the sum of the two lowest positive numbers given an
 array of minimum 4 positive integers. No floats or non-positive integers will be passed.*/


function sumTwoSmallestNumbers(numbers) {  
    var ordered = numbers.sort(function(a,b){return a-b;});
    var result=0;
    
    for(i=0; i<ordered.length; i++){
      if(i==0){
        result+=ordered[0];
      }
      if(i==1){
        result+=ordered[1];
      }
    }
    return result;
  
  };
   console.log (sumTwoSmallestNumbers(4))