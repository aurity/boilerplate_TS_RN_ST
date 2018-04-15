import React from 'react'
import { ActivityIndicator, StyleSheet, ViewStyle, View } from 'react-native'

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
})

export default function Spinner() {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color="yellow" />
    </View>
  )
}
