// App libs
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// material-ui
import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

// actions
import * as AppActions from '../../app.actions';
import * as RoomsActions from './rooms.actions';
import * as HeaderActions from '../../shared/header/header.actions';

import ButtonMenuComponent from './shared/button-menu.component';

class IndexContainer extends Component {
    static path = '/rooms'

    componentWillMount() {
      this.props.setHeaderButtons(<ButtonMenuComponent />, null);
      this.props.headerActions.updateHeaderTitle('Encrypted chat');
    }

    render() {
        const { routeToAddRoom } = this.props.roomsActions;

        return(<div style={{position: 'relative'}}>
            <List className="animated fadeInLeft">
                <Subheader>room List</Subheader>
                {(() => {
                    for (var room in this.props.room) {
                        if (this.props.room.hasOwnProperty(room)) {
                            return <ListItem
                                primaryText={this.props.room[room].title}
                                rightIcon={<CommunicationChatBubble />}
                            />
                        }
                    }
                })()}
            </List>

            <div className="float-button">
                <FloatingActionButton
                    // mini={true}
                    onClick={() => routeToAddRoom()}
                    secondary={true}
                    className="animated zoomIn"
                >
                    <ContentAdd className="animated rotateIn" />
                </FloatingActionButton>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        room: state.room,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(AppActions, dispatch),
        roomsActions: bindActionCreators(RoomsActions, dispatch),
        headerActions: bindActionCreators(HeaderActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
