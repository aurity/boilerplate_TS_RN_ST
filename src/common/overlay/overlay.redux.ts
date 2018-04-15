import { fromJS } from 'immutable'
import { SyncAction } from '../../utils/redux/action.types'
import { ImmutableMap } from '../../utils/redux/immutable.helpers'

export const APP_OVERLAY_SHOW = 'APP_OVERLAY_SHOW'
export const APP_OVERLAY_HIDE = 'APP_OVERLAY_HIDE'

interface OverlayState extends ImmutableMap<{ overlayVisible: boolean }> {}

export { triggerAppOverlay, isOverlayActiveSelector }

// ACTIONS

function triggerAppOverlay(overlayVisible: boolean): SyncAction {
  if (overlayVisible) {
    return { type: APP_OVERLAY_SHOW }
  }
  return { type: APP_OVERLAY_HIDE }
}

/// REDUCER

function createInitialState(): OverlayState {
  return fromJS({
    overlayVisible: false,
  })
}

export default function overlayReducer(state: any = createInitialState(), action: SyncAction) {

  if (action.type.endsWith('_STARTED')) {
    console.log('actions GOOO', action.type)
    return state.set('overlayVisible', true)
  } else if (action.type.endsWith('_SUCCESS') || action.type.endsWith('_FAILED')) {
    console.log('actions DONE', action.type)
    return state.set('overlayVisible', false)
  }

  switch (action.type) {
    case APP_OVERLAY_SHOW: {
      return state.set('overlayVisible', true)
    }

    case APP_OVERLAY_HIDE: {
      return state.set('overlayVisible', false)
    }

    default: {
      return state
    }
  }
}

/// SELECTORS

function isOverlayActiveSelector(state: any): boolean {
  return state.getIn(['overlayReducer', 'overlayVisible'])
}
