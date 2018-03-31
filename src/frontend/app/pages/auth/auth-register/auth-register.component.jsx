import React, {Component} from 'react'

import {TextField} from 'material-ui'

import './auth-register.component.scss'

export class AuthRegisterComponent extends Component {
  static path = '/auth/register'

  constructor(props) {
    super(props)

    this.state = { login: '', password: '', repassword: '' }
    this.enableFinger = this.props.enableFinger
    this.disableFinger = this.props.disableFinger
    this.updateRegisterData = this.props.updateRegisterData
  }

  render() {
    return(
      <div className="auth-register-component">
        <TextField
          value={this.state.login}
          hintText="Login"
          onChange={this.onChangeLoginHandler.bind(this)}
        />
        <TextField
          type="password"
          value={this.state.password}
          hintText="Password"
          onChange={this.onChangePasswordHandler.bind(this)}
        />
        <TextField
          type="password"
          value={this.state.repassword}
          hintText="Repeat password"
          onChange={this.onChangeRepasswordHandler.bind(this)}
        />
      </div>
    )

  }

  checkToEnableSubmitFinger() {
    if (
      (this.state.login.length > 0)
      && (this.state.password.length > 0)
      && (this.state.password === this.state.repassword)
    ) {
      this.enableFinger()
      this.updateRegisterData({
        login: this.state.login,
        password: this.state.password,
        repassword: this.state.repassword,
      })
    } else {
      this.disableFinger()
      this.updateRegisterData({
        login: this.state.login,
        password: this.state.password,
        repassword: this.state.repassword,
      })
    }
  }

  onChangeLoginHandler = (event) => {
    this.setState({ ...this.state, login: event.target.value }, () => {
      this.checkToEnableSubmitFinger()
    })
  }

  onChangePasswordHandler = (event) => {
    this.setState({ ...this.state, password: event.target.value }, () => {
      this.checkToEnableSubmitFinger()
    })
  }

  onChangeRepasswordHandler = (event) => {
    this.setState({ ...this.state, repassword: event.target.value }, () => {
      this.checkToEnableSubmitFinger()
    })
  }
}