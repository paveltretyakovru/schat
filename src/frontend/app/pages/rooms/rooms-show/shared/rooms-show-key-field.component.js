import React, {Component} from 'react';

// Material-ui components
import TextField from 'material-ui/TextField';

class RoomsShowKeyFieldComponent extends Component {
  render() {
    return(
      <div>
        <TextField
          type="password"
          onChange={this.handleUpdateKey.bind(this)}
          fullWidth={true}
          floatingLabelText="Secret key"
        />
      </div>
    );
  }

  handleUpdateKey(e) {
    let currentTarget = e.currentTarget;

    this.props.handleUpdateKey({
      roomId: this.props.roomId,
      key: currentTarget.value,
    });
  }
}

export default RoomsShowKeyFieldComponent;