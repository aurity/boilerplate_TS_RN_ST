import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Overlay from '../overlay/overlay'
import { isOverlayActiveSelector } from '../overlay/overlay.redux'

const styles = {
  view: {
    flex: 1,
    minWidth: '100%',
  },
}

interface PageStateProps {
  isLoading: boolean
}

interface PageProps extends PageStateProps {
  children: React.ReactNode,
}

class Page extends React.Component<PageProps, {}> {
  public render() {
    return (
      <View style={styles.view}>
        {this.props.children}
        <Overlay show={this.props.isLoading} />
      </View>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    isLoading: isOverlayActiveSelector(state),
  }
}

export default connect(mapStateToProps)(Page)
