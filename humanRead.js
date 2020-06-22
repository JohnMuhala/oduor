// Write a
// function, which takes a non - negative integer(seconds) as input and returns the time in a human - readable format(HH: MM: SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999(99: 59: 59)function humanReadable(seconds) {
// figure out the conversion from seconds to hours, minutes
// the left over are seconds
// push to a string so that : are in between each H, M, S 

if (seconds < 360000) {
    var hours, minutes;
    console.log((seconds % 3600) % 60)
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor((seconds % 3600) / 60);
    seconds = Math.floor((seconds % 3600) % 60);


    if (seconds.toString().length === 1) {
        seconds = "0" + seconds;
    }

    if (minutes.toString().length === 1) {
        minutes = "0" + minutes;
    }

    if (hours.toString().length === 1) {
        hours = "0" + hours;
    }

    return hours + ":" + minutes + ":" + seconds;

}
}

humanReadable(359999);