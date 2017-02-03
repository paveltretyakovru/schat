import { white } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';

export class HeaderButtonSaveComponent extends Component {
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

    return (
      <FlatButton
        label = "Save"
        onClick = { this.props.handleClick }
        labelStyle = { labelStyle }
      />
    );
  }
}
