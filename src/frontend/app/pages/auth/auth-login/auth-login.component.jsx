import React, {Component} from 'react'

import {TextField} from 'material-ui'
import FlatButton from 'material-ui/FlatButton'

import './auth-login.component.scss'

export class AuthLoginComponent extends Component {
  static path = '/auth/login'

  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: '',
    }
  }

  render() {
    return(
      <div className="auth-login-component">
        <TextField
          value={this.state.login}
          hintText="Login"
          fullWidth={true}
          onChange={this.onChangeLoginHandler.bind(this)}
        />
        <TextField
          type="password"
          value={this.state.password}
          hintText="Password"
          fullWidth={true}
          onChange={this.onChangePasswordHandler.bind(this)}
        />

        <div className="auth-login-component__action-buttons">
          <FlatButton
            label="Sign In"
            primary={true}
            onTouchTap={this.onClickSignInHandler.bind(this)}
          />
          <FlatButton
            label="Cancel"
            secondary={true}
            onTouchTap={this.onClickCancelHandler.bind(this)}
          />
        </div>
      </div>
    )

  }

  onChangeLoginHandler = (event) => {
    this.setState({ ...this.state, login: event.target.value })
  }

  onChangePasswordHandler = (event) => {
    this.setState({ ...this.state, password: event.target.value })
  }

  onClickSignInHandler() {
    this.props.authActions.login(this.state)
  }

  onClickCancelHandler() {
    this.props.authActions.routeToAuth()
  }
}