function renderDiv() {
  let $newDiv = document.createElement('div')
  return $newDiv
}

function renderSpan() {
  let $newSpan = document.createElement('span')
  $newSpan.textContent = 'Hello'
  return $newSpan
}

function renderInput() {
  let $newInput = document.createElement('input')
  $newInput.setAttribute('type', 'number')
  return $newInput
}

function renderButton() {
  let $newButton = document.createElement('button')
  $newButton.setAttribute('type', 'button')
  $newButton.className = 'btn btn-primary'
  $newButton.textContent = 'Primary'
  return $newButton
}

function renderBadge() {
  let $newH1 = document.createElement('h1')
  let $newSpan = document.createElement('span')
  $newH1.innerText = 'Example Heading'
  $newSpan.textContent = 'New'
  $newSpan.className = 'badge badge-secondary'
  $newH1.appendChild($newSpan)
  return $newH1
}

function renderListGroup() {
  let $newUl = document.createElement('ul')
  let $newLi1 = document.createElement('li')
  let $newLi2 = document.createElement('li')
  let $newLi3 = document.createElement('li')
  let $newLi4 = document.createElement('li')
  let $newLi5 = document.createElement('li')

  $newLi1.textContent = 'Cras justo odio'
  $newLi2.textContent = 'Dapibus ac facilisis in'
  $newLi3.textContent = 'Morbi leo risus'
  $newLi4.textContent = 'Porta ac consectetur ac'
  $newLi5.textContent = 'Vestibulum at eros'

  $newLi1.classList = 'list-group-item'
  $newLi2.className = 'list-group-item'
  $newLi3.className = 'list-group-item'
  $newLi4.className = 'list-group-item'
  $newLi5.className = 'list-group-item'

  $newUl.appendChild($newLi1)
  $newUl.appendChild($newLi2)
  $newUl.appendChild($newLi3)
  $newUl.appendChild($newLi4)
  $newUl.appendChild($newLi5)
  return $newUl
}

function renderCard() {
  $newDiv = document.createElement('div')
  $newImg = document.createElement('img')
  $newDiv2 = document.createElement('div')
  $newH5 = document.createElement('h5')
  $newP = document.createElement('p')
  $newA = document.createElement('a')

  $newDiv.classList.add('card')
  $newDiv.setAttribute('style', 'width: 18rem')
  $newImg.classList.add('card-img-top')
  $newImg.setAttribute('src', '...')
  $newImg.setAttribute('alt', 'Card image cap')
  $newDiv2.classList.add('card-body')
  $newH5.classList.add('card-title')
  $newH5.textContent = 'Card title'
  $newP.classList.add('card-text')
  $newP.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  $newA.setAttribute('href', '#')
  $newA.classList.add('btn', 'btn-primary')
  $newA.textContent = 'Go somewhere'

  $newDiv.appendChild($newImg)
  $newDiv.appendChild($newDiv2)
  $newDiv2.appendChild($newH5)
  $newDiv2.appendChild($newP)
  $newDiv2.appendChild($newA)

  return $newDiv
}

function renderForm () {
  $newForm = document.createElement('form')
  $newDiv = document.createElement('div')
  $newLabel = document.createElement('label')
  $newInput = document.createElement('input')
  $newButton = document.createElement('button')

  $newDiv.classList.add('form-group')
  $newLabel.setAttribute('for', 'exampleInputEmail1')
  $newLabel.textContent = 'Email address'
  $newInput.setAttribute('type', 'email')
  $newInput.classList.add('form-control')
  $newInput.setAttribute('id', 'exampleInputEmail1')
  $newInput.setAttribute('aria-describedby', 'emailHelp')
  $newInput.setAttribute('placeholder', 'Enter email')
  $newButton.setAttribute('type', 'submit')
  $newButton.classList.add('btn', 'btn-primary')
  $newButton.textContent = 'Submit'

  $newForm.appendChild($newDiv)
  $newForm.appendChild($newButton)
  $newDiv.appendChild($newLabel)
  $newDiv.appendChild($newInput)

  return $newForm
}
