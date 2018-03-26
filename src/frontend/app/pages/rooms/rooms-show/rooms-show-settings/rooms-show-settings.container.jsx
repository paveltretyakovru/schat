import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import * as RoomsActions from '../../rooms.actions';
import * as HeaderActions from '../../../../shared/header/header.actions';
import {ButtonBackToComponent} from '../../../../shared/buttons/button-back-to.component';

import './rooms-show-settings.container.css'

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
      <Card className="animated bounceInRight rooms-settings__paper">
        <CardHeader title="Room settings" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
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