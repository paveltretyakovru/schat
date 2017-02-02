// Core imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HeaderContainer from './shared/header/header.container';

import './app.container.css';

class App extends Component {
  static path = '/';

  constructor(props) {
    super(props);

    this.state = {
      headerButtonLeft: null,
      headerButtonRight: null,
    }
  }

  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    return(<MuiThemeProvider>
      <div id="app-container" className="container">
        <HeaderContainer
          buttonLeft={this.state.headerButtonLeft}
          buttonRight={this.state.headerButtonRight}
        />

        <main className="row">
          <div id="app-content" className="col-xs-12 col-md-12">
            {/* { this.props.children } */}
            {
              React.cloneElement(
                this.props.children,
                {
                  setHeaderButtons: ::this.setHeaderButtons,
                  setHeaderButtonLeft: ::this.setHeaderButtonLeft,
                  setHeaderButtonRight: ::this.setHeaderButtonRight,
                }
              )
            }
          </div>
        </main>

      </div>
    </MuiThemeProvider>);
  }

  setHeaderButtons(headerButtonLeft, headerButtonRight) {
    this.setState({
      ...this.state,
      headerButtonLeft: headerButtonLeft,
      headerButtonRight: headerButtonRight,
    });
  }

  setHeaderButtonLeft(button, callback = () => {}) {
    this.setState({ ...this.state, headerButtonLeft: button }, callback);
  }

  setHeaderButtonRight(button, callback = () => {}) {
    this.setState({ ...this.state, headerButtonRight: button }, callback);
  }
}

export default App;
