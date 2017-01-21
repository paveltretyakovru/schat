// Core imports
import React, { Component } from 'react';

// Material-ui imports
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import '../styles/app.css';

class App extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }
  
  render() {

    return(<MuiThemeProvider>
      <div className="container">
        <div className="row equalHWrap eqWrap">

          {/* Left sidebar */}
          <div className="col-md-3 equalHW eq">
            <Card style={{height: '100%'}}>
              <CardMedia>
                <img src="http://fabrikadialogov.ru/wp-content/uploads/2011/12/tumblr_lrh6m3fuxV1r372c2.jpeg" />
              </CardMedia>
              <CardText>
                <CardTitle title="Encrypted chat" subtitle="Fuck the system!" />
              </CardText>
              <CardActions>
                <FlatButton primary={true} label="Add room" />
              </CardActions>
            </Card>
          </div>

          {/* Content, center */}
          <div className="col-md-6 equalHW eq">
            <Card style={{height: '100%'}} id="message-page-container">
              <CardText>
                { this.props.children }

                <p>Add display:flex, justify-content: space-between; to the parent and give a width to the boxes that totals to less than 100%. E.g. These boxes have a width of 32% each. The remaining width of 4% (i.e. 32 x 3 = 96%) will be used to create the space between the boxes and simulate margins. No need to remove margins on the first and last child!</p>
                <p>Add display:flex, justify-content: space-between; to the parent and give a width to the boxes that totals to less than 100%. E.g. These boxes have a width of 32% each. The remaining width of 4% (i.e. 32 x 3 = 96%) will be used to create the space between the boxes and simulate margins. No need to remove margins on the first and last child!</p>
                <p>Add display:flex, justify-content: space-between; to the parent and give a width to the boxes that totals to less than 100%. E.g. These boxes have a width of 32% each. The remaining width of 4% (i.e. 32 x 3 = 96%) will be used to create the space between the boxes and simulate margins. No need to remove margins on the first and last child!</p>
                <p>Add display:flex, justify-content: space-between; to the parent and give a width to the boxes that totals to less than 100%. E.g. These boxes have a width of 32% each. The remaining width of 4% (i.e. 32 x 3 = 96%) will be used to create the space between the boxes and simulate margins. No need to remove margins on the first and last child!</p>
                <p>Add display:flex, justify-content: space-between; to the parent and give a width to the boxes that totals to less than 100%. E.g. These boxes have a width of 32% each. The remaining width of 4% (i.e. 32 x 3 = 96%) will be used to create the space between the boxes and simulate margins. No need to remove margins on the first and last child!</p>
                <p>Add display:flex, justify-content: space-between; to the parent and give a width to the boxes that totals to less than 100%. E.g. These boxes have a width of 32% each. The remaining width of 4% (i.e. 32 x 3 = 96%) will be used to create the space between the boxes and simulate margins. No need to remove margins on the first and last child!</p>
                <p>Add display:flex, justify-content: space-between; to the parent and give a width to the boxes that totals to less than 100%. E.g. These boxes have a width of 32% each. The remaining width of 4% (i.e. 32 x 3 = 96%) will be used to create the space between the boxes and simulate margins. No need to remove margins on the first and last child!</p>

                <div id="message-field-container">
                  <TextField
                      // fullWidth={true}
                      hintText="Message..."
                    />
                    <IconButton tooltip="send">
                      <ContentSend />
                    </IconButton>
                </div>

              </CardText>
            </Card>

            
            
          </div>

          {/* Right sidebar */}
          <div className="col-md-3 equalHW eq">
            <Card style={{height: '100%'}}>
              <CardText>
                Right sidebar
              </CardText>
            </Card>
          </div>

        </div>
      </div>
    </MuiThemeProvider>);
  }
}

export default App;