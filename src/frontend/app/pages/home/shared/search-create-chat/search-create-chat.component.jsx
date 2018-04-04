import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import AutoComplete from 'material-ui/AutoComplete'

import './search-create-chat.component.scss'
import { MenuItem, ListItem } from 'material-ui';

export class SearchCreateChatComponent extends Component {
  constructor(props) {
    super(props)

    this.rooms = this.props.rooms
    this.state = {
      searchText: '',
      sourceData: this.prepareSourceData(this.rooms),
    }
  }

  render() {
    return(
      <div className="search-create-chat">

        <Paper zDepth={1} className="animated bounceInLeft">
          <Subheader>Search & Create Rooms</Subheader>

          <div className="search-create-chat__input-wrapper">
            <AutoComplete
              hintText="Search or crate chat room"
              fullWidth={true}
              dataSource={this.state.sourceData}
              onNewRequest={ this.onNewRequestHandler.bind(this) }
              onUpdateInput={ this.onUpdateInputHandler.bind(this) }
              // floatingLabelText="Search or crate chat room"
            />
          </div>

          {
            (this.props.searchResult.length > 0)
              ? (
                <div className="search-create-chat__search-result">
                  <Subheader>Search reasult</Subheader>
                  {
                    this.props.searchResult.map((item) => {
                      return (
                        <ListItem
                          key={item.id}
                          primaryText={ item.title }
                        />
                      )
                    })
                  }
                </div>
              )
              : null
          }

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

  prepareSearchField() {
    const sourceData = this.state.sourceData
    const searchDataSourceFiled = {
      room: null,
      text: this.state.searchText,
      value: (
        <MenuItem
          primaryText={`Search: ${this.state.searchText}`}
          secondaryText="&#9786;"
        />
      ),
    }

    if (sourceData[sourceData.length - 1].room === null) {
      sourceData[sourceData.length - 1] = searchDataSourceFiled
    } else {
      sourceData[sourceData.length] = searchDataSourceFiled
    }

    this.setState({ ...this.state, sourceData: sourceData })
  }

  onNewRequestHandler(choosenRequest = '', index = -1) {
    if (index !== -1 ) {
      if (choosenRequest.room !== null) {
        console.log('New search handler', choosenRequest)        

        const room = choosenRequest.room.room

        this.props.setCurrentRoom(room)
        this.props.routeToRoom(room)
      } else {
        console.log('New search handler', choosenRequest)
        this.props.searchRoomHandler(choosenRequest.text)
      }
    }
  }

  onUpdateInputHandler(searchText) {
    this.setState({ ...this.state, searchText: searchText }, () => {
      this.prepareSearchField()
    })
  }
}

SearchCreateChatComponent.propTypes = {
  socket: PropTypes.object,
}