export interface SyncAction {
  type: string;
  payload?: any;
  startedPayload?: any;
}

export interface SyncStorageAction {
  type: string;
  path: string;
  saveToStorage: (state: any) => any;
}

export interface ReadStorageAction {
  type: string;
  path: string;
  readFromStorage: boolean;
}

export interface AsyncAction extends SyncAction {
  promise?: Promise <any>;
}

export interface ActionTypes extends SyncAction, AsyncAction, SyncStorageAction, ReadStorageAction {}
