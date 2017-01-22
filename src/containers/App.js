// Core imports
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../components/Header';

import '../styles/app.css';

class App extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }
  
  render() {
    return(<MuiThemeProvider>
      <div id="app-container" className="container">
        <Header title={this.props.headerTitle} />
        
        <main className="row">
          <div id="app-content" className="col-xs-12 col-md-12">
            { this.props.children }
          </div>
        </main>

      </div>
    </MuiThemeProvider>);
  }
}

function mapStateToProps(state) {
  return {
    headerTitle: state.app.headerTitle,
  }
}

export default connect(mapStateToProps)(App);