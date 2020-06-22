// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
    var ordered = numbers.sort(function(a, b) {
        return a - b;
    });
    var result = 0;

    for (i = 0; i < ordered.length; i++) {
        if (i == 0) {
            result += ordered[0];
        }
        if (i == 1) {
            result += ordered[1];
        }
    }
    return result;
    //Code here
};