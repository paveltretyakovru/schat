// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';


// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import ButtonFavorComponent from '../../../shared/buttons/button-favor.component';
// import RoomsShowKeyFieldComponent from './shared/rooms-show-key-field.component';
import RoomsShowChatMessagesComponent from './shared/rooms-show-chat-messages.component';
import RoomsShowMessageFieldComponent from './shared/rooms-show-message-field.component';

import './rooms-show.container.css';

class RoomsShowContainer extends Component {
  static path = '/rooms/:id'
  
  componentWillMount() {
    const room = this.getRoom()
    const routeToSettings = this.props.roomsActions.routeToRoomSettings.bind(this, room.roomId)
    this.props.roomsActions.setCurrentRoom(room)

    this.props.setHeaderButtons(
      null,
      <ButtonFavorComponent
        active={room.roomData.favor}
        handleClick={() => {
          this.props.roomsActions.toogleRoomFavor(room.roomId)
          return room.roomData.favor
        }} 
      />
    );

    this.props.headerActions.updateHeaderTitle(
      <span onTouchTap={ routeToSettings } className="rooms-show__header-title">
        { room.roomData.title }
      </span>
    );
  }

  // TODO: componentUnmounted -> remove controlKey | fixed

  render() {
    const { roomId, roomData } = this.getRoom();

    if(!roomData) {
      return(<span>404. The chat was not founded.</span>);
    }

    return(
      <div className="rooms-show__container">
        {/* <RoomsShowKeyFieldComponent
          room={roomData || null}
          roomId={roomId}
          handleUpdateKey={this.props.roomsActions.updateKey}
        /> */}
        <RoomsShowChatMessagesComponent
          room={roomData || null}
          roomId={roomId}
          messages={roomData.messages || null}
        />

        <RoomsShowMessageFieldComponent
          room={roomData}
          addMessageHandler={this.props.roomsActions.addMessage}
          sendMessageHandler={this.props.sendMessage}
        />
      </div>
    );
  }

  getRoom() {
    return {
      roomId: this.props.params.id || false,
      roomData: this.props.rooms.list.find(element => {
        return element.id === this.props.params.id;
      }),
    }
  }
}

function mapStateToProps(state) {
  return {
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
