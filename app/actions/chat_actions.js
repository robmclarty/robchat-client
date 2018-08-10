import {
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} from '../constants/action_types'

export const sendMessage = ({
  username,
  body,
  createdAt
}) => ({
  type: SEND_MESSAGE,
  username,
  body,
  createdAt
})

export const receiveMessage = ({
  username,
  body,
  createdAt
}) => ({
  type: RECEIVE_MESSAGE,
  username,
  body,
  createdAt
})
