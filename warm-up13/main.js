function padLeft(string, padding, maxLength) {
  if (padding.length <= 1) {
    return padding.repeat((maxLength - string.length)) + string
  }
  else {
    return padding.repeat((maxLength - string.length) - padding.length) + string
  }
}

function padRight(string, padding, maxLength) {
  if (padding.length <= 1) {
    return string + padding.repeat((maxLength - string.length))
  }
  else {
    return string + padding.repeat((maxLength - string.length) - padding.length)
  }
}
