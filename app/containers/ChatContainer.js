import { connect } from 'react-redux'
import Chat from '../components/Chat'
import { sendMessage } from '../actions'

const mapStateToProps = state => ({
  messages: state.chat.messages
})

const mapDispatchToProps = dispatch => ({
  handleMessage: input => dispatch(sendMessage({
    username: input.username,
    body: input.body,
    createdAt: input.createdAt
  }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
