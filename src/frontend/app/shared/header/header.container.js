import {connect} from 'react-redux'
import React, {Component} from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ActionFingerprint from 'material-ui/svg-icons/action/fingerprint'

import './header.container.css'

class HeaderContainer extends Component {
  render() {
    const { onLeftIconButtonTouchTap, title } = this.props
    const headerTitle = title || this.props.headerTitle

    return (
      <AppBar
        title={headerTitle}
        className="header__container"
        iconStyleLeft={{marginTop: 0}}
        iconElementLeft={<IconButton><ActionFingerprint /></IconButton>}
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
