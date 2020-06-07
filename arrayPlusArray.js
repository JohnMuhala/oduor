//I'm new to coding and now I want to get the sum of two 
//arrays...actually the sum of all their elements. 
//I'll appreciate for your help.

//the goal of the challenge is to return the sum of all numbers in both arrays.

function arrayPlusArray(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    let value = newArr.reduce(function(sum, current) {
        return sum + current;
    });

    return value;
}
console.log(arrayPlusArray([4, 5, 6], [1, 2, 3]));
