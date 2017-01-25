// Core imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HeaderContainer from './header/HeaderContainer';

import './App.css';

class App extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }
  
  render() {
    return(<MuiThemeProvider>
      <div id="app-container" className="container">
        <HeaderContainer />
        
        <main className="row">
          <div id="app-content" className="col-xs-12 col-md-12">
            { this.props.children }
          </div>
        </main>

      </div>
    </MuiThemeProvider>);
  }
}

export default App;