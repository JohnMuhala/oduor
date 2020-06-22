// function solution(input, markers) {
//     return input.split('\n').map(
//         line => markers.reduce(
//             (line, marker) => line.split(marker)[0].trim(), line
//         )
//     ).join('\n')
// }
// 8 similar code variations are grouped with this oneShow Variations

// You initialise your newString with a space. That is a wrong start. That space is not warranted to be there. You should only take characters from the input. It should be an empty string.
// The newline character is not "/n", but "\n"
// input.split() converts a string to an array of characters. If your aim was to make it possible to access characters through indexing, then realise that you can do so with a string as well: input[i] gives you the character at that offset.
// Variable names are important. Naming a variable string is not very helpful. Nor is words, when actually it holds one character. So character would be a better choice.
// includes expects a string as argument, but you pass markers. The || "/n" has no additional value, because markers is a truthy value and so || will stop right there (short-circuit evaluation). And as markers is an array, not a string, includes converts that value into a comma-separated string. Obviously that string is very unlikely to occur in your input. You need to test for each marker character individually, and also check for the newline character.
// The body of your if statement is empty (in your main attempt). This cannot be useful. Maybe you were looking for continue; which will skip the rest of the loop and continue with the next iteration of it.
// There is no provision to skip the characters that follow a marker character.
// You have no provision to eliminate spacing that occurs before a marker character.
// newString is a string, so there is no need to call newString.toString();

function solution(input, markers) {
    let newString = "";
    for (let i = 0; i < input.length; i++) {
        let character = input[i];
        if (markers.includes(character)) {
            // move i to just before the end of the current line
            i = input.indexOf("\n", i) - 1;
            // Remove the white space that we already added at the end
            newString = newString.trimRight();
            // If no newline character at end of last line: break
            if (i < 0) break;
            // Skip rest of this iteration
            continue;
        }
        newString += input[i];
    }
    return newString;
}