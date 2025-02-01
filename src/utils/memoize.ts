export function memoize<T extends (...args: any[]) => void>(callback: T) {
  const cachedData: Map<string, any> = new Map()

  const memoizeFunction = (data: any) => {
    const key = createMemoizedKey(data)
    const cachedValue = cachedData.get(key)

    if (!cachedValue) {
      cachedData.set(key, callback(data))
      return callback(data)
    }

    return cachedValue
  }

  const memoizeCacheControl = {
    delete(data: any) {
      const key = createMemoizedKey(data)
      cachedData.delete(key)
    },
  }

  memoizeFunction.cache = memoizeCacheControl

  return memoizeFunction
}

/**========================================================================
 *                           Memoize Helper Function
 *========================================================================**/

function createMemoizedKey(data: Record<string, any>) {
  return Object.keys(data).join("")
}
