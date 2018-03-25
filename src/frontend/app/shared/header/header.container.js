import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import React, {Component} from 'react';

class HeaderContainer extends Component {
  getStyle() {
    return {
      iconStyleRight: {
        margin: '0px',
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
      },
    }
  }

  render() {
    const { iconStyleRight } = this.getStyle();
    const { headerTitle } = this.props;

    return (
      <header className="row">
        <AppBar
          title={ headerTitle }
          iconElementLeft={ this.props.buttonLeft }
          iconElementRight={ this.props.buttonRight }
          iconStyleRight={ iconStyleRight }
        />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    headerTitle: state.header.headerTitle,
  }
}

export default connect(mapStateToProps)(HeaderContainer);
