// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Containers
import App from './AppContainer';
import RoomContainer from '../room/RoomContainer';
import IndexContainer from '../index/IndexContainer';
import RoomAddContainer from '../room/add/RoomAddContainer';

// Components
import Page404 from './components/404';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store, {
  adjustUrlOnReplay: false,
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={IndexContainer} />
                
                {/* Rooms routes */}
                <Route path="/room" component={RoomContainer} />                
                <Route path="/room/add" component={RoomAddContainer} />

                <Route path="*" component={Page404} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);