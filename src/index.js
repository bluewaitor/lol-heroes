var uniqueRandomArray = require('unique-random-array');
var lolHeroes = require('./lol-heroes.json');
var getRandomItem = uniqueRandomArray(lolHeroes);
module.exports = {
    all: lolHeroes,
    random: random
}

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}