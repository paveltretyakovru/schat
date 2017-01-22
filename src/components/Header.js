import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
    render() {
        return(<header className="row">
            <AppBar
                title="Encrypted chat"
                // showMenuIconButton={ false }
            />
        </header>);
    }
}