import React, {Component} from 'react';

// Material-ui components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class LeftMenuComponent extends Component {
  render() {
    return(
      <Drawer
        open={this.props.isOpen}
        docked={false}
        onRequestChange={this.props.handleSwitch}
      >
        <MenuItem>Menu Item</MenuItem>
      </Drawer>
    )
  }
}

export default LeftMenuComponent;