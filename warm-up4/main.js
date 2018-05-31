var stopWatch = {
  isStarted: false,
  timeElapsed: 0,
  timeLimit: 0
}

var isStarted = stopWatch.isStarted
var timeLimit = stopWatch.timeLimit
var timeElapsed = stopWatch.timeElapsed
var isExpired = timeElapsed >= timeLimit
var isPaused = !isStarted && timeElapsed > 0

var timeElapsedClass = isExpired
  ? 'time-elapsed is-expired'
  : 'time-elapsed'
var startText = isPaused ? 'Start' : 'Pause'
var resetClass = isPaused ? 'reset' : 'reset hidden'

function createElement(tagName, attributes, children) {
  var $newElement = document.createElement(tagName)
  for (var key in attributes) {
    $newElement.setAttribute(key, attributes[key])
  }
  for (var i = 0; i < children.length; i++) {
    if(children[i] instanceof Node) {
      $newElement.appendChild(children[i])
    }
    else {
      $newElement.textContent = children[i]
    }
  }
  return $newElement
}

var $stopWatch =
  createElement('div', { class: 'stop-watch' }, [
    createElement('h1', { class: timeElapsedClass }, [timeElapsed]),
    createElement('div', { class: 'controls' }, [
      createElement('button', { class: 'start' }, [startText]),
      createElement('button', { class: resetClass }, ['Reset']),
      createElement('hr', {}, []),
      createElement('form', {}, [
        createElement('input', { type: 'number', value: timeLimit }, []),
        createElement('button', { type: 'submit' }, ['Set Limit'])
      ])
    ])
  ])
