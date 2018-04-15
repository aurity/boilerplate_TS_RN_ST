import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Text, Button } from '../../../common'
import { getAllTubes, getAllTubesSelector } from './tube.redux'
import { navigatePush } from '../../../utils/router/router.actions'
import { routes } from '../../../utils/router/routes'
import { isOverlayActiveSelector } from '../../../common/overlay/overlay.redux'

interface TubeListProps {
  tubeList: any
  isLoading: boolean
}

interface TubeListActions {
  getAllTubes: () => any
  navigateToTubeDetails: (tube: any) => any
}

interface TubeListFinalProps extends TubeListProps, TubeListActions {}
class TubeListPage extends Component <TubeListFinalProps, {}> {
  public componentDidMount() {
    this.props.getAllTubes()
  }

  public onPressTube = (tube: any) => {
    this.props.navigateToTubeDetails(tube)
  }

  public render() {
    return (
      <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center' }}>
        <Text>Tube Lines</Text>
        <FlatList
          data={this.props.tubeList}
          onRefresh={this.props.getAllTubes}
          refreshing={this.props.isLoading}
          renderItem={({ item }) => {
            return (
              <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
                <Button text={item.name} onPress={() => this.onPressTube(item)}/>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

function mapActionsToProps(dispatch: any) {
  return {
    getAllTubes: () => dispatch(getAllTubes()),
    navigateToTubeDetails: (tube: any) => dispatch(
      navigatePush({ routeName: routes.tubeDetailsPage, params: tube }),
    ),
  }
}

function mapStateToProps(state: any) {
  return {
    tubeList: getAllTubesSelector(state),
    isLoading: isOverlayActiveSelector(state),
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TubeListPage)
