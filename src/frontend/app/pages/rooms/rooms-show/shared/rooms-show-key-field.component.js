import React, {Component} from 'react';

// Material-ui components
import TextField from 'material-ui/TextField';

class RoomsShowKeyFieldComponent extends Component {
  render() {
    return(
      <div>
        <TextField
          type="password"
          onChange={this.handleUpdateControlKey.bind(this)}
          fullWidth={true}
          floatingLabelText="Secret key"
        />
      </div>
    );
  }

  handleUpdateControlKey(e) {
    let currentTarget = e.currentTarget;

    this.props.handleUpdateControlKey({
      roomId: this.props.roomId,
      controlKey: currentTarget.value,
    });
  }
}

export default RoomsShowKeyFieldComponent;