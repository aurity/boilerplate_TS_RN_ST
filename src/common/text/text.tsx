import React, { ReactElement } from 'react'
import { Text as NativeText, TextProperties } from 'react-native'
import { getFontWeight, getStyleType, TextType, WightType } from './text.styles'
import { ColorType, getColor } from '../styles/colors'

export interface TextProps extends TextProperties {
  type?: TextType
  color?: ColorType
  weight?: WightType
  disabled?: boolean
  children: React.ReactNode
}

export default function Text(props: TextProps): ReactElement<TextProps> {
  const { style, children, color = 'primary', type, disabled = false, weight = 'book', ...other } = props
  const textStyle = getStyleType(type)
  const fontWeight = getFontWeight(weight)
  const fontColor = getColor(color)
  const disabledOpacity = disabled ? 0.7 : 1
  const label = color === 'link' ? toUpperCase(children) : children

  return (
    <NativeText
      allowFontScaling={false}
      {...other}
      style={[textStyle, { opacity: disabledOpacity, color: fontColor }, fontWeight, style]}
    >
      {label}
    </NativeText>
  )
}

function toUpperCase(children: React.ReactNode) {
  if (typeof children  === 'string') {
    return children.toUpperCase()
  }

  return children
}
