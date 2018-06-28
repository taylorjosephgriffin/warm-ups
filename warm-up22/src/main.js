function deepCopy(input) {
  let clone = {}

  if (input instanceof Date) {
    const date = new Date(input.getTime())
    return date
  }

  if (Array.isArray(input)) {
    return input.map(deepCopy)
  }

  if (input instanceof Object) {
    let clone = {}
    for (var keys in input) {
      clone[keys] = deepCopy(input[keys])
    }
    return clone
  }

  return input
}
