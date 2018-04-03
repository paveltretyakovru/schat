import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import {HOME_ROUTE} from './home.constants'
import * as homeActions from './home.actions'
import {SearchCreateChatComponent} from './shared/search-create-chat/search-create-chat.component'
import RoomsListContainer from '../rooms/rooms-list/rooms-list.container';

class HomeContainer extends Component {
  static path = HOME_ROUTE

  render() {
    return(
      <div className="home-container">
        <SearchCreateChatComponent
          rooms={ this.prepareRoomsList(this.props.rooms.list) }
          createRoomHandler={this.crateRoomHandler.bind(this)}
          searchRoomHandler={this.searchRoomHandler.bind(this)}
        />

        <RoomsListContainer />
      </div>
    )
  }

  prepareRoomsList(rooms = []) {
    return rooms.map((room) => {
      return {
        id: room.id,
        text: room.title,
      }
    })
  }

  crateRoomHandler() {

  }

  searchRoomHandler() {

  }
}

const mapStateToProps = (state) => ({ app: state.app, rooms: state.rooms })
const mapDispatchToProps = (dispatch) => ({
  homeActions: bindActionCreators(homeActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)