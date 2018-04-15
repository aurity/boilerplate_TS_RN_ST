import { ViewStyle } from 'react-native'
import colors from '../styles/colors'

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlayBackgroundColor,
    zIndex: 999,
  } as ViewStyle,
}

export default styles
