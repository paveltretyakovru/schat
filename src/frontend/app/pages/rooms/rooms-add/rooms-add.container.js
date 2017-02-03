import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Actions
import * as AppActions from '../../../app.actions';
import * as HeaderActions from '../../../shared/header/header.actions';
import * as RoomsActions from '../rooms.actions';

// Helpers
import makeId from '../../../../../shared/makeId';

// Components
import HeaderButtonCloseContainer from './shared/header-buttons/header-button-close.container';
import { HeaderButtonSaveComponent } from './shared/header-buttons/header-button-save.component';

// Style sheets
import './rooms-add.container.css';

// Array for generating add room form
const fieldsData = [
  {
    key: 'key',
    hintText: 'Room Key',
    floatText: 'Room Key to encrypt your messages',
  },
  {
    key: 'title',
    hintText: 'Room title',
    floatText: 'Room title for your rooms list',
  },
];

class RoomAddContainer extends Component {
  static path = '/rooms/add';

  constructor(props) {
    super(props);
    this.state = { id: '', key: '', title: '' };
  }

  componentWillMount() {
    this.props.setHeaderButtons(
      <HeaderButtonCloseContainer / >,
      <HeaderButtonSaveComponent handleClick={::this.handleSaveClick} / > ,
    );
    this.props.headerActions.updateHeaderTitle('Add new room');
  }

  render() {
    let fieldsComponents = this.generateFormTextFields();

    return (
      <div className = "row center-xs animated fadeInLeft">
        <div className = "col-md-4 col-xs-11" >
          { /* Listing fieldsComponents array */ }
          { fieldsComponents }
          <div id = "room-add-form-buttons" >
            <FlatButton
              label = "Generate random data"
              primary = { true }
              onClick = {::this.handleClickGenerateRandomData }
            />
          </div>
        </div>
      </div>);
  }

  // ============================ Handlers ====================================
  handleClickGenerateRandomData() {
    return this.generateRandomFieldsValues();
  }

  handleChangeInput(key, newValue) {
    return this.setState({...this.state, [key]: newValue });
  }

  handleSaveClick() {
    console.log('Handle save click');
    this.props.roomsActions.addRoom(this.state);
  }

  // ============================ Helpers methods =============================
  generateRandomFieldsValues() {
    return this.setState({ id: makeId(), key: makeId(), title: makeId() });
  }

  generateFormTextFields() {
    return fieldsData.map((value, key) =>
      <TextField key = { key }
        value = { this.state[value.key] }
        fullWidth = { true }
        floatingLabelText = { value.floatText }
        floatingLabelFixed = { true }

        onChange = {
          (event, newValue) =>
          this.handleChangeInput(value.key, newValue)
        }
      />
    );
  }
          // ##########################################################################
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