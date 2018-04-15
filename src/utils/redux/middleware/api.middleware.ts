import {StoreType} from './middleware.types'

export default function apiMiddleware({dispatch, getState}: StoreType) {
  return (next: any) => (action: any) => {
    if (isFunction(action)) {
      return action({dispatch, getState})
    } else if (isPromise(action.promise) || isFunction(action.promise)) {
      next({type: `${action.type}_STARTED`, payload: action.payload})
      return (isPromise(action.promise) ? action.promise : action.promise())
        .then(
          (payload: any) => {
            const newPayload = {
              payload,
              type: `${action.type}_SUCCESS`,
              startedPayload: action.payload,
            }
            next(newPayload)

            return newPayload
          },
          (error: any) => {
            const newPayload = {
              error,
              type: `${action.type}_FAILED`,
              startedPayload: action.payload,
            }
            next(newPayload)

            return newPayload
          })
        .catch((error: any) => {
          // eslint-disable-next-line no-console
          console.error('Api Middleware error, ', error)
          next({error, type: `${action.type}_ERROR`})
          throw error
        })
    }

    return next(action)
  }
}

function isPromise(action: any) {
  return action && typeof action.then === 'function'
}

function isFunction(action: any) {
  return typeof action === 'function'
}
