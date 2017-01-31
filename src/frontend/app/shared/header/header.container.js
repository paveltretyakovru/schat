import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

import * as AppActions from '../../app.actions';
import ButtonMenuComponent from '../buttons/button-menu.component';
import ButtonCloseComponent from '../buttons/button-close.component';
import ButtonSaveContainer from '../buttons/button-save/button-save.container';

class HeaderContainer extends Component {
  getStyle() {
    return {
      iconStyleRight: {marginTop: 16},
    }
  }

  render() {
    let {headerTitle, headerLeftIcon, headerRightIcon} = this.props;

    return (
      <header className="row">
        <AppBar
          title={ headerTitle }

          iconElementLeft={
            ((type) => {
              let iconElementLeft = null;

              switch (type) {
                case 'menu':
                  iconElementLeft = <ButtonMenuComponent />;
                  break;

                case 'close':
                  iconElementLeft = <ButtonCloseComponent
                    action={this.props.appActions.routeToBack}
                  />
                  break;

                default:
                  iconElementLeft = <ButtonMenuComponent />;
                  break;
              }

              return iconElementLeft;
            })(headerLeftIcon)
          }

          iconElementRight={
            ((type) => {
              switch (type) {
                case 'save':
                  return <ButtonSaveContainer/>;

                default:
                  return null;
              }
            })(headerRightIcon)}

          iconStyleRight={{marginTop: 16}}
        />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    headerTitle: state.header.headerTitle,
    headerLeftIcon: state.header.headerLeftIcon,
    headerRightIcon: state.header.headerRightIcon,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

