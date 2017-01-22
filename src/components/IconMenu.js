import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import React, { Component } from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class IconMenu extends Component {
  render() {
    return(<IconButton className="animated rotateIn" tooltip="Open menu">
      <NavigationMenu color={white} />
    </IconButton>);
  }
}

export default IconMenu;