import React, { PropTypes, Component } from 'react';

// material-ui imports
import FlatButton from 'material-ui/FlatButton';

export default class User extends Component {
  render() {
    const { name, updateName } = this.props;
    return <div>
      <p>Hello, {name}!</p>
      <div>
        <FlatButton onClick={updateName} label="Update name" primary={true} />
      </div>
    </div>;
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};