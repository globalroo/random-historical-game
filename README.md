# random-historical-game [![Build Status](https://travis-ci.org/globalroo/random-historical-game.svg?branch=master)](https://travis-ci.org/globalroo/random-historical-game)[![Dependency Status](https://dependencyci.com/github/globalroo/random-historical-game/badge?v1)](https://dependencyci.com/github/globalroo/random-historical-game?v1)[![codecov](https://codecov.io/gh/globalroo/random-historical-game/branch/master/graph/badge.svg)](https://codecov.io/gh/globalroo/random-historical-game)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Installation

This package is distributed via npm:

```sh
npm install random-historical-game
```

Usage

```js
const games = require("random-historical-game");
const allGames = games.all;
const randomGame = games.random();
const threeRandomGames = games.random(3);
```

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
