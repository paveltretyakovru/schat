import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import AutoComplete from 'material-ui/AutoComplete';

import {SERVER_HOST} from '../../../../app.constants'

import './search-create-chat.component.scss'
import { MenuItem } from 'material-ui';

const dataSource = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
]

export class SearchCreateChatComponent extends Component {
  componentDidMount() {
    console.log('search crate', {socket: this.props.socket})
  }

  render() {
    return(
      <div className="search-create-chat">

        <Paper zDepth={1}>
          <Subheader>Search & Create Rooms</Subheader>

          <div className="search-create-chat__input-wrapper">
            <AutoComplete
              hintText="Start input room id or title"
              onNewRequest={ this.onNewRequestHandler.bind(this) }
              fullWidth={true}
              dataSource={dataSource}
            />
          </div>

        </Paper>

      </div>
    )
  }

  onNewRequestHandler(query = '') {
    const toSearch = query.text !== undefined ? query.text : query
    
    console.log('Axios update handler', toSearch)
    
    Axios.get(`${SERVER_HOST}/rooms/${toSearch}`)
      .then((res) => {
        console.log('Axios res', res.data)
      })
  }
}

SearchCreateChatComponent.propTypes = {
  socket: PropTypes.object,
}