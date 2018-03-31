import {Link} from 'react-router'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import * as authActions from './auth.actions'
import {AUTH_ROUTE, AUTH_LOGIN_ROUTE} from './auth.constants'

import './auth.container.scss'
import fingerSensorImage from './shared/images/finger-sensor.png'

// const imgUrl = 'https://goo.gl/Hgd4jm'
class AuthContainer extends Component {
  static path = AUTH_ROUTE

  constructor(props) {
    super(props)

    this.children = this.props.children
    this.authActions = this.props.authActions
  }

  render() {
    const actions = (
      <div className="auth-container__actions-wrapper">
        <CardActions>
          <Link to={AUTH_LOGIN_ROUTE}>
            <FlatButton label="Login" primary={true} />
          </Link>
        </CardActions>
      </div>
    )
    
    const authChildrenComponents = (
      <CardText>
        {
          React.cloneElement(
            this.children,
            { authActions: this.authActions }
          )
        }
      </CardText>
    )

    const cardImage = (
      <CardMedia>
        <img src={fingerSensorImage} alt="" />
      </CardMedia>
    )

    return(
      <div className="auth-container">
        <div className="auth-container__card-wrapper">
          <Card>
            <CardHeader
              title="Authentication"
            />
            { (this.props.children) ? authChildrenComponents : cardImage }
            { (this.props.children) ? null : actions }
          </Card>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ app: state.app })
const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)