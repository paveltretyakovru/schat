import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Actions
import * as AppActions from '../../app/AppActions';
import * as HeaderActions from '../../app/header/HeaderActions';

// Helpers
import makeId from '../../../helpers/makeId';

// Style sheets
import './RoomsAdd.css';

// Array for generating add room form
const fieldsData = [
  {
    key: 'id',
    hintText: 'Room ID',
    floatText: 'Room ID for generating room link',
  },
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
  constructor(props) {
    super(props);
    this.state = { id: '', key: '', title: '' };
  }

  componentWillMount() {
    this.props.headerActions.updateHeaderTitle('Add new room');
    this.props.headerActions.updateHeaderLeftIcon('close');
    this.props.headerActions.updateHeaderRightIcon('save');
  }

  render() {
    let fieldsComponents = this.generateFormTextFields();

    return(<div className="row center-xs animated fadeInLeft">
      <div className="col-md-4 col-xs-11">
        
        {/* Listing fieldsComponents array */}
        {fieldsComponents}
        
        <div id="room-add-form-buttons">
          <FlatButton
            label="Generate random data"
            primary={true}
            onClick={::this.handleClickGenerateRandomData}
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
    return this.setState({ ...this.state,  [key]: newValue });
  }
  // ##########################################################################

  // ============================ Helpers methods =============================
  generateRandomFieldsValues() {
    return this.setState({ id: makeId(), key: makeId(), title: makeId() });
  }
  
  generateFormTextFields() {
    return fieldsData.map((value, key) =>
      <TextField
        key={key}
        value={this.state[value.key]}
        fullWidth={true}
        floatingLabelText={value.floatText}
        floatingLabelFixed={true}
        
        onChange={(event, newValue) => 
          this.handleChangeInput(value.key, newValue)
        }
    />);
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomAddContainer);