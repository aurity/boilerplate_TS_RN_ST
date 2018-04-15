import { fromJS } from 'immutable'
import { SyncAction, AsyncAction } from '../../../utils/redux/action.types'
import { ImmutableMap } from '../../../utils/redux/immutable.helpers'
import * as tubeApiService from '../api/tube.api'

export const GET_ALL_TUBES = 'GET_ALL_TUBES'
export const GET_ALL_TUBES_SUCCESS = 'GET_ALL_TUBES_SUCCESS'

interface TubeState extends ImmutableMap<{ overlayVisible: boolean }> {}

export { getAllTubes, getAllTubesSelector }

// ACTIONS
function getAllTubes() {
  return ({ dispatch }: { dispatch: any }) => {
    const action: AsyncAction = {
      type: GET_ALL_TUBES,
      promise: tubeApiService.fetchAllTubes(),
      payload: {},
    }
    return dispatch(action)
  }
}

/// REDUCER

function createInitialState(): TubeState {
  return fromJS({
    tubeList: [],
  })
}

export default function tubeReducer(state: any = createInitialState(), action: SyncAction) {

  switch (action.type) {
    case GET_ALL_TUBES_SUCCESS: {
      return state.set('tubeList', fromJS(action.payload))
    }

    default: {
      return state
    }
  }
}

/// SELECTORS

function getAllTubesSelector(state: any): any[] {
  const tubeList = state.getIn(['tubeReducer', 'tubeList'])

  if (tubeList) {
    return tubeList.toJS()
  }

  return []
}
