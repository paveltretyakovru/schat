import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import User from '../components/User';
import * as userActions from '../actions/user';

class App extends Component {
  render() {
    const { user } = this.props;
    const { updateName } = this.props.userActions;

    return <div>
      <User name={user.name} updateName={updateName} />
    </div>;
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);