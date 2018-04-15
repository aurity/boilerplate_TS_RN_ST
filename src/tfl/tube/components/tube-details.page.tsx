import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import { connect } from 'react-redux'
import { Text, Button } from '../../../common'
import { getParams } from '../../../utils/router/router.selectors'

interface TubeListProps {
  tube: any
}

interface TubeListActions {
  getTubeUpdates: () => any
}

interface TubeListFinalProps extends TubeListProps, TubeListActions {}
class TubeDetailsPage extends Component <TubeListFinalProps, {}> {
  public componentDidMount() {
    // TODO fetch data for live status
    // in this case I would use direct call without redux and just set state, while we want to always updated data
  }

  public onFavPressed = () => {
    Alert.alert('Added', this.props.tube.name)
    // TODO add logic to save this tube to apps fav
    // for that we can use localStorage or my custom storage which works cross platform iOS-Android-Web
    // https://github.com/aurity/react-native-web-storage
  }

  public render() {
    const { tube } = this.props
    return (
      <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center' }}>
        <Text type="H1">Tube Lines</Text>
        <Text type="H2">{tube.name}</Text>
        <Button text={`Add to fav ${tube.name}`} onPress={this.onFavPressed}/>
      </View>
    )
  }
}

function mapActionsToProps() {
  return {
    getTubeUpdates: () => ({}),
  }
}

function mapStateToProps(state: any, props: any) {
  return {
    tube: getParams(props),
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TubeDetailsPage)
