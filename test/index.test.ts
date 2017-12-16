import { expect } from "chai";
import { allGames, random, fromYear, GameAsset } from "../src/index";

describe("random-historical-game", () => {
	describe("allGames", () => {
		it("should be an array of objects",() => {
			expect(allGames).to.satisfy(isArrayOfObjects);
			function isArrayOfObjects(array: GameAsset[]) {
				return array.every((item: GameAsset) => {
					return typeof item === "object";
				});
			}
		});
		it("should contain the game 'Xenon'", () => {
			expect(allGames).to.satisfy(containsXenon);
			function containsXenon(array: GameAsset[]) {
				return array.filter((item: GameAsset) => {
					return item.title === "Xenon";
				});
			}
		});
	});
	describe("random", () => {
		it("should return a random historical game", () => {
			expect(random()).to.have.property("title");
		});
		it("should return a n random historical games", () => {
			expect(random(3).length).to.equal(3);
		});
	});
	describe("random", () => {
		it("should return a random historical game from 2004", () => {
			const released = fromYear(2004);
			expect(released).to.satisfy(yearIs2004);
			function yearIs2004(array: GameAsset[]) {
				return array.every((item: GameAsset) => {
					return item.released === 2004;
				});
			}
		});
	});
});
