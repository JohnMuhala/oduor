// Take 2 strings s1 and s2 including only letters from ato z.Return a new sorted string, the longest possible, containing distinct letters,

//     each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    var result = "";

    for (var i = 0; i < s1.length; i++) {
        if (result.indexOf(s1[i]) === -1) {
            result += s1[i];
        }
    }

    for (var i = 0; i < s2.length; i++) {
        if (result.indexOf(s2[i]) === -1) {
            result += s2[i];
        }
    }

    return result.split('').sort().join('');
}