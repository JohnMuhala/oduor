//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
    var initialArray = ("" + n).split('');
    var reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
        reversedArray[i] = parseInt(initialArray.shift(), 10);
    }
    return reversedArray;
}

console.log(digitize(348597));