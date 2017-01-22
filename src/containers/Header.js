import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as appActions from '../actions/app';

import IconMenu from '../components/IconMenu';
import IconClose from '../components/IconClose';

class Header extends Component {
    render() {
        let { headerTitle, headerLeftIcon } = this.props;

        return(<header className="row">
            <AppBar
                title={headerTitle}

                iconElementLeft={((type) => {
                    switch(type) {
                        case 'menu': return <IconMenu />;
                        case 'close': return <IconClose />;
                        default: return <IconMenu />;
                    }
                })(headerLeftIcon)}
                
                iconElementRight={<FlatButton label="Save" />}
            />
        </header>);
    }
}

function mapStateToProps(state) {
  return {
    headerTitle: state.app.headerTitle,
    headerLeftIcon: state.app.headerLeftIcon,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

