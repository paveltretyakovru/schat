import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as RoomsActions from '../../rooms.actions';
import * as HeaderActions from '../../../../shared/header/header.actions';
import {ButtonBackToComponent} from '../../../../shared/buttons/button-back-to.component';

class RoomsShowSettingsContainer extends Component {
  static path = '/rooms/:id/settings'

  componentWillMount() {
    const room = this.props.rooms.list.find(e => e.id === this.props.params.id)

    this.props.headerActions.updateHeaderTitle(
      <span
        onClick={ this.props.roomsActions.routeToRooms.bind(this, room) }
        className="rooms-show__header-title"
      >{room.title}</span>
    )

    this.props.setHeaderButtons(
      null,
      <ButtonBackToComponent
        routeHandler={() => {
          this.props.roomsActions.routeToRooms(room)
        }}
      />
    );
  }

  render() {
    return(
      <div>
        Room settings
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    roomsActions: bindActionCreators(RoomsActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsShowSettingsContainer);