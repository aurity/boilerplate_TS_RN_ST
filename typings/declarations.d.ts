declare const module: any

declare module '*.png' {
  const value: any
  export default value
}

declare module '@storybook/react-native' {
  export const storiesOf: Function
  export const configure: Function
  export const getStorybookUI: Function
}
