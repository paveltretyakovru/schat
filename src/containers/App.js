// Core imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';

import '../styles/app.css';

class App extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }
  
  render() {

    return(<MuiThemeProvider>
      <div className="container">
        
        {/* Header component */}
        <Header />

        {/* Main container */}
        <main>
          <LeftSidebar />
          { this.props.children }
        </main>

      </div>
    </MuiThemeProvider>);
  }
}

export default App;