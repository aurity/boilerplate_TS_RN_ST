import { getStyleType } from './text.styles'

describe('getStyleType', () => {
  it('should have cta styles', () => {
    const styles = getStyleType('cta')
    expect(styles).toMatchSnapshot()
  })
})
