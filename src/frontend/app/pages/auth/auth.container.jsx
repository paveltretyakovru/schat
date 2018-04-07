import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import {pink500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import ActionFingerprint from 'material-ui/svg-icons/action/fingerprint'

import {AUTH_ROUTE, AUTH_LOGIN_ROUTE, AUTH_REGISTER_ROUTE} from './auth.constants'
import * as authActions from './auth.actions'
import {routeToHome} from '../home/home.actions'
import {AuthLoginComponent} from './auth-login/auth-login.component'
import {AuthRegisterComponent} from './auth-register/auth-register.component'

import './auth.container.scss'
// import fingerSensorImage from './shared/images/finger-sensor.png'

// const imgUrl = 'https://goo.gl/Hgd4jm'
class AuthContainer extends Component {
  static path = AUTH_ROUTE

  constructor(props) {
    super(props)

    this.children = this.props.children
    this.authActions = this.props.authActions
  }

  render() {
    const { submitRegister } = this.props.authActions

    const largeButtonStyle = {
      style: { width: 120, height: 120, padding: 30 },
      iconStyle: { width: 60, height: 60 },
    }

    const authButtons = (
      <div className="auth-container__route-buttons">
        <FlatButton
          label="Sign in"
          primary={ true }
          onTouchTap={ this.props.authActions.routeToAuthLogin.bind(this) }
        />

        <FlatButton
          label="Register"
          secondary={true}
          onTouchTap={ this.props.authActions.routeToAuthRegister.bind(this) }          
        />
      </div>
    )

    return(
      <div className="auth-container">

        <div className="auth-container__finger-wrapper">
          <IconButton
            {...largeButtonStyle}
            disabled={!this.props.auth.fingerEnabled}
            onTouchTap={
              (this.props.location.pathname === AUTH_LOGIN_ROUTE)
                ? this.props.authActions.submitLogin.bind(this, this.props.auth.loginForm)
                : submitRegister.bind(this, this.props.auth.registerForm)
            }
          >
            <ActionFingerprint color={pink500} />
          </IconButton>
        </div>

        <Switch>

          {/* /auth */}
          <Route exact path={AUTH_ROUTE} render={ () => ( authButtons ) } />

          {/* /auth/login */}
          <Route path={AUTH_LOGIN_ROUTE} render={ () => (
            <AuthLoginComponent
              enableFinger={this.props.authActions.enableFinger.bind(this)}
              disableFinger={this.props.authActions.disableFinger.bind(this)}
              updateLoginData={this.props.authActions.updateLoginData.bind(this)}
            />
          )} />

          {/* /auth/register */}
          <Route path={AUTH_REGISTER_ROUTE} render={ () => (
            <AuthRegisterComponent
              enableFinger={this.props.authActions.enableFinger.bind(this)}
              disableFinger={this.props.authActions.disableFinger.bind(this)}
              updateRegisterData={this.props.authActions.updateRegisterData.bind(this)}
            />
          )} />

        </Switch>        

      </div>
    )
  }

  submitLoginHandler() {
    authActions.submitLogin(this.props.auth.loginForm)
      .then((res) => {
        if (res.data.success) {
          this.props.authActions.enableAuthenticate()
          this.props.authActions.clearLoginData()
          this.props.authActions.disableFinger()
          this.props.homeActions.routeToHome()
        }
      })
  }
}

const mapStateToProps = (state) => ({ app: state.app, auth: state.auth })
const mapDispatchToProps = (dispatch) => ({
  homeActions: bindActionCreators({routeToHome}, dispatch),
  authActions: bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)