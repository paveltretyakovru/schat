// Core imports
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import {white} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import DevTools from './shared/devtools'
import HeaderContainer from './shared/header/header.container'

import * as AppActions from './app.actions'
import {routeToHome} from './pages/home/home.actions'
import {
  routeToRooms,
  routeToRoomsList,
  routeToRoomSettings,
} from './pages/rooms/rooms.actions';

import './app.container.css';
import { TabsMenuComponent } from './shared/tabs-menu/tabs-menu.component';

class App extends Component {
  static path = '/';

  constructor(props) {
    super(props);

    this.state = {
      headerButtonLeft: null,
      headerButtonRight: null,
    }

    this.props.socket.on('message', (res) => console.log('Server message:', res))
    this.props.socket.on('newMessage', (res) => console.log('New message', res))
  }

  componentWillMount() {
    try {
      this.setHeaderButtons()
      injectTapEventPlugin()
    } catch (e) { console.info('injectTapEventPlugin exception') }
  }

  render() {
    const tabsMenu = (
      <TabsMenuComponent
        routeToRoom={
          this.props.routeActions
            .routeToRooms.bind(this, { id: this.props.params.id })
        }

        routeToSettings={
          this.props.routeActions
            .routeToRoomSettings.bind(this, this.props.params.id)
        }
      />
    )

    return(<MuiThemeProvider>
      <div className="theme-container">

        <div className="app__wrapper">
          <div className="app__navigation">
            <HeaderContainer
              buttonLeft={this.state.headerButtonLeft}
              buttonRight={this.state.headerButtonRight}
            />

            { (typeof this.props.params.id !== 'undefined') ? tabsMenu : null }
          </div>

          {
            React.cloneElement(
              this.props.children,
              {
                setHeaderButtons: ::this.setHeaderButtons,
                setHeaderButtonLeft: ::this.setHeaderButtonLeft,
                setHeaderButtonRight: ::this.setHeaderButtonRight,
              }
            )
          }
        </div>

        { NODE_ENV === 'development' ? <DevTools /> : null }
      </div>
    </MuiThemeProvider>);
  }

  setHeaderButtons(headerButtonLeft, headerButtonRight) {
    // <ButtonMenuComponent handleCLick={this.props.appActions.switchLeftMenu}
    let leftButton = (
      <IconButton>
        <ActionHome
          color={white}
          onTouchTap={this.props.routeActions.routeToHome.bind(this)}
        />
      </IconButton>
    )

    if (headerButtonLeft) {
      leftButton = headerButtonLeft
    }

    this.setState({
      ...this.state,
      headerButtonLeft: leftButton,
      headerButtonRight: headerButtonRight,
    });
  }

  setHeaderButtonLeft(button, callback = () => {}) {
    this.setState({ ...this.state, headerButtonLeft: button }, callback);
  }

  setHeaderButtonRight(button, callback = () => {}) {
    this.setState({ ...this.state, headerButtonRight: button }, callback);
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
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

export default connect(mapStateToProps, mapDisptachToProps)(App);
