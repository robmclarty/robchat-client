import { receiveMessage } from '../actions'

const onOpen = (dispatch, getState, socket) => e => {
  socket.send(JSON.stringify({
    type: 'connect',
    username: 'rob'
  }))

  console.log('opened: ', socket, e)
}

const onClose = (dispatch, getState, socket) => e => {
  console.log('closed: ', socket, e)
}

const onMessage = (dispatch, getState, socket) => msg => {
  console.log('received: ', msg)

  switch (msg.type) {
  case 'connected':
    break
  case 'authenticated':
    console.log('authenticated msg: ', msg)
    break
  case 'unauthorized':
    console.log('not authorized to connect to this resource', msg)
    socket.close()
    break
  case 'message':
    const json = JSON.parse(msg.data)

    console.log('json: ', json)

    dispatch(receiveMessage({
      username: json.username,
      body: json.body,
      createdAt: json.createdAt
    }))
  default:
    // do nothing
  }
}

const init = (dispatch, getState, socket) => ({
  onOpen: onOpen(dispatch, getState, socket),
  onClose: onClose(dispatch, getState, socket),
  onMessage: onMessage(dispatch, getState, socket)
})

export default init
