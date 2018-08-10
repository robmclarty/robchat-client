import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import websocketsMiddleware from './middleware/websockets_middleware'
import appReducer from './reducers'
import App from './containers/App'

const store = createStore(appReducer, applyMiddleware(websocketsMiddleware))

// --------------------------------------

import initSocketEvents from './sockets'

const socket = new WebSocket('ws://localhost:3000/chat')

const {
  onOpen,
  onClose,
  onMessage
} = initSocketEvents(store.dispatch, store.getState, socket)

socket.onopen = onOpen
socket.onclose = onClose
socket.onmessage = onMessage

// --------------------------------------

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('robchat-app')
)
