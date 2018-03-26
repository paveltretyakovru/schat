// Core imports
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';

// Footer
import {Tabs, Tab} from 'material-ui/Tabs'
import IconChat from 'material-ui/svg-icons/communication/chat'
import IconShare from 'material-ui/svg-icons/social/share'
import IconAttachFile from 'material-ui/svg-icons/editor/attach-file'
import IconSettings from 'material-ui/svg-icons/action/settings'

import DevTools from './shared/devtools';
import HeaderContainer from './shared/header/header.container';
import LeftMenuComponent from './shared/left-menu.component';
import ButtonMenuComponent from './shared/buttons/button-menu.component';

import * as AppActions from './app.actions';
import {
  routeToRooms,
  routeToRoomsList,
  routeToRoomSettings,
} from './pages/rooms/rooms.actions';

import './app.container.css';

class App extends Component {
  static path = '/';

  constructor(props) {
    super(props);

    this.state = {
      headerButtonLeft: null,
      headerButtonRight: null,
    }

    this.props.socket.on('message', (res) => {
      console.log('Geted server message:', res)
    })

    this.props.socket.on('newMessage', (res) => {
      console.log('New message', res)
    })
  }

  componentWillMount() {
    try {
      injectTapEventPlugin();
    } catch (e) { console.info('injectTapEventPlugin exception') }
  }

  render() {
    let menuItems = [
      {
        title: 'Rooms List',
        routeDispatch: this.props.routeActions.routeToRoomsList,
      },
    ];

    const routeToRoom = this.props.routeActions.routeToRooms.bind(this, { id: this.props.params.id })
    const routeToSettings = this.props.routeActions.routeToRoomSettings.bind(this, this.props.params.id)

    const tabs = (
      <Tabs className="animated slideInDown chat-tabs-menu" initialSelectedIndex={2}>
        <Tab icon={<IconAttachFile />} />
        <Tab icon={<IconShare />} />
        <Tab icon={<IconChat />} onActive={routeToRoom} />
        <Tab icon={<IconSettings />} onActive={routeToSettings} />
      </Tabs>
    )

    return(<MuiThemeProvider>
      <div className="theme-container">
        <LeftMenuComponent
          items={menuItems}
          isOpen={this.props.app.isLeftMenuOpen}
          handleSwitch={this.props.appActions.switchLeftMenu}
        />

        <div className="app__wrapper">
          <div className="app__navigation">
            <HeaderContainer
              buttonLeft={this.state.headerButtonLeft}
              buttonRight={this.state.headerButtonRight}
            />

            {/* Tabs menu */}
            {
              (() => {
                if(typeof this.props.params.id !== 'undefined') {
                  return(tabs)
                }
              })()
            }
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

        {/* app__wrapper */}
        </div>

        { NODE_ENV === 'development' ? <DevTools /> : null }
      </div>
    </MuiThemeProvider>);
  }

  setHeaderButtons(headerButtonLeft, headerButtonRight) {
    let leftButton = headerButtonLeft ? headerButtonLeft : <ButtonMenuComponent handleCLick={this.props.appActions.switchLeftMenu} />;

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
        routeToRooms,
        routeToRoomsList,
        routeToRoomSettings,
      },
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(App);
