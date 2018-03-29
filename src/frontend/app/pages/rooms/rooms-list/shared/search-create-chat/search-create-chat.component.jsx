import { TextField } from 'material-ui'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';

import './search-create-chat.component.css'
import {SERVER_HOST} from '../../../../../app.constants'

export class SearchCreateChatComponent extends Component {
  componentDidMount() {
    console.log('search crate', {socket: this.props.socket})
  }

  render() {
    return(
      <div className="search-create-chat">
        <TextField
          hintText="ID to connect or title to create chat"
          onChange={ (e, q) => this.onChangeHandler(q) }
          fullWidth={true}
          floatingLabelText="Search or create chat room..."
        />
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