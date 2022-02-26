import React from 'react'

import { theme } from '../../styles/theme'

import { renderWithTheme } from '../../utils/test/helpers'

import { Button } from '.'

const defaultStyles = {
  alignItems: 'center',
  borderRadius: 16,
  justifyContent: 'center',
  marginBottom: 16,
  marginLeft: 16,
  marginRight: 16,
  marginTop: 16,
  opacity: 1,
  paddingBottom: 24,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 24,
  width: '50%',
}

describe('<Button />', () => {
  it('should render by default', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Button testID="button">Button</Button>,
    )

    const { props: ButtonText } = getByText('Button')
    const { props: button } = getByTestId('button')

    expect(ButtonText.children).toEqual('Button')
    expect(button.style).toEqual({
      ...defaultStyles,
      backgroundColor: theme.colors.purple,
    })
  })

  it('should render on blue color', () => {
    const { getByTestId } = renderWithTheme(
      <Button color="blue" testID="button">
        Button
      </Button>,
    )

    const { props: button } = getByTestId('button')

    expect(button.style).toEqual({
      ...defaultStyles,
      backgroundColor: theme.colors.blue,
    })
  })
})
