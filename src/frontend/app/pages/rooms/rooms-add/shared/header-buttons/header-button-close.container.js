import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import React, { Component } from 'react';
import { goBack } from 'react-router-redux';

class HeaderButtonCloseContainer extends Component {
  render() {
    return(<IconButton
      onClick={::this.props.goBack}
      tooltip="Back"
      className="animated rotateIn"
    >
      <NavigationClose color={white} />
    </IconButton>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goBack: function() {
      return dispatch(goBack());
    },
  }
}

export default connect(
  function(){return {}},
  mapDispatchToProps
)(HeaderButtonCloseContainer);
