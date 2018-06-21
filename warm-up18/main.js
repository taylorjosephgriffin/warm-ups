function createEmitter() {

  let listeners = {}

  return {
    on: (eventType, listener) => {
      listeners[eventType] = listeners[eventType] || []
      listeners[eventType].push(listener)
      console.log(listeners)
    },
    emit: (eventType, payload) => {
      if (!listeners[eventType]) return
      listeners[eventType].forEach((listener) => listener(payload))
    }
  }
}

const emitter = createEmitter()
