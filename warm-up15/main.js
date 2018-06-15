function includes(string, substring) {
  for (let i = 0; i < string.length; i++) {
    let subbed = string.substring(i, i + substring.length)
    if (subbed === substring) {
      return true
    }
  }
  return false
}

console.log(`includes('abc', 'b') \n// ${includes('abc', 'b')}`)
console.log(`includes('abc', 'd') \n// ${includes('abc', 'd')}`)
console.log(`includes('abcd', 'bc') \n// ${includes('abcd', 'bc')}`)
console.log(`includes('abcd', 'bd') \n// ${includes('abcd', 'bd')}`)
console.log(`includes('abc', '') \n// ${includes('abc', '')}`)
