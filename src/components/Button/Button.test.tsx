import React from 'react'

import { RFValue } from 'react-native-responsive-fontsize'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../styles/theme'

import { renderWithTheme } from '../../utils/test/helpers'

import { Button } from '.'

describe('<Button />', () => {
  it('should render by default', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Button testID="button">Button</Button>,
    )

    const button = getByTestId('button')
    const text = getByText('Button')

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.primary,
      width: RFValue(295),
      height: RFValue(42),
    })

    expect(text.props.children).toEqual('Button')
    expect(text).toHaveStyle({
      color: theme.colors.black,
    })
  })
  it('should render with black color', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Button color="black" testID="button">
        Button
      </Button>,
    )

    const button = getByTestId('button')
    const text = getByText('Button')

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.black,
      width: RFValue(295),
      height: RFValue(42),
    })

    expect(text).toHaveStyle({
      color: theme.colors.secondary,
    })
  })

  it('should render with correct sizes', () => {
    const { getByTestId, rerender } = renderWithTheme(
      <Button size="small" testID="button">
        Button
      </Button>,
    )

    const button = getByTestId('button')

    expect(button).toHaveStyle({
      width: RFValue(160),
      height: RFValue(42),
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Button size="large" testID="button">
          Button
        </Button>
        ,
      </ThemeProvider>,
    )

    expect(button).toHaveStyle({
      width: RFValue(300),
      height: RFValue(54),
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Button size="fullWidth" testID="button">
          Button
        </Button>
        ,
      </ThemeProvider>,
    )

    expect(button).toHaveStyle({
      width: '100%',
      height: RFValue(54),
    })
  })
})
