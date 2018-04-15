import { RegisteredStyle, StyleSheet, TextStyle } from 'react-native'
import colors from '../styles/colors'

export type WightType = 'light' | 'book' | 'medium'
export type TextType =
  | 'cta'
  | 'success'
  | 'error'
  | 'header'
  | 'default'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'B1'
  | 'B2'
  | undefined

export { getStyleType, getFontWeight }

function getFontWeight(weight: WightType): RegisteredStyle<TextStyle> {
  switch (weight) {
    case 'light':
      return lightFontWeight.text
    case 'book':
      return bookFontWeight.text
    case 'medium':
      return mediumFontWeight.text
    default:
      return bookFontWeight.text
  }
}

function getStyleType(type: TextType): RegisteredStyle<TextStyle> {
  switch (type) {
    case 'success':
      return successTextStyles.text
    case 'header':
      return headerTextStyles.text
    case 'error':
      return errorTextStyles.text
    case 'cta':
      return ctaTextStyles.text
    case 'H1':
      return h1TextStyles.text
    case 'H2':
      return h2TextStyles.text
    case 'H3':
      return h3TextStyles.text
    case 'H4':
      return h4TextStyles.text
    case 'H5':
      return h5TextStyles.text
    case 'B1':
      return b1TextStyles.text
    case 'B2':
      return b2TextStyles.text
    default:
      return defaultTextStyles.text
  }
}

const baseText: TextStyle = {
  textAlign: 'center',
  backgroundColor: 'transparent',
  fontSize: 17,
}

const lightFontWeight = StyleSheet.create({
  text: {},
})

const bookFontWeight = StyleSheet.create({
  text: {},
})

const mediumFontWeight = StyleSheet.create({
  text: {},
})

const defaultTextStyles = StyleSheet.create({
  text: {
    ...baseText,
    color: colors.primaryText,
  },
})

// cta - Call to action text
const ctaTextStyles = StyleSheet.create({
  text: {
    ...baseText,
    color: colors.cta,
  },
})

const headerTextStyles = StyleSheet.create({
  text: {
    ...baseText,
    color: colors.headerText,
    fontSize: 22,
  },
})

const successTextStyles = StyleSheet.create({
  text: {
    ...baseText,
    color: colors.success,
  },
})

const errorTextStyles = StyleSheet.create({
  text: {
    ...baseText,
    color: colors.error,
  },
})

const h1TextStyles = StyleSheet.create({
  text: {
    ...baseText,
    fontSize: 30,
    margin: 3,
  },
})

const h2TextStyles = StyleSheet.create({
  text: {
    ...baseText,
    fontSize: 25,
    margin: 3,
  },
})

const h3TextStyles = StyleSheet.create({
  text: {
    ...baseText,
    fontSize: 22,
    margin: 3,
  },
})

const h4TextStyles = StyleSheet.create({
  text: {
    ...baseText,
    fontSize: 20,
    lineHeight: 24,
    color: colors.black,
  },
})

const h5TextStyles = StyleSheet.create({
  text: {
    ...baseText,
    fontSize: 14,
    lineHeight: 18,
    color: colors.black,
  },
})

const b1TextStyles = StyleSheet.create({
  text: {
    ...baseText,
    fontSize: 16,
    lineHeight: 22,
  },
})

const b2TextStyles = StyleSheet.create({
  text: {
    ...baseText,
    fontSize: 12,
    lineHeight: 16,
  },
})
