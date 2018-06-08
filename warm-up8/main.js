var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function chunk(array, size) {
  let newArray = []
  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size))
  }
  return newArray
}

var array = [1, [2, [3, [4]], 5]]

function flatten(array) {
  return array.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
}

var object = { a: 1, b: '2', c: 3 }

function pick(object, keys) {
  let output = {}
  for (let i = 0; i < keys.length; i++) {
    if (object.hasOwnProperty(keys[i])) {
      return true
    }
  }
}

var users = [
  { name: 'barney', age: 36, isActive: false },
  { name: 'fred', age: 40, isActive: true },
  { name: 'pebbles', age: 1, isActive: false }
]

function partition(collection, predicate) {
  let trueArray = []
  let falseArray = []
  let newArray = [trueArray, falseArray]
  for (var i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      trueArray.push(collection[i])
    }
    else {
      falseArray.push(collection[i])
    }
  }
  return newArray
}
