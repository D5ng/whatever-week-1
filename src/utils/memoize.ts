type DefaultCallback = (...args: any[]) => any

export function memoize<T extends DefaultCallback>(callback: T, key: string) {
  const cachedData: Map<string, ReturnType<T>> = new Map()

  const memoizeFunction = <TData>(data: TData): ReturnType<T> => {
    const cachedValue = cachedData.get(key)

    if (!cachedValue) {
      cachedData.set(key, callback(data))
      return callback(data)
    }

    return cachedValue
  }

  const memoizeCacheControl = {
    delete() {
      cachedData.delete(key)
    },
  }

  memoizeFunction.cache = memoizeCacheControl

  return memoizeFunction
}
