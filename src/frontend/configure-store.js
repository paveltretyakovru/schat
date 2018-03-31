// Libs
import	thunk	from	'redux-thunk'
import DevTools from './app/shared/devtools'
import { createStore, applyMiddleware, compose} from 'redux'

import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
// import {routerMiddleware} from 'react-router-redux'

// Reducers
import rootReducer from './reducers';

// Init variables 
const history = createHistory()
const router = routerMiddleware(history)

let middlewares = (NODE_ENV === 'development')
  ? applyMiddleware(thunk, router)
  : applyMiddleware(router);

let enhancer = (NODE_ENV === 'development')
  ? compose(middlewares, DevTools.instrument())
  : compose(middlewares);

export function configureStore() {
  // Add the reducer to your store on the `routing` key
  const store = createStore(
    rootReducer,
    enhancer
  );

  if	(module.hot)	{
    module.hot.accept('./reducers',	()	=>	{
      const	nextRootReducer	=	require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return { history, store }
}
