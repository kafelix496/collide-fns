import isCollide from '../isCollide'

test("if both params (vertexes)'s length are 0 or 1, it should return false", () => {
  const aVertexes = [{ x: 1, y: 1 }]
  const bVertexes = [{ x: 1, y: 1 }]

  expect(isCollide(aVertexes, bVertexes)).toBe(false)
  expect(isCollide([], bVertexes)).toBe(false)
  expect(isCollide(bVertexes, aVertexes)).toBe(false)
  expect(isCollide(bVertexes, [])).toBe(false)
})

test('isCollide should check whether two objects collide', () => {
  const aVertexes = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 2, y: 2 }
  ]
  const bVertexes1 = [
    { x: 2.5, y: 7 },
    { x: 2.5, y: 2 },
    { x: 5, y: 2 },
    { x: 5, y: 7 }
  ]

  expect(isCollide(aVertexes, bVertexes1)).toBe(false)

  const bVertexes2 = [
    { x: 2.5, y: 7 },
    { x: 2.5, y: 1 },
    { x: 5, y: 2 },
    { x: 5, y: 7 }
  ]

  expect(isCollide(aVertexes, bVertexes2)).toBe(true)
})
