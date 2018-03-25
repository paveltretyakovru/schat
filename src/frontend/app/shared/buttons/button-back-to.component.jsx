import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import React, { Component } from 'react';

export class ButtonBackToComponent extends Component {
  render() {
    return(
      <IconButton
        onTouchTap={() => this.props.routeHandler()}
        tooltip="Go to Rooms List"
        className="animated rotateIn"
      >
        <NavigationArrowBack color={white} />
      </IconButton>
    );
  }
}
