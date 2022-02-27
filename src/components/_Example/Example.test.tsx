import React from 'react'

import { theme } from '../../styles/theme'

import { renderWithTheme } from '../../utils/test/helpers'

import { Example } from '.'

const defaultStyles = {
  alignItems: 'center',
  borderRadius: 16,
  justifyContent: 'center',
  marginBottom: 12,
  marginLeft: 12,
  marginRight: 12,
  marginTop: 12,
  opacity: 1,
  paddingBottom: 24,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 24,
  width: '50%',
}

describe('<Example />', () => {
  it('should render by default', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Example testID="example">Button</Example>,
    )

    const { props: text } = getByText('Button')
    const { props: example } = getByTestId('example')

    expect(text.children).toEqual('Button')
    expect(example.style).toEqual({
      ...defaultStyles,
      backgroundColor: theme.colors.primary,
    })
  })

  it('should render on secondary color', () => {
    const { getByTestId } = renderWithTheme(
      <Example color="secondary" testID="example">
        Button
      </Example>,
    )

    const { props: button } = getByTestId('example')

    expect(button.style).toEqual({
      ...defaultStyles,
      backgroundColor: theme.colors.secondary,
    })
  })
})
