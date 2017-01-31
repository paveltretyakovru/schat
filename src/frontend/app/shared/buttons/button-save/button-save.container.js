import { white } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as ButtonSaveActions from './button-save.actions';

class ButtonSaveComponent extends Component {
  getStyles() {
    return {
      labelStyle: {
        color: white,
        marginTop: '8px',
      },
    };
  }

  render() {
    let { labelStyle } = this.getStyles();

    return(
      <FlatButton
        label="Save"
        onClick={ ::this.handleClick }
        labelStyle={ labelStyle }
      />
    );
  }

  handleClick() {
    this.props.buttonActions.updateSaveData();
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buttonActions: bindActionCreators(ButtonSaveActions, dispatch),
  }
}

export default connect(function(){return {}}, mapDispatchToProps)(ButtonSaveComponent);