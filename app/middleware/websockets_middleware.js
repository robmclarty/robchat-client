import {
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} from '../constants/action_types'

let socket = null

const websocketsMiddleware = store => next => action => {
  const result = next(action)

  console.log('dispatching: ', action)

  if (socket) {
    switch (action.type) {
    case SEND_MESSAGE:
      socket.send(JSON.stringify({
        type: 'message',
        data: action.body
      }))
    case RECEIVE_MESSAGE:
      console.log('got message')
    default:
      // do nothing
    }
  }

  return result
}

export default websocketsMiddleware
