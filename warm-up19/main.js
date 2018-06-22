function createDOM(tagName) {

  const $element = document.createElement(tagName)

  return {
    element() {
      return $element
    },

    attribute(name, value) {
      $element.setAttribute(name, value)
      return this
    },

    text(value) {
      $element.appendChild(document.createTextNode(value))
      return this
    },

    child(tagName) {
      $element.appendChild(createDOM(tagName).element())
      return createDOM(tagName)
    }
  }
}
