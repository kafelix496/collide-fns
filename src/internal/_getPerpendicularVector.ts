import type { Vector } from '../interfaces'

const _getPerpendicularVector = (vector: Vector): Vector => {
  return {
    x: vector.y * -1,
    y: vector.x
  }
}

export default _getPerpendicularVector
