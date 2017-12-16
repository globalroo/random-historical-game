# random-historical-game [![Build Status](https://travis-ci.org/globalroo/random-historical-game.svg?branch=master)](https://travis-ci.org/globalroo/random-historical-game)[![Dependency Status](https://dependencyci.com/github/globalroo/random-historical-game/badge)](https://dependencyci.com/github/globalroo/random-historical-game?v1)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Installation

__Usage__

This psckage is bundled as a UMD,

```js
// Common JS
const games = require("random-historical-game");
const allGames = games.all;
const randomGame = games.random();
const threeRandomGames = games.random(3);
```

```js
// es6+
import { randomGame } from "random-historical-game"
console.log(randomGame());
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Random Historical Game Script import</title>
	<script type="text/javascript" src="random-historical-game.js"></script>
</head>
<body>
	<div id="root"></div>
	<script type="text/javascript">
		var root = document.getElementById("root");
		root.innerHTML = JSON.stringify(RandomHistoricalGame.random(5));
	</script>
</body>
</html>
```
The games are stored in the following structure:

```json
{
    "Makers": [
      "Amiga Inc.",
      "Virgin Games Ltd.",
      "Epic/Sony Inc.",
      "GamesWare",
      "Image Works",
      "Mindscape Inc.",
      "Mirror Image",
      "Mirrorsoft Ltd.",
      "PCM Complete",
      "U.S. Gold Ltd.",
      "Virgin Games Inc."
    ],
    "Platforms": [
      "Acorn 32-bit",
      "Amiga",
      "Atari ST",
      "BlackBerry",
      "CDTV",
      "DOS",
      "Game Boy",
      "Genesis",
      "PC-98",
      "SEGA Master System",
      "Sharp X68000"
    ],
    "released": "1989",
    "title": "Xenon 2: Megablast"
  }
```

__TODO__: Coverage reporting from mocha / istanbul and webpack.

__Disclaimer__: This project is a sandbox for understanding build chains and is likely to change in crazy ways.
