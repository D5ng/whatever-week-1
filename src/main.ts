import { cloneDeep, memoize } from "./utils"

const obj = {
  a: 1,
  b: 2,
  c: {
    array: [1, 2, 3],
    obj: {
      say: "hello",
    },
  },
}

/**========================================================================
 * !                             CloneDeep
 *========================================================================**/

const objCopy = cloneDeep(obj)
obj.c.array = [1, 2]
// console.log(obj)
// console.log(objCopy)
// console.log(obj === objCopy)

const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
const arrayCopy = cloneDeep(obj)
array[0].id = 100
// console.log(obj)
// console.log(arrayCopy)
// console.log(obj === arrayCopy)

/**========================================================================
 * !                             Memoize
 *========================================================================**/
const foo = { a: 1, b: 2 }
const func = memoize((value) => Object.values(value))

console.log(func(foo)) // [1, 2]
foo.a = 2
console.log(func(foo)) // [1, 2]
func.cache.delete(foo)
console.log(func(foo)) // [2, 2]
