// Write a
// function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.You can guarantee that input is non - negative.

// Example: The binary representation of 1234 is 10011010010, so the
// function should
// return 5 in this
// case

var countBits = function(n) {
    // make an array with the bit result
    const base = (n).toString(2).split('');

    // make a sum with the array and make the index a Number
    const result = base.reduce((sum, num) => sum + Number(num), 0);

    return result;
};