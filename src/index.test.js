var expect = require('chai').expect;
var historicalGame = require('./index');

describe('random-historical-game', function () {
	describe('allGames', function() {
		it('should be an array of objects',function() {
			expect(historicalGame.allGames).to.satisfy(isArrayOfObjects);
			function isArrayOfObjects(array) {
				return array.every(function (item) {
					return typeof item === 'object';
				});
			}
		});
		it('should contain the game "Xenon"', function() {
			expect(historicalGame.allGames).to.satisfy(containsXenon);
			function containsXenon(array) {
				return array.filter(function (item) {
					return item.title === 'Xenon';
				});
			}
		});
	});
	describe('random', function() {
		it('should return a random historical game', function() {
			expect(historicalGame.random()).to.have.property('title');
		});
		it('should return a n random historical games', function() {
			expect(historicalGame.random(3).length).to.equal(3);
		});
	});
	describe('random', function() {
		it('should return a random historical game from 2004', function() {
			var released = historicalGame.fromYear("2004");
			expect(released).to.satisfy(yearIs2004);
			function yearIs2004(array) {
				return array.every(function (item) {
					return item.released === '2004';
				});
			}
		});
	});
});