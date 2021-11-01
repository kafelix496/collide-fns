![](https://badgen.net/npm/v/@share-code/collide-fns)
![](https://badgen.net/bundlephobia/minzip/@share-code/collide-fns)
![](https://badgen.net/npm/dm/@share-code/collide-fns)
![](https://badgen.net/npm/dt/@share-code/collide-fns)
![](https://img.shields.io/badge/license-MIT-blue.svg)

# collide-fns

to check collision detection, I chose to use SAT (Separating Axis Theorem)

according to wikipedia, the SAT (separating axis theorem) can be applied for fast collision detection
between polygon meshes. Each face's normal or other feature direction is used as a separating axis.
Note that this yields possible separating axes, not separating lines/planes.

## Install

```zsh
npm install @share-code/collide-fns
```

## Functions

isCollide

check the two objects are collided.
it's pretty obvious but each vertexes should have more than 3 vertex.

```typescript
interface Vertex {
  x: number
  y: number
}

isCollide = (aVertexes: Vertex[], bVertexes: Vertex[]) => boolean
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
