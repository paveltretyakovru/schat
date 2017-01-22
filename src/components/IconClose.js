import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import React, { Component } from 'react';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class IconClose extends Component {
  render() {
    return(<IconButton tooltip="Back" className="animated rotateIn">
      <NavigationClose color={white} />
    </IconButton>);
  }
}

export default IconClose;