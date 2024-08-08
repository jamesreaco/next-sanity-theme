export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) { throw new Error(errorMessage) }
  return v
}