import React from 'react'
import { View, PanResponder } from 'react-native'
import { connect } from 'react-redux'
import { navigatePush } from '../../utils/router/router.actions'
import _ from 'underscore'

interface Props {
  showDebug: () => any
  isDeveloper?: boolean
  children?: any
}

function TriggerDebug({ children, showDebug, isDeveloper }: Props) {
  const debug = _.debounce(showDebug, 100, false)
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (notUsed, gestureState) => {
      if (gestureState.numberActiveTouches === 4) {
        debug()
      }
      if (gestureState.numberActiveTouches === 5) {
        throw new Error('5 fingers on the screen!! not good - reload')
      }
      return true
    },
  })
  return isDeveloper ?
    <View style={{flex: 1}} {...panResponder.panHandlers}>{children}</View> :
    <View style={{flex: 1}}>{children}</View>
}

export default connect(
  (state) => ({
    isDeveloper: isDeveloperSelector(state),
  }),
  (dispatch) => ({
    showDebug: () => {
      dispatch(navigatePush({ routeName: 'Debug' }))
    },
  }),
)(TriggerDebug)

function isDeveloperSelector(state: any):boolean {
    // dummy implementation
    return !!state
}
