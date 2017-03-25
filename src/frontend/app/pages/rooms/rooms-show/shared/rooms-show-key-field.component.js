import React, {Component} from 'react';

// Material-ui components
import TextField from 'material-ui/TextField';

class RoomsShowKeyFieldComponent extends Component {
  render() {
    return(
      <div>
        <TextField
          type="password"
          fullWidth={true}
          floatingLabelText="Chat key"
        />
      </div>
    );
  }
}

export default RoomsShowKeyFieldComponent;