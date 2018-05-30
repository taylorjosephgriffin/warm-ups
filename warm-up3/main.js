let stopWatch = {
  timeLimit: 10,
  timeElapsed: 9,
  isStarted: false
}

function renderStopWatch(stopWatch) {
  const $container = document.createElement('div')
  const $timeElapsed = document.createElement('h1')
  const $button = document.createElement('button')

  stopWatch.timeLimit === stopWatch.timeElapsed ? $button.textContent = 'Reset' : false
  stopWatch.isStarted === false && stopWatch.timeLimit !== stopWatch.timeElapsed ? $button.textContent = 'Start' : false
  stopWatch.timeLimit !== stopWatch.timeElapsed && stopWatch.isStarted ? $button.textContent = 'Pause' : false

  stopWatch.timeLimit === stopWatch.timeElapsed ? $timeElapsed.className = 'time-elapse is-expired' : $timeElapsed.className = 'time-elapsed'

  $container.appendChild($timeElapsed)
  $container.appendChild($button)

  return $container
}
