import React, {Component} from 'react'

// Material
import {Tabs, Tab} from 'material-ui/Tabs'
import IconChat from 'material-ui/svg-icons/communication/chat'
import IconShare from 'material-ui/svg-icons/social/share'
import IconAttachFile from 'material-ui/svg-icons/editor/attach-file'
import IconSettings from 'material-ui/svg-icons/action/settings'

import './tabs-menu.component.css'

export class TabsMenuComponent extends Component {
  render() {
    return(
      <Tabs className="animated slideInDown chat-tabs-menu" initialSelectedIndex={2}>
        <Tab icon={<IconAttachFile />} />
        <Tab icon={<IconShare />} />
        <Tab icon={<IconChat />} onActive={this.props.routeToRoom} />
        <Tab icon={<IconSettings />} onActive={this.props.routeToSettings} />
      </Tabs>
    )
  }
}