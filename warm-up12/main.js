/* disable-eslint no-unused-vars */

function startsWith(string, substring) {
  let testString = ''
  testString = string.slice(0, substring.length)
  if (testString === substring) {
    return true
  }
  else {
    return false
  }
}

function endsWith(string, substring) {
  let testString = ''
  testString = string.slice(string.length - substring.length)
  if (testString === substring) {
    return true
  }
  else {
    return false
  }
}
