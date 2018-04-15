import React from 'react'
import { View } from 'react-native'
import Text from './text'
import renderer from 'react-test-renderer'

describe('Text', () => {
  it('should render text with all attributes', () => {
    const tree = renderer
      .create(
        <View>
          <Text type="H1" color="primary">
            H1 Example text
          </Text>
          <Text type="H2">H2 Example text</Text>
          <Text type="H3">H3 Example text</Text>
          <Text type="H4">H4 Example text</Text>
          <Text type="H5">H5 Example text</Text>
          <Text type="B1">B1 Example text</Text>
          <Text type="B2">B2 Example text</Text>

          <View style={{ height: 2, margin: 15, alignSelf: 'stretch', backgroundColor: 'grey' }} />

          <Text type="H3" color="primary">
            H3 primary Example
          </Text>
          <Text type="H3" color="secondary">
            H3 secondary Example
          </Text>
          <Text type="H3" color="tertiary">
            H3 tertiary Example
          </Text>
          <Text type="H3" color="link">
            H3 link Example
          </Text>

          <View style={{ height: 3, margin: 15, alignSelf: 'stretch', backgroundColor: 'grey' }} />

          <Text type="H3" weight="light">
            H3 light text
          </Text>
          <Text type="H3" weight="book">
            H3 light text
          </Text>
          <Text type="H3" weight="medium">
            H3 light text
          </Text>

          <View style={{ height: 3, margin: 15, alignSelf: 'stretch', backgroundColor: 'grey' }} />

          <Text type="H3" disabled={true}>
            H3 disabled text
          </Text>
        </View>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render header text', () => {
    const tree = renderer
      .create(
        <Text style={{ color: 'red' }} numberOfLines={5} type="header">
          Some text here
        </Text>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render cta text', () => {
    const tree = renderer
      .create(
        <Text style={{ color: 'red' }} numberOfLines={5} type="cta">
          Some text here
        </Text>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render success text', () => {
    const tree = renderer
      .create(
        <Text style={{ color: 'red' }} numberOfLines={5} type="success">
          Some text here
        </Text>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render error text', () => {
    const tree = renderer
      .create(
        <Text style={{ color: 'red' }} numberOfLines={5} type="error">
          Some text here
        </Text>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render H1 text', () => {
    const tree = renderer.create(<Text type="H1">Some text here</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render H2 text', () => {
    const tree = renderer.create(<Text type="H2">Some text here</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render H3 text', () => {
    const tree = renderer.create(<Text type="H3">Some text here</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render H4 text', () => {
    const tree = renderer.create(<Text type="H4">Some text here</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render H5 text', () => {
    const tree = renderer.create(<Text type="H5">Some text here</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render B1 text', () => {
    const tree = renderer.create(<Text type="B1">Some text here</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render B2 text', () => {
    const tree = renderer.create(<Text type="B2">Some text here</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
