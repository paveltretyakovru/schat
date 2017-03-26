import React, { Component } from 'react';

// Material-ui components
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

class RoomsShowUsersListComponent extends Component {
  render(){
    return(
      <List> 
        <Subheader>Users</Subheader>
        <ListItem primaryText="Brendan Lim"/>
      </List>
    );
  }
}

export default RoomsShowUsersListComponent;