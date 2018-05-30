let stopWatch = {
  timeLimit: 10,
  timeElapsed: 10,
  isStarted: true
}

function renderStopWatch(stopWatch) {
  let $container = document.createElement('div')
  let $timeElapsed = document.createElement('h1')
  let $button = document.createElement('button')

  $timeElapsed.innerHTML = stopWatch.timeElapsed
  if (stopWatch.timeLimit === stopWatch.timeElapsed && stopWatch.isStarted) {
    $button.innerHTML = 'Reset'
  }
  else if (!stopWatch.isStarted) {
    $button.innerHTML = 'Start'
  }
  else if (stopWatch.timeLimit !== stopWatch.timeElapsed && stopWatch.isStarted) {
    $button.innerHTML = 'Pause'
  }

  if (stopWatch.timeLimit === stopWatch.timeElapsed && stopWatch.isStarted) {
    $timeElapsed.className = 'time-elapsed is-expired'
  }
  else {
    $timeElapsed.className = 'time-elapsed'
  }

  $container.appendChild($timeElapsed)
  $container.appendChild($button)

  console.log($container)
}
