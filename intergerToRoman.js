/*Create a function taking a positive integer as its parameter and 
returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately 
starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 

1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.
*/
// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function numToRoman(number) {
    // convert the number to a roman numeral
    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        I: 1,
    };

    //empty string meaning we have to put out number to be converted to roman
    let ans = "";
    //our number should start from (0)
    while (number > 0) {
        for (i in roman) {
            //we look our value of i in the given convertion numerals
            if (roman[i] <= number) {
                ans += i; //+ number + " "; //add value to the variable
                number -= roman[i];
                break; //terminates the current loop and return the converted number to numeral
            }
        }
    }
    return ans;
}
console.log(numToRoman(46));