import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import TriggerDebug from './common/debug/trigger-debug'
import Router from './utils/router/router.container'
import { initialiseStore, store } from './utils/redux/store.factory'
import Page from './common/page/page'

console.disableYellowBox = true

interface PageStateProps {
  isLoading: boolean
}
export default class App extends Component<PageStateProps, {}> {

  public componentWillMount() {
    initialiseStore()
    console.log('Store...', store)
  }

  public render() {
    return (
      <Provider store={store}>
        <TriggerDebug>
          <StatusBar
            hidden={false}
          />
          <Page>
            <Router />
          </Page>
        </TriggerDebug>
      </Provider>
    )
  }
}
