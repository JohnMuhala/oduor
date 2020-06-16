//https://www.codewars.com/kata/primes-in-numbers/train/javascript
// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

// "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
//primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)"

function getAllPrimeFactors(n){

  var primesTilln = [], q, primeFactors = [], obj, str = "", add;
  //generate all prime numbers til 'n'
  //here we are checking till the given number including the given number, to display that, if it self is a prime
  for(var i = 0; i <= n; i++){
    if(isPrime(i)){
      primesTilln.push(i);
    }
  }
  console.log(primesTilln);
  //now decompose 'n' with prime factors available from 'primesTilln'
  for(var j = 0; j <= primesTilln.length; j++){
    //divide 'n' with the primes in 'primesTilln' continously unitll it is divisible by a single prime
    while(n % primesTilln[j] === 0){
      q = n / primesTilln[j];
      n = q;
      primeFactors.push(primesTilln[j]);
    }
  }
  obj = getPrimesAndPowersObj(primeFactors);
  for(var x in obj){
    if(obj[x] > 1){
      add = "(" + x + "**" + obj[x] + ")";
    }else if(obj[x] === 1){
      add = "(" + x + ")";
    }
    str = str + add;
  }
  return str;
}

getAllPrimeFactors(7919);

function getPrimesAndPowersObj(primeFactors){
  var c = 1, obj = {};
    for(var i = 0; i < primeFactors.length; i++){
    for(var j = 0; j < primeFactors.length; j++){
      if(i !== j){
        if(primeFactors[i] === primeFactors[j]){
          c++;
        }
      }
    }
    obj[primeFactors[i]] = c;
    c = 1;
  }
  return obj;
}

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

// function isPrime(n){
//   //n should be divisible by 1 and n
//   var count = 0;
//   if(n > 2){
//     for(var i = 2; i <= n-1; i++){
//       if(n % i !== 0 && n % n === 0 && n % 1 === 0){
//         count++;
//       }
//     }
//     if(n-2 === count){
//       //console.log(n, 'is a prime');
//       return true;
//     }else{
//       //console.log(n, 'is not a prime');
//       return false;
//     }
//   }else if (n === 2){
//     //console.log(n, 'is a prime');
//     return true;
//   }else{
//     //console.log(n, 'is not a prime');
//     return false;
//   }
// }