import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import routes from './routes'

export const AppNavigator = StackNavigator(routes)

interface AppWithNavigationStateProps {
  dispatch: any,
  nav: any,
}

function addListener() { return { remove: () => ({}) }}

const AppWithNavigationState = ({ dispatch, nav }: AppWithNavigationStateProps) =>
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener })} />

const mapStateToProps = (state: any) => {
  return {
    nav: state.get('nav'),
  }
}

export default connect(mapStateToProps)(AppWithNavigationState)
