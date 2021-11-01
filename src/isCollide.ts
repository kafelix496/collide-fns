import _getPerpendicularVector from './internal/_getPerpendicularVector'
import _projection from './internal/_projection'

import type { Vertex } from './interfaces'

const isCollide = (aVertexes: Vertex[], bVertexes: Vertex[]): boolean => {
  if (aVertexes.length < 2 && bVertexes.length < 2) {
    return false
  }

  const calculatedVectors: { [key: string]: boolean } = {}

  for (
    let index = 0;
    index < aVertexes.length && aVertexes.length >= 2;
    index += 1
  ) {
    const vector = {
      x: aVertexes[index].x - aVertexes[(index + 1) % aVertexes.length].x,
      y: aVertexes[index].y - aVertexes[(index + 1) % aVertexes.length].y
    }

    if (!calculatedVectors[`${vector.x},${vector.y}`]) {
      calculatedVectors[`${vector.x},${vector.y}`] = true

      const perpendicularVector = _getPerpendicularVector(vector)

      const aVertexesRange = _projection(perpendicularVector, aVertexes)
      const bVertexesRange = _projection(perpendicularVector, bVertexes)

      if (
        aVertexesRange.min > bVertexesRange.max ||
        aVertexesRange.max < bVertexesRange.min
      ) {
        return false
      }
    }
  }

  for (
    let index = 0;
    index < bVertexes.length && bVertexes.length >= 2;
    index += 1
  ) {
    const vector = {
      x: bVertexes[index].x - bVertexes[(index + 1) % bVertexes.length].x,
      y: bVertexes[index].y - bVertexes[(index + 1) % bVertexes.length].y
    }

    if (!calculatedVectors[`${vector.x},${vector.y}`]) {
      calculatedVectors[`${vector.x},${vector.y}`] = true

      const perpendicularVector = _getPerpendicularVector(vector)

      const aVertexesRange = _projection(perpendicularVector, aVertexes)
      const bVertexesRange = _projection(perpendicularVector, bVertexes)

      if (
        aVertexesRange.min > bVertexesRange.max ||
        aVertexesRange.max < bVertexesRange.min
      ) {
        return false
      }
    }
  }

  return true
}

export default isCollide
