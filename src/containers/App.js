// Core imports
import React, { Component } from 'react';

// Material-ui imports
// import IconButton from 'material-ui/IconButton';
// import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/FlatButton';
// import ContentSend from 'material-ui/svg-icons/content/send';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import '../styles/app.css';

class App extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }
  
  render() {

    return(<MuiThemeProvider>
      <div className="container">
        { this.props.children }
      </div>
    </MuiThemeProvider>);
  }
}

export default App;