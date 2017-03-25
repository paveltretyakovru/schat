// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// material-ui
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import ButtonMenuComponent from 'app/shared/buttons/button-menu.component';
import ButtonFloatAddComponent from 'app/shared/buttons/button-float-add.component';

import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Clear</MenuItem>
    <MenuItem>Config</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class RoomsListContainer extends Component {
  static path = '/rooms'

  componentWillMount() {
    this.props.setHeaderButtons(<ButtonMenuComponent />, null);
    this.props.headerActions.updateHeaderTitle('Encrypted chat');
  }

  render() {
    const { routeToAddRoom } = this.props.roomsActions;

    const roomsItems = this.props.rooms.list.map((item, index) => {
      return <ListItem
        key={index}
        onClick={() => this.handleClickListItem(index)}
        primaryText={item.title}
        leftIcon={ <CommunicationChatBubble color={ grey400 }/> }
        rightIconButton={ rightIconMenu }
      />
    })

    return(
      <div style={{position: 'relative'}}>
        <List className="animated fadeInLeft">
          <Subheader>Rooms list</Subheader>
          { roomsItems }
        </List>

        <ButtonFloatAddComponent handleAction={routeToAddRoom} />
      </div>
    );
  }

  handleClickListItem(index) {
    this.props.roomsActions.routeToRoom(index);
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
    roomsActions: bindActionCreators(RoomsActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsListContainer);
