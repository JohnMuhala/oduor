/* Write a function that accepts a positive number N. The function should console log a pyramid shape
with N levels using the # character. Make sure the pyramid has spaces on both the left and right hand sides

Examples:

pyramid(3)
   '#'
  '###'
 '#####'        */

let myNumber = 3

function pyramid(num){
    for (i = 1; i <= num; i = i + 1) {console.log(("#").repeat(i))}
} 
    console.log(pyramid(myNumber))

