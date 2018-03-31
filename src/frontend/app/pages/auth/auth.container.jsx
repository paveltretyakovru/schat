import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import ActionFingerprint from 'material-ui/svg-icons/action/fingerprint'

import {AUTH_ROUTE} from './auth.constants'
import * as authActions from './auth.actions'
import {AuthLoginComponent} from './auth-login/auth-login.component'

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
    const largeButtonStyle = {
      style: { width: 120, height: 120, padding: 30 },
      iconStyle: { width: 60, height: 60 },
    }

    const authButtons = (
      <div className="auth-container__route-buttons">
        <FlatButton
          label="Sign in"
          primary={ true }
          onTouchTap={ ::this.props.authActions.routeToAuthLogin }
        />
        <FlatButton secondary={true} label="Register" />
      </div>
    )

    return(
      <div className="auth-container">

        <div className="auth-container__finger-wrapper">
          <IconButton { ...largeButtonStyle } disabled={true}>
            <ActionFingerprint />
          </IconButton>
        </div>

        <Switch>
          <Route exact path="/auth" render={ () => ( authButtons ) } />
          <Route path="/auth/login" component={ AuthLoginComponent } />
        </Switch>        

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ app: state.app })
const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)