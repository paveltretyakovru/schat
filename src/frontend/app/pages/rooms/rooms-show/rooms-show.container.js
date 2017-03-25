// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Material-ui components
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import RoomsShowKeyFieldComponent from './shared/rooms-show-key-field.component';

import './rooms-show.container.css';

class RoomsShowContainer extends Component {
  static path = '/rooms/:id'

  componentWillMount() {
    this.props.setHeaderButtons(null, null);
  }

  render() {
    let roomId = this.props.params.id;

    return(
      <div className="animated fadeInLeft row" id="rooms-show-container">

          <div className="col-md-3 col-xs-3">
            <List>
              <RoomsShowKeyFieldComponent roomId={roomId} />
              <Subheader>Recent chats</Subheader>
              <ListItem primaryText="Brendan Lim"/>
            </List>
          </div>

          <div className="col-md-9 col-xs-9">
            
            {/* Chat body row */}
            <div className="row" id="chat-body-container">
              <div className="col-md-12 col-xs-12">
                <div>
                  Chat body
                </div>
              </div>

              <div className="col-md-12 col-xs-12">
                <div>
                  INPUT
                </div>
              </div>
            </div>

            {/* Chat input row */}
            {/*<div className="row">
              
            </div>*/}
            
          </div>

      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomsShowContainer);
