
const uniqueRandomArray = require ("unique-random-array");

export interface GameAsset {
	Makers: string[],
	Platforms: string[],
	released: number,
	title: string
}

export const allGames = require("./games.json");

const getItem = uniqueRandomArray(allGames);

export function random(n?: number) {
	if (n === undefined) {
		return getItem();
	}
	const games = [];
	for (let i = 0; i < n; i++) {
		games.push(getItem());
	}
	return games;
}

export function fromYear(year: number): GameAsset[] {
	return allGames.filter((asset: GameAsset) => {
		return asset.released === year;
	});
}
