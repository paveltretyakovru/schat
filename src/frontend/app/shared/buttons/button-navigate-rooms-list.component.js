import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';


import { routeToRoomsList } from '../../pages/rooms/rooms.actions';

class ButtonNavigateRoomsList extends Component {
  render() {
    return(
      <IconButton
        onClick={() => this.props.routeToRoomsList()}
        tooltip="Go to Rooms List"
        // className="animated rotateIn"
      >
        <NavigationArrowBack color={white} />
      </IconButton>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({routeToRoomsList}, dispatch),
  }
}

export default connect(
  function(){return {}},
  mapDispatchToProps
)(ButtonNavigateRoomsList);
