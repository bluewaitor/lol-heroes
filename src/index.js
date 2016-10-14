import uniqueRandomArray from 'unique-random-array';
import lolHeroes from './lol-heroes.json';
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