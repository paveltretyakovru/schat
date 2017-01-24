// Libs
import	thunk	from	'redux-thunk';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware} from 'redux';

// Reducers
import rootReduser from './rootReducer';

// Init variables 
const router = routerMiddleware(hashHistory);
const logger = createLogger();

let middlewares = (NODE_ENV === 'development')
  ? applyMiddleware(logger, thunk, router)
  : applyMiddleware(thunk, router);

export function configureStore() {

  // Add the reducer to your store on the `routing` key
  const Store = createStore(
    rootReduser,
    middlewares
  );

  if	(module.hot)	{
		module.hot.accept('./rootReducer',	()	=>	{
			const	nextRootReducer	=	require('./rootReducer').default;
			Store.replaceReducer(nextRootReducer);
		});
	}

  return Store
}
