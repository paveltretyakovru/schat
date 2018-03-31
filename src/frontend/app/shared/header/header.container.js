import AppBar from 'material-ui/AppBar'
import {connect} from 'react-redux'
import React, {Component} from 'react'

import './header.container.css'

class HeaderContainer extends Component {
  render() {
    const { onLeftIconButtonTouchTap, title } = this.props

    return (
      <AppBar
        title={title}
        className="header__container"
        iconStyleLeft={{marginTop: 0}}
        onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
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
