import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import React, {Component} from 'react';

class HeaderContainer extends Component {
  getStyle() {
    return {
      iconStyleRight: {
        marginRight:' -16px',
        marginTop: '3px',
      },
    }
  }

  render() {
    const { iconStyleRight } = this.getStyle();
    const { headerTitle } = this.props;

    return (
      <AppBar
        title={ headerTitle }
        className="header__container"
        iconElementLeft={ this.props.buttonLeft }
        iconElementRight={ this.props.buttonRight }
        iconStyleRight={ iconStyleRight }
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
