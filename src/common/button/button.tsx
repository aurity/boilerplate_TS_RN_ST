import React from 'react'
import { TouchableOpacity, View, TextStyle, StyleSheet, TouchableOpacityProperties } from 'react-native'
import { Text } from '../../common'
import colors from '../../common/styles/colors'

interface ButtonProps extends TouchableOpacityProperties {
  stretch?: boolean
  accessibilityLabel?: string
  disabledColor?: string
  textColor?: string
  text: string
  textStyle?: TextStyle
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.primary, props.stretch ? { alignSelf: 'stretch'} : {} , props.style]}
      disabled={props.disabled}
      activeOpacity={0.3}
      onPress={props.onPress}
      accessibilityLabel={props.accessibilityLabel}
    >
      <View>
        <Text type="H5" style={[styles.primaryText, props.textStyle]}>{props.text.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  labelStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    height: 50,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.cta,
  },
  primaryText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    marginBottom: -4,
  },
})
