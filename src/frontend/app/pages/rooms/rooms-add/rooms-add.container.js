import { connect } from 'react-redux';
import STextField from 'app/shared/form/STextField';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {Card, CardActions, CardText} from 'material-ui/Card';

// Actions
import * as AppActions from '../../../app.actions';
import * as HeaderActions from '../../../shared/header/header.actions';
import * as RoomsActions from '../rooms.actions';

// Components
import HeaderButtonCloseContainer from './shared/header-buttons/header-button-close.container';

// Style sheets
import './rooms-add.container.css';

// Array for generating add room form
const fieldsData = [
  {
    name: 'key',
    // required: true,
    fullWidth: true,
    hintText: 'Password to encrypting',
  },
  {
    name: 'title',
    required: true,
    fullWidth: true,
    hintText: 'Room title for your rooms list',
  },
];

class RoomAddContainer extends Component {
  static path = '/rooms/add';

  componentWillMount() {
    this.props.setHeaderButtons(
      <HeaderButtonCloseContainer />,
    );
    this.props.headerActions.updateHeaderTitle('Add Room');
  }

  render() {

    this.fieldsComponents = fieldsData.map(fieldData => {
      return (
        <STextField
          {...fieldData}
          key={fieldData.name}
          ref={fieldData.name}
        />
      )
    });

    return (
      <div className="animated fadeInLeft rooms-add__create-wrapper">
        <div className="">
          <Card className="rooms-add__invite-block">

            <CardText>
              <STextField
                name="roomId"
                required={true}
                fullWidth={true}
                hintText="Chat room ID"
              />
              <STextField
                name="key"
                required={true}
                fullWidth={true}
                hintText="Chat room Key"
              />
            </CardText>

            <CardActions>
              <FlatButton
                label = "Connect to existing chat room"
                primary = { true }
                onTouchTap = { this.handleSaveClick.bind(this) }
              />
            </CardActions>
          </Card>
        </div>
        <div>        
          <Card className="rooms-add__create-block">
            <CardText>{ this.fieldsComponents }</CardText>

            <CardActions id="room-add-form-buttons">
              <FlatButton
                label = "Create"
                primary = { true }
                onTouchTap = { this.handleSaveClick.bind(this) }
              />

              <FlatButton
                label = "Random"
                secondary = { true }
                onTouchTap = { this.handleClickGenerateRandomData.bind(this) }
              />
            </CardActions>
          </Card>
        </div>

      </div>
    );
  }

  // ============================ Handlers ====================================
  handleClickGenerateRandomData() {
    return this.generateRandomFieldsValues();
  }

  handleSaveClick() {
    let data = {};
    let validateFlag = true;
    this.prepareAllFields(field => {
      if(!field.validate()) {
        validateFlag = false;
      }
      data[field.props.name] = field.getValue();
    });

    return (validateFlag) ? this.props.roomsActions.addRoom(data) : false;
  }

  // ============================ Helpers methods =============================
  generateRandomFieldsValues() {
    this.prepareAllFields(field => {
      field.setRandomValue(5);
    });
  }

  prepareAllFields(callback) {
    for(let i = 0; i < fieldsData.length; ++i) {
      let field = this.refs[fieldsData[i].name];
      callback(field);
    }
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
    roomsActions: bindActionCreators(RoomsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomAddContainer);
