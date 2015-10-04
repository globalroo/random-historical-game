var gamesList = require ('./games.json');
var uniqueRandomArray = require ('unique-random-array');

var getItem = uniqueRandomArray(gamesList);

module.exports = {
	allGames : gamesList,
	random: random,
	fromYear : fromYear
}

function random (n) {
	var i;
	var games;

	if (n === undefined) {
		return getItem();
	}
	games = []
	for (i = 0; i < n; i++) {
		games.push(getItem());
	}
	return games;
}

function fromYear(year){
	return gamesList.filter(function(asset){ return asset.released === year });
}