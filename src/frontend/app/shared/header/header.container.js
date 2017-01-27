import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as AppActions from '../../app.actions';
import IconMenuComponent from '../icons/icon-menu.component';
import IconSaveComponent from '../icons/icon-save.component';
import IconCloseComponent from '../icons/icon-close.component';

class HeaderContainer extends Component {
  getStyle() {
    return {
      iconStyleRight: { marginTop: 16 },
    }
  }

  render() {
    let { headerTitle, headerLeftIcon, headerRightIcon } = this.props;

    return(
      <header className="row">
        <AppBar
          title={ headerTitle }

          iconElementLeft={
            ((type) => {
              switch(type) {
                case 'menu':
                  return <IconMenuComponent />;

                case 'close':
                  return (
                    <IconCloseComponent
                      action={this.props.appActions.routeToBack}
                    />
                  );

                default:
                  return <IconMenuComponent />;
              }
              })(headerLeftIcon)
          }

          iconElementRight={
            ((type) => {
              switch(type) {
                case 'save':
                  return <IconSaveComponent />;

                default:
                  return null;
              }
            })(headerRightIcon)}

          iconStyleRight={{ marginTop: 16 }}
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

