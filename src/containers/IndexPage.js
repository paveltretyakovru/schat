import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import * as roomActions from '../actions/room';

class IndexPage extends Component {
    render() {
        const { routeToAddRoom } = this.props.roomActions;

        return(<div>
            <List>
                <Subheader>Rooms List</Subheader>
                <ListItem
                    primaryText="Brendan Lim"
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Eric Hoffman"
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Grace Ng"
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Kerem Suer"
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Raquel Parrado"
                    rightIcon={<CommunicationChatBubble />}
                />
            </List>

            <div className="float-button">
                <FloatingActionButton
                    secondary={true}
                    onClick={ () => routeToAddRoom() }
                >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        </div>);
    }
}

function mapStateToProps() {
    return { }
}

function mapDispatchToProps(dispatch) {
    return {
        roomActions: bindActionCreators(roomActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);