import { NavigationActions } from 'react-navigation'
import { AppNavigator } from './router.container'

const tubeListAction = AppNavigator.router.getActionForPathAndParams('TubeListPage')
let initialNavState = {}
if (tubeListAction) {
  initialNavState = AppNavigator.router.getStateForAction(tubeListAction, null)
} else {
  throw new Error('No default route in router.reducer.ts')
}

function nav(state: any = initialNavState, action: any) {
  let nextState
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state)
      break
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }

  return nextState || state
}

export default nav
