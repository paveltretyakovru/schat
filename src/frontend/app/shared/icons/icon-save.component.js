import { white } from 'material-ui/styles/colors';
import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

export default class IconSaveComponent extends Component {
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
      <FlatButton labelStyle={labelStyle} label="Save" />
    );
  }
}