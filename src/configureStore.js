import * as reducers from './reducers'
import	thunk	from	'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware} from 'redux'

const logger = createLogger()

let middlewares = (NODE_ENV === 'development')
  ? applyMiddleware(logger, thunk)
  : applyMiddleware(thunk)

export function configureStore() {

  // Add the reducer to your store on the `routing` key
  const Store = createStore(
    combineReducers({
      ...reducers,
    }),
    middlewares
  )

  if	(module.hot)	{
		module.hot.accept('./reducers',	()	=>	{
			const	nextRootReducer	=	require('./reducers').default
			Store.replaceReducer(nextRootReducer)
		})
	}

  return Store
}
