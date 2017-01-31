// Core imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HeaderContainer from './shared/header/header.container';

import './app.container.css';

class App extends Component {
  static path = '/';

  componentWillMount() {
    injectTapEventPlugin();
  }
  
  render() {
    return(<MuiThemeProvider>
      <div id="app-container" className="container">
        <HeaderContainer />
        
        <main className="row">
          <div id="app-content" className="col-xs-12 col-md-12">
            {/* { this.props.children } */}
            {
              React.cloneElement(
                this.props.children,
                { dataTest: 'Test data for children' }
              )
            }
          </div>
        </main>

      </div>
    </MuiThemeProvider>);
  }
}

export default App;