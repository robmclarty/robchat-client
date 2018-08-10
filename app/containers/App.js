import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ChatContainer from './ChatContainer'

const App = ({ isAuthenticated }) => (
  <div className="app-container robchat">
    <header>Robchat</header>

    <main>
      <ChatContainer />
    </main>
  </div>
)

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer
