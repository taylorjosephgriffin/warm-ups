var users = [
  { name: 'barney', age: 36, isActive: true },
  { name: 'fred', age: 40, isActive: false }
]

function every(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    var bool = predicate(users[i])
  }
  return bool
}

var users1 = [
  { name: 'barney', age: 49, isActive: true },
  { name: 'fred', age: 49, isActive: false },
  { name: 'pebbles', age: 1, isActive: true }
]

function some(collection, predicate) {
  let bool
  for (let i = 0; i < collection.length; i++) {
    if (predicate(users1[i])) {
      bool = predicate(users1[i])
    }
    else {
      return false
    }
  }
  return bool
}

var users2 = [
  { name: 'barney', age: 36, isActive: false },
  { name: 'fred', age: 40, isActive: true },
  { name: 'pebbles', age: 1, isActive: true }
]

function find(collection, predicate) {
  return collection.filter(predicate)[0]
}

var numbers = [4, 8, 8, 10]

function indexOf(array, value) {
  let index
  array.forEach(function (i) {
    if (i === value) {
      index = array.indexOf(i)
    }
  })
  return index
}

var users3 = [
  { name: 'barney', age: 36, isActive: true },
  { name: 'dino', age: 4, isActive: true },
  { name: 'fred', age: 40, isActive: false },
  { name: 'pebbles', age: 1, isActive: true }
]

function takeWhile(array, predicate) {
  let newArray = array.filter(predicate)
  return newArray
}
