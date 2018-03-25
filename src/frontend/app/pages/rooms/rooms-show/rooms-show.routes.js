import React from 'react';
import { Route } from 'react-router';

import RoomsShowContainer from './rooms-show.container';
import RoomsShowSettingsContainer from './rooms-show-settings/rooms-show-settings.container'

export default (
	<Route>
		<Route component={ RoomsShowContainer } path={ RoomsShowContainer.path } />
		<Route component={ RoomsShowSettingsContainer } path={ RoomsShowSettingsContainer.path } />
	</Route>
);
