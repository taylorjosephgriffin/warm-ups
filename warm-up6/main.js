document.querySelector('[data-view]').addEventListener('click', function (e) {
  if (!e.target.querySelector('.container')) {
    $card = e.target.parentNode.closest('.card')
    console.log($card.getAttribute('data-number'))
  }
})
