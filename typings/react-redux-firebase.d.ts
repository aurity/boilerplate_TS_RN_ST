import * as reactReduxFirebase from 'react-redux-firebase'

declare module 'react-redux-firebase' {
  const firestoreConnect: reactReduxFirebase.firebaseConnect
  const firebaseConnect: reactReduxFirebase.firebaseConnect
}
