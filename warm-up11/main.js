function firstChar(string) {
  return string[0]
}

function lastChar(string) {
  return string[string.length - 1]
}

function repeat(string, number) {
  var repeated = ''
  while (number > 0) {
    repeated += string
    number--
  }
  return repeated
}

function ransomCase(string) {
  let newString = ''
  for (let i = 0, j = 1; i < string.length, j < string.length; i += 2, j += 2) {
    newString += string.charAt(i).toUpperCase()
    newString += string.charAt(j).toLowerCase()
  }
  return newString
}

function reverse(string) {
  let newString = ''
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }
  return newString
}

function capitalize(string) {
  let newString = ''
  newString += string.charAt(0).toUpperCase()
  for (let i = 0; i < string.length; i++) {
    newString += string.charAt(i + 1).toLowerCase()
  }
  return newString
}
