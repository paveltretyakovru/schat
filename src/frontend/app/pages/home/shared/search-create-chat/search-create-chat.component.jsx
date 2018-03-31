import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import {TextField} from 'material-ui'

import {SERVER_HOST} from '../../../../app.constants'

import './search-create-chat.component.scss'

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
            <TextField
              hintText="Start input room id or title"
              onChange={ (e, q) => this.onChangeHandler(q) }
              fullWidth={true}
              // floatingLabelText="Search or create chat room..."
            />
          </div>

        </Paper>

      </div>
    )
  }

  onChangeHandler(query = '') {
    console.log('Axios', Axios)
    Axios.get(`${SERVER_HOST}/rooms/${query}`)
  }
}

SearchCreateChatComponent.propTypes = {
  socket: PropTypes.object,
}