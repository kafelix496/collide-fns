import type { Vector, Vertex } from '../interfaces'

interface ProjectionRtn {
  min: number
  max: number
}

const _projection = (vector: Vector, vertexes: Vertex[]): ProjectionRtn =>
  vertexes.reduce(
    (accu, vertex) => {
      const { x, y } = vertex

      const projectionValue = x * vector.x + y * vector.y

      return {
        ...accu,
        min: projectionValue < accu.min ? projectionValue : accu.min,
        max: projectionValue > accu.max ? projectionValue : accu.max
      }
    },
    { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER }
  )

export default _projection
