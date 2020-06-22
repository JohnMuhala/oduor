// Write function avg which calculates average of numbers in given list.
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function avg(array) {
    let sum = array.reduce((a, b) => a + b);
    return sum / array.length;
}
console.log(avg([2, 4, 1, 5]));