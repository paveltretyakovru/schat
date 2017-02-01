import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import React, {Component} from 'react';

import ButtonSaveContainer from '../buttons/button-save/button-save.container';
import ButtonMenuComponent from '../buttons/button-menu.component';
import ButtonCloseComponent from '../buttons/button-close/button-close.container.js';

const ButtonsList = {
  menu: <ButtonMenuComponent />,
  save: <ButtonSaveContainer />,
  close: <ButtonCloseComponent />,
};

class HeaderContainer extends Component {
  getStyle() {
    return {
      iconStyleRight: {marginTop: 16},
    }
  }

  render() {
    const { iconStyleRight } = this.getStyle();
    const { headerTitle, headerLeftIcon, headerRightIcon } = this.props;

    return (
      <header className="row">
        <AppBar
          title={ headerTitle }
          iconElementLeft={ ButtonsList[headerLeftIcon] }
          iconElementRight={ ButtonsList[headerRightIcon] }
          iconStyleRight={ iconStyleRight }
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

export default connect(mapStateToProps)(HeaderContainer);
