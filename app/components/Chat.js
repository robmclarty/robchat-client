import React from 'react'
import PropTypes from 'prop-types'

const component = { ...React.Component.prototype }

const refs = {
  msgInputRef: React.createRef()
}

const onSubmit = e => {
  e.preventDefault()

  const input = component.msgInputRef.current

  if (input.value) {
    component.props.handleMessage({
      body: input.value,
      username: 'rob',
      createdAt: Date.now()
    })
    input.value = ''
  }
}

const render = () => {
  let prevUsername = ''

  return (
    <div className="chat" ref="container">
      <ul id="messages" ref="messages" className="chat-messages">
        {component.props.messages.map((msg, index) => {
          const isSameUser = prevUsername === msg.username

          prevUsername = msg.username

          return (
            <li key={index}>
              {!isSameUser &&
                <div className="message-meta">
                  <b>{ msg.username }</b>
                  <span>{ msg.createdAt }</span>
                </div>
              }
              <div className="message-body">{ msg.body }</div>
            </li>
          )
        })}
      </ul>

      <form onSubmit={ onSubmit } className="chat-form">
        <input
            className="chat-input"
            type="text"
            id="msg"
            ref={ component.msgInputRef }
            placeholder="Type a message here"
            autoComplete="off"
        />
      </form>
    </div>
  )
}

const Chat = (props, context) => {
  Chat.displayName = 'Chat'
  Chat.propTypes = {
    handleMessage: PropTypes.func,
    messages: PropTypes.array
  }
  Chat.defaultProps = {
    messages: []
  }

  return Object.assign(component, {
    props,
    context,
    ...refs,
    render
  })
}

export default Chat
