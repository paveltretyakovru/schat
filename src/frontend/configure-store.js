// Libs
import	thunk	from	'redux-thunk';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware} from 'redux';

// Reducers
import rootReducer from './reducers';

// Init variables 
const router = routerMiddleware(hashHistory);
const logger = createLogger();

let middlewares = (NODE_ENV === 'development')
  ? applyMiddleware(logger, thunk, router)
  : applyMiddleware(thunk, router);

export function configureStore() {

  // Add the reducer to your store on the `routing` key
  const Store = createStore(
    rootReducer,
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
