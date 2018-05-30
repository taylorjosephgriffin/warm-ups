let stopWatch = {
  timeLimit: 10,
  timeElapsed: 9,
  isStarted: true
}

function renderStopWatch(stopWatch) {
  const $container = document.createElement('div')
  const $timeElapsed = document.createElement('h1')
  const $button = document.createElement('button')

  var isExpired = stopWatch.timeElapsed >= stopWatch.timeLimit

  if (isExpired) {
    $button.textContent = 'Reset'
    $timeElapsed.className = 'time-elapsed is-expired'
  }
  else if (stopWatch.isStarted && !isExpired) {
    $button.textContent = 'Pause'
    $timeElapsed.className = 'time-elapsed'
  }
  else {
    $button.textContent = 'Start'
    $timeElapsed.className = 'time-elapsed'
  }

  $container.appendChild($timeElapsed)
  $container.appendChild($button)

  return $container
}
