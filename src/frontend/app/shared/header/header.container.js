import AppBar from 'material-ui/AppBar'
import {connect} from 'react-redux'
import React, {Component} from 'react'

import './header.container.css'

class HeaderContainer extends Component {
  render() {
    const { headerTitle } = this.props;

    return (
      <AppBar
        title={ headerTitle }
        className="header__container"
        iconElementLeft={ this.props.buttonLeft }
        iconElementRight={ this.props.buttonRight }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    headerTitle: state.header.headerTitle,
  }
}

export default connect(mapStateToProps)(HeaderContainer);
