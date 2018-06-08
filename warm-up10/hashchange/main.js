/* global state, queryString, renderPokedex */

renderApp(state)

function renderApp(state) {
  var $app = document.querySelector('#app')
  $app.innerHTML = ''
  $app.appendChild(renderPokedex(state.pokedex, state.type))
}

window.addEventListener('hashchange', function () {
  if (location.hash !== '') {
    state.type = queryString.parse(location.hash).type
    renderApp(state)
  }
  else {
    state.type = ''
    renderApp(state)
  }
})

window.dispatchEvent(new Event('hashchange'))
