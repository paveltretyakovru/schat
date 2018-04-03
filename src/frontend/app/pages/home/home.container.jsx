import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import {HOME_ROUTE} from './home.constants'
import * as homeActions from './home.actions'
import * as roomsActions from '../rooms/rooms.actions'
import {SearchCreateChatComponent} from './shared/search-create-chat/search-create-chat.component'
import RoomsListContainer from '../rooms/rooms-list/rooms-list.container';

class HomeContainer extends Component {
  static path = HOME_ROUTE

  render() {
    return(
      <div className="home-container">
        <SearchCreateChatComponent
          rooms={ this.prepareRoomsList(this.props.rooms.list) }
          socket={ this.props.app.socket }
          setCurrentRoom={this.props.roomsActions.setCurrentRoom.bind(this)}
          routeToRoom={this.props.roomsActions.routeToRooms.bind(this)}
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
        room: room,
        text: room.title,
      }
    })
  }

  crateRoomHandler() {

  }

  searchRoomHandler(query = '') {
    this.props.roomsActions
      .searchRoom(query)
        .then((res) => {
          console.log('Test to get promise --->', res);
        })
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  rooms: state.rooms,
})

const mapDispatchToProps = (dispatch) => ({
  homeActions: bindActionCreators(homeActions, dispatch),
  roomsActions: bindActionCreators(roomsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)