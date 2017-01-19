// Core imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Material-ui imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Self system imports
import User from '../components/User';
import * as userActions from '../actions/user';

class App extends Component {
  componentWillMount() {
    injectTapEventPlugin()
  }
  
  render() {
    const { user } = this.props;
    const { updateName } = this.props.userActions;

    return(<MuiThemeProvider>
      <div>
        <User name={user.name} updateName={updateName} />

        <div>
          <h1>App container</h1>
          <div>
            <p>children containers and components:</p>
            <div>
              { this.props.children }
            </div>
          </div>
        </div>

      </div>
    </MuiThemeProvider>);
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