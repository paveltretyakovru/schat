import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionBuild from 'material-ui/svg-icons/action/build';
import React, { Component } from 'react';

export class ButtonBuildComponent extends Component {
  render() {
    return(
      <IconButton
        onTouchTap={() => this.props.touchHandler()}
        tooltip="Chat settings"
        className="animated slideInDown"
      >
        <ActionBuild color={white} />
      </IconButton>
    );
  }
}
