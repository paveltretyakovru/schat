// Core imports
import {connect} from 'react-redux'
import {withRouter, Route, Redirect, Switch} from 'react-router'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import DevTools from './shared/devtools'
import HeaderContainer from './shared/header/header.container'

import * as AppActions from './app.actions'
// import {appRoutes} from '../routes'
import {routeToHome} from './pages/home/home.actions'
import {
  routeToRooms,
  routeToRoomsList,
  routeToRoomSettings,
} from './pages/rooms/rooms.actions';

import './app.container.scss';
import HomeContainer from './pages/home/home.container'
import AuthContainer from './pages/auth/auth.container'

class App extends Component {
  static path = '/'

  componentWillMount() {
    try {
      injectTapEventPlugin()
    } catch (e) { console.info('injectTapEventPlugin exception') }
  }

  render() {
    const homeRender = () => {
      if (!this.props.auth.authenticated) {
        return <Redirect to="/auth" />
      } else {
        return <HomeContainer />
      }
    }

    return(
      <MuiThemeProvider>
        <div className="theme-container">
          <div className="app__wrapper">

            <div className="app__navigation">
              <HeaderContainer
                title="SChat"
                onLeftIconButtonTouchTap={ ::this.props.routeActions.routeToHome }
              />
            </div>

            <div className="app__content">
              <Switch>
                <Route exact path="/" render={homeRender} />
                <Route path="/auth" component={AuthContainer} />
              </Switch>
            </div>

          </div>

          { NODE_ENV === 'development' ? <DevTools /> : null }
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    auth: state.auth,
    socket: state.app.socket,
  }
}

function mapDisptachToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    routeActions: bindActionCreators(
      {
        routeToHome,
        routeToRooms,
        routeToRoomsList,
        routeToRoomSettings,
      },
      dispatch
    ),
  }
}

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(App));
