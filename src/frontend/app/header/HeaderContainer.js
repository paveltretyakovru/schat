import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as AppActions from '../AppActions';

import IconMenu from '../components/IconMenu';
import IconSave from '../components/IconSave';
import IconClose from '../components/IconClose';

class HeaderContainer extends Component {
    getStyle() {
        return {
            iconStyleRight: { marginTop: 16 },
        }
    }

    render() {
        let { headerTitle, headerLeftIcon, headerRightIcon } = this.props;

        return(<header className="row">
            <AppBar
                title={headerTitle}

                iconElementLeft={((type) => {
                    switch(type) {
                        case 'menu': return <IconMenu />;
                        
                        case 'close':
                            return <IconClose
                                action={this.props.appActions.routeToBack}
                            />;
                        
                        default: return <IconMenu />;
                    }
                })(headerLeftIcon)}
                
                iconElementRight={((type) => {
                    switch(type) {
                        case 'save': return <IconSave />;
                        
                        default: return null;
                    }
                })(headerRightIcon)}

                iconStyleRight={{
                    marginTop: 16,
                }}
            />
        </header>);
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

