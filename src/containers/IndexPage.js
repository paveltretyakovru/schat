import React, { Component } from 'react';

import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class IndexPage extends Component {
    render() {
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
                <FloatingActionButton secondary={true}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        </div>);
    }
}

export default IndexPage;