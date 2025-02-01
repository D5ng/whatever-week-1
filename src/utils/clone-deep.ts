export function cloneDeep(target: any) {
  if (typeof target !== "object" || target === null) {
    return target
  }

  const cloned: Record<string, any> = Array.isArray(target) ? [] : {}

  for (const [key, value] of Object.entries(target)) {
    if (typeof value === "object") {
      cloned[key] = cloneDeep(value)
    } else {
      cloned[key] = value
    }
  }

  return cloned
}
