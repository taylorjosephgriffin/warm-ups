function padLeft(string, padding, maxLength) {
  let padString = ''
  let edgePad = ''
  if (padding.length <= 1) {
    padString = padding.repeat((maxLength - string.length)) + string
  }
  else if (padding.length > 1){
    padString = padding.repeat((maxLength - string.length) - padding.length) + string
  }
  if (padString.length !== maxLength) {
    edgePad += padString.substring(0, padString.length - string.length - 1)
    edgePad += padString.substring(padString.length - string.length, padString.length)
    padString = edgePad
  }
  return padString
}

function padRight(string, padding, maxLength) {
  let padString = ''
  let edgePad = ''
  if (padding.length <= 1) {
    padString =  string + padding.repeat((maxLength - string.length))
  }
  else {
    padString = string + padding.repeat((maxLength - string.length) - padding.length)
  }
  if (padString.length !== maxLength) {
    edgePad += padString.substring(0, padString.length - 1)
    padString = edgePad
  }
  return padString
}
