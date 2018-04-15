import {SyncAction, AsyncAction} from '../action.types'

export interface StoreType {
  dispatch: (action: SyncAction | AsyncAction) => any
  getState: any
}
