// Reducers
// import * as reducers from './reducers';
import appReducer from './appReducer';
import roomsReducer from '../rooms/roomsReducer';

import	thunk	from	'redux-thunk';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';

const router = routerMiddleware(hashHistory);
const logger = createLogger();

let middlewares = (NODE_ENV === 'development')
  ? applyMiddleware(logger, thunk, router)
  : applyMiddleware(thunk, router);

export function configureStore() {

  // Add the reducer to your store on the `routing` key
  const Store = createStore(
    combineReducers({
      // ...reducers,
      app: appReducer,
      room: roomsReducer,
      routing: routerReducer,
    }),
    middlewares
  );

  if	(module.hot)	{
		module.hot.accept('./reducers',	()	=>	{
			const	nextRootReducer	=	require('./reducers').default;
			Store.replaceReducer(nextRootReducer);
		});
	}

  return Store
}
