export {
  getParams,
}

function getParams(props: any): any {
  if (props && props.navigation && props.navigation.state) {
    return props.navigation.state.params
  }

  return undefined
}
