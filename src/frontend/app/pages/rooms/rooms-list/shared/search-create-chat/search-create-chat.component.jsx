import React, {Component} from 'react'
import { TextField } from 'material-ui'

import './search-create-chat.component.css'

export class SearchCreateChatComponent extends Component {
  render() {
    return(
      <div className="search-create-chat">
        <TextField
          hintText="Enter ID to connect or title to create new chat"
          fullWidth={true}
          floatingLabelText="Search or create chat room..."
        />
      </div>
    )
  }
}