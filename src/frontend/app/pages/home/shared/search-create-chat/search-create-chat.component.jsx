import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import AutoComplete from 'material-ui/AutoComplete';

import {SERVER_HOST} from '../../../../app.constants'

import './search-create-chat.component.scss'
import { MenuItem } from 'material-ui';

export class SearchCreateChatComponent extends Component {
  constructor(props) {
    super(props)

    this.rooms = this.props.rooms
  }

  componentDidMount() {
    console.log('search crate', {socket: this.props.socket})
  }

  render() {
    console.log('Search crate chat component render', { rooms: this.props.rooms })

    return(
      <div className="search-create-chat">

        <Paper zDepth={1}>
          <Subheader>Search & Create Rooms</Subheader>

          <div className="search-create-chat__input-wrapper">
            <AutoComplete
              hintText="Start input room id or title"
              onNewRequest={ this.onNewRequestHandler.bind(this) }
              onUpdateInput={ this.onUpdateInputHandler.bind(this) }
              fullWidth={true}
              dataSource={this.props.rooms.map((room) => {
                return {
                  text: room.title,
                  value: (
                    <MenuItem
                      primaryText={room.title}
                      secondaryText="&#9786;"
                    />
                  ),
                }
              })}
            />
          </div>

        </Paper>

      </div>
    )
  }

  onNewRequestHandler(chosenRequest = '', index = -1) {
    console.log('onNewRequestHandler', { chosenRequest, index })

    const toSearch = (chosenRequest.hasOwnProperty('text'))
      ? chosenRequest.text
      : chosenRequest

    if (index === -1) {
      // Creating room

    } else {
      // Geting existing room
      Axios.get(`${SERVER_HOST}/rooms/${toSearch}`)
      .then((res) => {
        console.log('Axios res', res.data)
      })
    }
  }

  onUpdateInputHandler(searchText, dataSource, params) {
    console.log('onUpdateInputHandler', {searchText, dataSource, params})
  }
}

SearchCreateChatComponent.propTypes = {
  socket: PropTypes.object,
}