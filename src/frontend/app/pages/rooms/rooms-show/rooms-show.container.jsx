// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';


// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import RoomsShowChatMessagesComponent from './shared/rooms-show-chat-messages.component';
import RoomsShowMessageFieldComponent from './shared/rooms-show-message-field.component';

import './rooms-show.container.css';

class RoomsShowContainer extends Component {
  static path = '/rooms/:id'
  
  componentWillMount() {
    this.room = this.getRoom()
    this.props.roomsActions.setCurrentRoom(this.room)
    this.props.headerActions.updateHeaderTitle(this.room.title)

    console.log('Component will mount', { room: this.room, props: this.props })
  }

  // TODO: componentUnmounted -> remove controlKey | fixed

  render() {
    if(!this.room) {
      return(<span>404. The chat was not founded.</span>);
    }

    return(
      <div className="rooms-show__container">
        <RoomsShowChatMessagesComponent
          room={this.room || null}
          roomId={this.room.id}
          messages={this.room.messages || null}
        />

        <RoomsShowMessageFieldComponent
          room={this.room}
          addMessageHandler={this.props.roomsActions.addMessage}
          sendMessageHandler={this.props.sendMessage}
        />
      </div>
    );
  }

  getRoom() {
    return this.props.rooms.list.find(element => {
      return element.id === this.props.match.params.id
    })
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    rooms: state.rooms,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    sendMessage: RoomsActions.sendMessage,
    roomsActions: bindActionCreators(RoomsActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsShowContainer);
