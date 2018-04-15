import { createStore, applyMiddleware } from 'redux'
import apiMiddleware from './middleware/api.middleware'
import { composeWithDevTools } from 'remote-redux-devtools'
import reducer from './app.reducers'
const middlewares = [apiMiddleware]
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)

export let store: any = null

interface InitialState {}
export function initialiseStore(initialState?: InitialState): any {
  store = createStoreWithMiddleware(reducer, initialState)
}
