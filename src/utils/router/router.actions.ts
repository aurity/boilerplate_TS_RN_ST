import {
  NavigationActions,
  NavigationNavigateActionPayload,
  NavigationBackAction,
  NavigationNavigateAction,
  NavigationResetAction,
} from 'react-navigation'

export function navigatePush(params: NavigationNavigateActionPayload): NavigationNavigateAction {
  return NavigationActions.navigate(params)
}

export function navigateReset(params: NavigationNavigateActionPayload): NavigationResetAction {
  return NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate(params)],
  })
}

export function navigatePop(): NavigationBackAction {
  return NavigationActions.back()
}
