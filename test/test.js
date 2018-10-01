const hslTriad = require('../index');

test('generates triad', () => {
  expect(hslTriad(340, 1, 0.5)).toEqual([
    [340, 1, 0.5],
    [100, 1, 0.5],
    [220, 1, 0.5]
  ]);
})
