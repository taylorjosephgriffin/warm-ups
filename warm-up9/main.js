let queryString = {
  parse: function(string) {
    let result = {}
    let stringSplit = string.slice(1).split('&')
    let stringObj
    stringSplit.forEach(function (pair) {
      pair =  pair.split('=')
      result[pair[0]] = pair[1]
      stringObj = JSON.stringify(result)
      if (pair.length !== 2) {
        result = {}
      }
    })
    return result
  },
  stringify: function(object) {
    objString = JSON.stringify(object)
    if (Object.keys(object).length === 0) {
      return objString.replace(/\{|}|"/g, '').replace(/\:/g, '=').replace(/\,/g, '&')
    }
    return objString.replace(/\}|"/g, '').replace(/\{/g, '?').replace(/\:/g, '=').replace(/\,/g, '&')
  }
}
