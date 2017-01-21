// Core imports
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
      <div className="container">
        <Header />

        { this.props.children }
      </div>
    </MuiThemeProvider>);
  }
}

export default App;