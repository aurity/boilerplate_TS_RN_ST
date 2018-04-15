import React from 'react'
import { View } from 'react-native'
import { Spinner } from '../../common'
import styles from './overlay.styles'

interface OverlayProps {
  show: boolean
}

export default function Overlay({ show }: OverlayProps) {
  if (!show) {
    return null
  }
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  )
}
