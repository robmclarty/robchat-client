import {
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} from '../constants/action_types'

const initialState = {
  messages: []
}

const chat = (state = initialState, action) => {
  switch (action.type) {
  case SEND_MESSAGE:
    return {
      ...state,
      messages: [
        ...state.messages,
        {
          body: action.body,
          username: action.username,
          createdAt: action.createdAt
        }
      ]
    }
  case RECEIVE_MESSAGE:
    return {
      ...state,
      messages: [
        ...state.messages,
        {
          body: action.body,
          username: action.username,
          createdAt: action.createdAt
        }
      ]
    }
  default:
    return state
  }
}

export default chat
