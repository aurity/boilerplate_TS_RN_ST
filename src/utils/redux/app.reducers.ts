import { combineReducers } from 'redux-immutable'
import nav from '../router/router.reducer'
import tubeReducer from '../../tfl/tube/components/tube.redux'
import overlayReducer from '../../common/overlay/overlay.redux'

const allReducers = combineReducers({
  nav,
  tubeReducer,
  overlayReducer,
})

export default allReducers
