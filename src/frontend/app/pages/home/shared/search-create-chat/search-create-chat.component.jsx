import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete'
import { MenuItem, ListItem } from 'material-ui';

import './search-create-chat.component.scss'

export class SearchCreateChatComponent extends Component {
  constructor(props) {
    super(props)

    this.rooms = this.props.rooms
    this.state = {
      searchText: '',
      sourceData: this.prepareSourceData(this.rooms),
    }
  }

  componentWillUpdate() {
    if (
      this.state.searchText.length === 0
      && this.props.searchResult.length > 0
    ) {
      this.props.roomsActions.clearSearchRoomsResult()
    }
  }

  render() {
    const { addRoom } = this.props.roomsActions

    const craeteButton = (title) => {
      return (
        <div className="search-create-chat__create-room">
          <div className="search-create-chat__create-room-desc">
            Nothing founded
          </div>

          <FlatButton
            label={`create ${title} room`}
            secondary={true}
            onTouchTap={ addRoom.bind(this, {title: title}) }
            className="search-create-chat__create-room-button"
          />
        </div>
      )
    }

    return(
      <div className="search-create-chat">

        <Paper
          zDepth={1}
          className="animated bounceInLeft search-create-chat__paper"
        >
          <Subheader>Search & Create Rooms</Subheader>

          <div className="search-create-chat__input-wrapper">
            <AutoComplete
              hintText="ID or Title chat room"
              fullWidth={true}
              dataSource={this.state.sourceData}
              onNewRequest={ this.onNewRequestHandler.bind(this) }
              onUpdateInput={ this.onUpdateInputHandler.bind(this) }
            />
          </div>

          {
            (() => {
              if (
                this.props.searchResult.length > 0
                && this.state.searchText.length !== 0
              ) {
                return (
                  <div className="search-create-chat__search-result">
                    <Subheader>
                      Search reasult for
                      <span className="search-create-chat__search-result-query">
                        {this.state.searchText}:
                      </span>
                    </Subheader>
                    {
                      (() => {
                        if (
                          this.props.searchResult.length === 1
                          && this.props.searchResult[0].id === 0
                        ) {
                          return craeteButton(this.props.searchResult[0].title)
                        } else {
                          return this.props.searchResult.map((item, index) => {
                            return (
                              (item.id !== 0)
                                ? (
                                  <ListItem
                                    key={index}
                                    primaryText={ item.title }
                                    onTouchTap={
                                      this.onClickSearchItem.bind(this, item)
                                    }
                                  />
                                ) : craeteButton(item.title)
                            )
                          })
                        }
                      })()
                      
                    }
                  </div>
                )
              }
            })()
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
        const room = choosenRequest.room.room

        this.props.roomsActions.setCurrentRoom(room)
        this.props.roomsActions.routeToRooms(room)
      } else {
        this.props.roomsActions.searchRoom(choosenRequest.text)
      }
    }
  }

  onUpdateInputHandler(searchText) {
    this.setState({ ...this.state, searchText: searchText }, () => {
      this.prepareSearchField()
    })
  }

  onClickSearchItem(room) {
    this.props.roomsActions.setCurrentRoom(room)
    this.props.roomsActions.routeToRooms(room)
  }
}

SearchCreateChatComponent.propTypes = {
  socket: PropTypes.object,
}