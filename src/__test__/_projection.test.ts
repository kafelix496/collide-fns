import _projection from '../internal/_projection'

test(`if vertexes is empty array,
  it should return min: Number.MAX_SAFE_INTEGER & max: Number.MIN_SAFE_INTEGER`, () => {
  expect(_projection({ x: 3, y: -2 }, [])).toEqual({
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER
  })
})

test('_projection function should return as expected', () => {
  expect(
    _projection({ x: 3, y: -2 }, [
      { x: 1, y: -2 },
      { x: 2, y: -5 }
    ])
  ).toEqual({ min: 7, max: 16 })
})
