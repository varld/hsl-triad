# hsl-triad [![Build Status](https://travis-ci.org/usemeta/hsl-triad.svg?branch=master)](https://travis-ci.org/usemeta/hsl-triad) [![codecov](https://codecov.io/gh/usemeta/hsl-triad/branch/master/graph/badge.svg)](https://codecov.io/gh/usemeta/hsl-triad)

> Generate a color triad.

## Install

```
$ npm install hsl-triad
```

## Usage

```js
const hslTriad = require('hsl-triad');

hslRgb(340, 1, 0.5);
//=> [
//=>   [340, 1, 0.5],
//=>   [100, 1, 0.5],
//=>   [220, 1, 0.5]
//=> ]
```

## API

### hslRgb(h, s, l)

#### h

Type: `number`
Max: `360`

The hue

#### s

Type: `number`
Max: `1`

The saturation

#### l

Type: `number`
Max: `1`

The lightness

#### Retuns

Type: `array`

An array of arrays containing `hsl` values.

## License

MIT © [Tobias Herber](http://tobihrbr.com)
