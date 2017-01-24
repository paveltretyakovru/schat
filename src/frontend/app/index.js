// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Containers
import App from './AppContainer';
import RoomPage from '../room/RoomContainer';
import IndexPage from '../index/IndexContainer';
import RoomPageAdd from './room/add/RoomAddContainer';

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
                <IndexRoute component={IndexPage} />
                
                {/* Rooms routes */}
                <Route path="/room" component={RoomPage} />                
                <Route path="/room/add" component={RoomPageAdd} />

                <Route path="*" component={Page404} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);