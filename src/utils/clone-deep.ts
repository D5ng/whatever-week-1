export function cloneDeep<T>(target: T[]): T[]
export function cloneDeep<T extends Record<string, any> = Record<string, any>>(target: T): T

export function cloneDeep<T>(target: T) {
  if (typeof target !== "object" || target === null) {
    return target
  }

  if (Array.isArray(target)) {
    return target.map((item) => cloneDeep(item))
  }

  const cloned: Record<string, any> = {}
  for (const [key, value] of Object.entries(target)) {
    cloned[key] = cloneDeep(value)
  }

  return cloned
}
