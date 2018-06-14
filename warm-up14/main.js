function indexOf(string, substring) {
  for (let i = 0; i < string.length; i++) {
    let subbed = string.substring(i, i + substring.length)
    if (subbed === substring) {
      return i
    }
  }
  return -1
}
