import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import {HOME_ROUTE} from './home.constants'
import * as appActions from '../../app.actions'
import * as homeActions from './home.actions'
import * as roomsActions from '../rooms/rooms.actions'
import {SearchCreateChatComponent} from './shared/search-create-chat/search-create-chat.component'
import RoomsListContainer from '../rooms/rooms-list/rooms-list.container';

class HomeContainer extends Component {
  static path = HOME_ROUTE
  
  constructor(props) {
    super(props)

    this.props.appActions.updateHeaderTitle()
  }

  render() {
    return(
      <div className="home-container">
        <SearchCreateChatComponent
          rooms={ this.prepareRoomsList(this.props.rooms.list) }
          // socket={ this.props.app.socket }
          searchResult= { this.props.rooms.searchResult }
          roomsActions={this.props.roomsActions}
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
}

const mapStateToProps = (state) => ({
  app: state.app,
  rooms: state.rooms,
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch),
  homeActions: bindActionCreators(homeActions, dispatch),
  roomsActions: bindActionCreators(roomsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)