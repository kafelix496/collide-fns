import _getPerpendicularVector from '../internal/_getPerpendicularVector'

test(`_getPerpendicularVector function should return value as expected
  (input x value become y and input y value become x with multiplied by -1)`, () => {
  expect(_getPerpendicularVector({ x: 1, y: -4 })).toEqual({ x: 4, y: 1 })
})
