// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47
function halvingSum(n) {
    var Sum = 0;
    while (n > 0) {
        Sum += n;
        //floor() is a function that is used to return the largest integer value that is less than or equal to a number. In other words, the floor() function rounds a number down and returns an integer value. Because the floor() function is a static function of the Math object, it must be invoked through the placeholder object called Math
        n = Math.floor(n / 2);
    }
    return Sum;
}
console.log(halvingSum(27));

// halving the n(n/2) then sum their halves
// 27 => 27 + 13 + 6 + 3 + 1 = 50
// 29=>29+14+7+3+1=54


// console.log(Math.floor(32.65));//32
// console.log(Math.floor(8.1));//8
// console.log(Math.floor(-4.2));//-5......the floor() function rounds away from zero and in this case,
