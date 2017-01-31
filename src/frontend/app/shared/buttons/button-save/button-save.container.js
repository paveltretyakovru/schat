import { white } from 'material-ui/styles/colors';
import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

export default class ButtonSaveComponent extends Component {
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
    console.log('Handle click save button');
  }
}