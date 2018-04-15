export type ColorType = 'primary' | 'secondary' | 'tertiary' | 'link'

export {
  getColor,
}

const colors = {
  primaryLight: '#373951',
  primaryDark: '#121320',
  primaryText: '#898482',

  cta: '#fc4545',
  success: '#b5da84',
  error: '#fc4545',
  errorDisabled: '#9d0202',

  buttonBackgroundColor: '#4d4f54',
  buttonBackgroundColorDisabled: '#26272a',
  overlayBackgroundColor: 'rgba(0, 0, 0, 0.4)',

  backgroundColor: '#292c33',
  headerText: '#b5da84',

  // Main colors
  primary: 'red',
  secondary: 'yellow',
  tertiary: 'black',
  link: 'blue',

  // toastr

  successColor: '#709F01',
  errorColor: '#E92728',
  infoColor: '#079DD0',
  warningColor: '#FF9106',

  black: '#000000',
  white: '#FFFFFF',
}

export default colors

function getColor(color: ColorType) {
  switch (color) {
    case 'primary':
      return colors.primary
    case 'secondary':
      return colors.secondary
    case 'tertiary':
      return colors.tertiary
    case 'link':
      return colors.link
    default:
      return colors.primary
  }
}
