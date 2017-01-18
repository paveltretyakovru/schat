import React, { PropTypes, Component } from 'react';

export default class User extends Component {
  render() {
    const { name, updateName } = this.props;
    return <div>
      <p>Hello, {name}!</p>
      <div>
        <button onClick={updateName}>Update name</button>
      </div>
    </div>;
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};