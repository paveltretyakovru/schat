import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import * as appActions from '../actions/app';
import * as roomActions from '../actions/room';

class IndexPage extends Component {
    componentWillMount() {
        this.props.appActions.updateHeaderTitle('Encrypted Chat');
        this.props.appActions.updateHeaderLeftIcon('menu');
        this.props.appActions.updateHeaderRightIcon('');
    }

    render() {
        const { routeToAddRoom } = this.props.roomActions;

        return(<div style={{position: 'relative'}}>
            <List className="animated fadeInLeft">
                <Subheader>Rooms List</Subheader>
                {(() => {
                    for (var room in this.props.rooms) {
                        if (this.props.rooms.hasOwnProperty(room)) {
                            return <ListItem
                                primaryText={this.props.rooms[room].title}
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
        rooms: state.rooms,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
        roomActions: bindActionCreators(roomActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);