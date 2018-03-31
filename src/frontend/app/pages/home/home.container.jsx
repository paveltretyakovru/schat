import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import * as homeActions from './home.actions'

import {SearchCreateChatComponent} from './shared/search-create-chat/search-create-chat.component'

class HomeContainer extends Component {
  static path = '/'

  render() {
    return(
      <div className="home-container">
        <SearchCreateChatComponent />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ app: state.app })
const mapDispatchToProps = (dispatch) => ({
  homeActions: bindActionCreators(homeActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)