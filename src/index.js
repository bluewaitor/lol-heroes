var uniqueRandomArray = require('unique-random-array');
var lolHeroes = require('./lol-heroes.json');

module.exports = {
    all: lolHeroes,
    random: uniqueRandomArray(lolHeroes)
}