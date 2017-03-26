// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// actions
import * as AppActions from 'app/app.actions';
import * as RoomsActions from '../rooms.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import RoomsShowKeyFieldComponent from './shared/rooms-show-key-field.component';
import RoomsShowMessageFieldComponent from './shared/rooms-show-message-field.component';

import './rooms-show.container.css';

class RoomsShowContainer extends Component {
  static path = '/rooms/:id'

  componentWillMount() {
    this.props.setHeaderButtons(null, null);
  }

  render() {
    let roomId = this.props.params.id;

    return(
      <div className="animated fadeInLeft row center-xs" id="rooms-show-wrapper">
        <div className="col-xs-11"  id="rooms-show-container">
          <div id="rooms-show-key-field-container">
            <RoomsShowKeyFieldComponent roomId={roomId} />
          </div>

          <div id="rooms-show-messages-container">
            If you’d like, you may add another store enhancer called persistState(). It ships with this package, and it lets you serialize whole sessions (including all dispatched actions and the state of the monitors) by a URL key. So if you visit http://localhost:3000/?debug_session=reproducing_weird_bug, do something in the app, then open http://localhost:3000/?debug_session=some_other_feature, and then go back to http://localhost:3000/?debug_session=reproducing_weird_bug, the state will be restored. The implementation of persistState() is fairly naïve but you can take it as an inspiration and build a proper UI for it if you feel like it!
          </div>

          <div id="rooms-show-message-text-field">
            <RoomsShowMessageFieldComponent />
          </div>
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
