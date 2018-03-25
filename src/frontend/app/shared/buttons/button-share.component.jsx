import React, {Component} from 'react'
import { white, lightBlue50 } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconShare from 'material-ui/svg-icons/social/share';

import './button-share.component.css'

export class ButtonShareComponent extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const link = this.props.link || window.location.href

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Copy"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return(
      <div className="button-share__wrapper">
        <IconShare
          color={white}
          onTouchTap={this.handleOpen}
          hoverColor={lightBlue50}
        />

        <Dialog
          title="Chat room sharing"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          {link}
        </Dialog>
      </div>
    )
  }
}