import React, { Component } from 'react'

export class RoomsShowSettingsContainer extends Component {
  static path = '/rooms/:id/settings'

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        Room settings
      </div>
    )
  }
}