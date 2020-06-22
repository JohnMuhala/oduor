function greet(str) {
    var language = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'};
    
    var langArrays = Object.entries(language);
    var keys = Object.keys(langArrays);
    var values = Object.values(langArrays);
    
    for (var i = 0; i < keys.length; i++){
    if (str === keys[i])
    console.log(values[i])
    }
}

console.log(greet('dutch'))