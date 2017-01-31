import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as AppActions from '../../app.actions';

class IconCloseContainer extends Component {
  render() {
    return(<IconButton
      onClick={this.props.appActions.routeToBack}
      tooltip="Back"
      className="animated rotateIn"
    >
      <NavigationClose color={white} />
    </IconButton>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
  }
}

export default connect(function(){return {}}, mapDispatchToProps)(IconCloseContainer);
