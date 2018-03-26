import { white } from 'material-ui/styles/colors';
// import IconButton from 'material-ui/IconButton';
import React, { Component } from 'react';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class ButtonFavorComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: this.props.active,
    }
  }

  render() {
    const handleClick = this.props.handleClick;

    if (this.state.active) {
      return <Star color={white} onTouchTap={() => this.setState({...this.state, active: handleClick()})} />
    } else {
      return <StarBorder color={white} onTouchTap={() => this.setState({...this.state, active: handleClick()})} />
    }
  }
}

export default ButtonFavorComponent;