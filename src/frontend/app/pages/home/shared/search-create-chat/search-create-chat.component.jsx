import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import AutoComplete from 'material-ui/AutoComplete'

import './search-create-chat.component.scss'
import { MenuItem } from 'material-ui';

export class SearchCreateChatComponent extends Component {
  constructor(props) {
    super(props)

    this.rooms = this.props.rooms
    this.state = {
      sourceData: this.prepareSourceData(this.rooms),
    }
  }

  render() {

    console.log('Search state', this.state);

    return(
      <div className="search-create-chat">

        <Paper zDepth={1} className="animated bounceInLeft">
          <Subheader>Search & Create Rooms</Subheader>

          <div className="search-create-chat__input-wrapper">
            <AutoComplete
              hintText="Start input room id or title"
              onNewRequest={ this.onNewRequestHandler.bind(this) }
              onUpdateInput={ this.onUpdateInputHandler.bind(this) }
              fullWidth={true}
              dataSource={this.state.sourceData}
            />
          </div>

        </Paper>

      </div>
    )
  }

  prepareSourceData(rooms = []) {
    return rooms.map((room) => {
      return {
        room: room,
        text: room.text,
        value: (
          <MenuItem
            primaryText={room.text}
            secondaryText="&#9786;"
          />
        ),
      }
    })
  }

  onNewRequestHandler(choosenRequest = '', index = -1) {
    if(index !== -1) {
      const room = this.rooms[index].room

      this.props.setCurrentRoom(room)
      this.props.routeToRoom(room)
    }
  }

  onUpdateInputHandler(searchText, dataSource, params) {
    console.log('onUpdateInputHandler', {searchText, dataSource, params})
    this.props.searchRoomHandler(searchText)
  }
}

SearchCreateChatComponent.propTypes = {
  socket: PropTypes.object,
}