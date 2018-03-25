// Core imports
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';

// Footer
import {Tabs, Tab} from 'material-ui/Tabs';
import { white } from 'material-ui/styles/colors';
import IconChat from 'material-ui/svg-icons/communication/chat';
import IconAttachFile from 'material-ui/svg-icons/editor/attach-file';
import {ButtonShareComponent} from './shared/buttons/button-share.component';
import {ButtonBuildComponent} from './shared/buttons/button-build.component';

import DevTools from './shared/devtools';
import HeaderContainer from './shared/header/header.container';
import LeftMenuComponent from './shared/left-menu.component';
import ButtonMenuComponent from './shared/buttons/button-menu.component';

import * as AppActions from './app.actions';
import { routeToRoomsList } from './pages/rooms/rooms.actions';

import './app.container.css';

injectTapEventPlugin();

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

  // componentWillMount() {
  //   injectTapEventPlugin();
  // }

  render() {
    let menuItems = [
      {
        title: 'Rooms List',
        routeDispatch: this.props.routeActions.routeToRoomsList,
      },
    ];

    return(<MuiThemeProvider>
      <div id="app-container" className="container">
        <LeftMenuComponent
          items={menuItems}
          isOpen={this.props.app.isLeftMenuOpen}
          handleSwitch={this.props.appActions.switchLeftMenu}
        />

        <HeaderContainer
          buttonLeft={this.state.headerButtonLeft}
          buttonRight={this.state.headerButtonRight}
        />

        <main className="row">
          <div id="app-content" className="col-xs-12 col-md-12">
            {/* { this.props.children } */}
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
        </main>

        <Tabs
            className="animated slideInUp rooms-show__button-tabs"
            initialSelectedIndex={2}
          >

            <Tab icon={<IconAttachFile color={white} />} />

            <Tab icon={<ButtonShareComponent />} />
            
            <Tab icon={<IconChat color={white} />} />

            <Tab icon={
              <ButtonBuildComponent 
                // touchHandler={this.props.roomsActions.routeToRoomSettings.bind(this)}
              />
            }/>

          </Tabs>
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
    routeActions: bindActionCreators({routeToRoomsList}, dispatch),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(App);
