import { connect } from 'react-redux';
import STextField from 'app/shared/form/STextField';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Actions
import * as AppActions from '../../../app.actions';
import * as HeaderActions from '../../../shared/header/header.actions';
import * as RoomsActions from '../rooms.actions';

// Helpers
// import makeId from '../../../../../shared/makeId';

// Components
import HeaderButtonCloseContainer from './shared/header-buttons/header-button-close.container';
import { HeaderButtonSaveComponent } from './shared/header-buttons/header-button-save.component';

// Style sheets
import './rooms-add.container.css';

// Array for generating add room form
const fieldsData = [
  {
    name: 'key',
    // required: true,
    fullWidth: true,
    floatingLabelText: 'Room Key to encrypt your messages',
    floatingLabelFixed: true,
  },
  {
    name: 'title',
    required: true,
    fullWidth: true,
    floatingLabelText: 'Room title for your rooms list',
    floatingLabelFixed: true,      
  },
];

class RoomAddContainer extends Component {
  static path = '/rooms/add';

  componentWillMount() {
    this.props.setHeaderButtons(
      <HeaderButtonCloseContainer />,
      <HeaderButtonSaveComponent
        handleClick={ this.handleSaveClick.bind(this) }
      />
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
      <div className = "row center-xs animated fadeInLeft">
        <div className = "col-md-4 col-xs-11" >
          { /* Listing this.fieldsComponents array */ }
          { this.fieldsComponents }
          <div id = "room-add-form-buttons" >
            <FlatButton
              label = "Create Room"
              primary = { true }
              onTouchTap = { this.handleSaveClick.bind(this) }
            />

            <FlatButton
              label = "Random values"
              secondary = { true }
              onTouchTap = { this.handleClickGenerateRandomData.bind(this) }
            />
          </div>
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
