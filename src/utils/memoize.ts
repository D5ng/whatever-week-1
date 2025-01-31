export function memoize<T extends (...args: any[]) => void>(callback: T) {
  const cachedData: Map<string, any> = new Map()

  const memoizeFunction = (data: any) => {
    const key = createMemoizedKey(data)

    if (!cachedData.get(key)) {
      cachedData.set(key, callback(data))
      return callback(data)
    }

    return cachedData.get(key)
  }

  const memoizeCacheControll = {
    delete(data: any) {
      const key = createMemoizedKey(data)
      cachedData.delete(key)
    },
  }

  memoizeFunction.cache = memoizeCacheControll

  return memoizeFunction
}

/**========================================================================
 *                           Memoize Helper Function
 *========================================================================**/

function createMemoizedKey(data: Record<string, any>) {
  return Object.keys(data).join("")
}
