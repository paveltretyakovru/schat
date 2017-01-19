// Core imports
import React, { Component } from 'react';

// Material-ui imports
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class App extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }
  
  render() {

    return(<MuiThemeProvider>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Card>
              <CardMedia
                overlay={<CardTitle title="Encrypted chat" subtitle="Fuck the system!" />}
              >
                <img src="http://fabrikadialogov.ru/wp-content/uploads/2011/12/tumblr_lrh6m3fuxV1r372c2.jpeg" />
              </CardMedia>
              <CardText>
                { this.props.children }
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </MuiThemeProvider>);
  }
}

export default App;