import React from 'react'

import { RFValue } from 'react-native-responsive-fontsize'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../styles/theme'

import { renderWithTheme } from '../../utils/test/helpers'

import { ButtonIcon } from '.'

describe('<ButtonIcon />', () => {
  it('should render by default', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonIcon
        action={() => ({})}
        iconName="search1"
        testID="buttonIcon"
      />,
    )

    const buttonIcon = getByTestId('buttonIcon')

    expect(buttonIcon.props.size).toEqual('small')
  })
  it('should be render only icon', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonIcon action={() => ({})} iconName="search1" onlyIcon />,
    )

    const buttonIcon = getByTestId('button-icon')

    expect(buttonIcon.props.onlyIcon).toEqual(true)
  })
  it('should be render button icon with text', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonIcon
        action={() => ({})}
        iconName="search1"
        title="120"
      />,
    )

    const buttonIcon = getByTestId('text-icon')

    expect(buttonIcon.props.children).toEqual('120')
  })
  it('should be render icon in right side', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonIcon
        action={() => ({})}
        iconName="search1"
        directionIcon="right"
      />,
    )

    const buttonIcon = getByTestId('button-icon')

    expect(buttonIcon.props.directionIcon).toEqual('right')
  })
  it('should be render icon with respective size', () => {
    const { getByTestId, rerender } = renderWithTheme(
      <ButtonIcon
        action={() => ({})}
        iconName="search1"
        size="xsmall"
      />,
    )

    const buttonIcon = getByTestId('icon')

    expect(buttonIcon).toHaveStyle({
      fontSize: RFValue(12),
    })

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon
          action={() => ({})}
          iconName="search1"
          size="medium"
        />
        ,
      </ThemeProvider>,
    )

    expect(buttonIcon).toHaveStyle({
      fontSize: RFValue(24),
    })
  })
  it('should be render icon with text in respective size and padding', () => {
    const { getByTestId, rerender } = renderWithTheme(
      <ButtonIcon
        action={() => ({})}
        iconName="search1"
        size="xsmall"
        directionIcon="left"
        title="120"
      />,
    )

    const buttonIcon = getByTestId('text-icon')

    expect(buttonIcon.props.directionIcon).toEqual('left')
    expect(buttonIcon).toHaveStyle({
      paddingLeft: RFValue(6),
      paddingRight: RFValue(10),
      fontSize: RFValue(theme.fonts.sizes.xsmall),
    })

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon
          action={() => ({})}
          iconName="search1"
          size="small"
          directionIcon="right"
          title="120"
        />
        ,
      </ThemeProvider>,
    )

    expect(buttonIcon.props.directionIcon).toEqual('right')
    expect(buttonIcon).toHaveStyle({
      paddingLeft: RFValue(12),
      paddingRight: RFValue(6),
      fontSize: RFValue(theme.fonts.sizes.small),
    })

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon
          action={() => ({})}
          iconName="search1"
          size="medium"
          directionIcon="right"
          title="120"
        />
        ,
      </ThemeProvider>,
    )

    expect(buttonIcon.props.directionIcon).toEqual('right')
    expect(buttonIcon).toHaveStyle({
      paddingLeft: RFValue(25),
      paddingRight: RFValue(6),
      fontSize: RFValue(theme.fonts.sizes.medium),
    })
  })
  it('should be render button icon with padding-left 0', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonIcon
        action={() => ({})}
        iconName="search1"
        size="xsmall"
        title="120"
        directionIcon="right"
      />,
    )

    const buttonIcon = getByTestId('button-icon')

    expect(buttonIcon).toHaveStyle({
      paddingLeft: 0,
    })
  })
  it('should be render button icon with respective fill color', () => {
    const { getByTestId, rerender } = renderWithTheme(
      <ButtonIcon
        testID="buttonIcon"
        action={() => ({})}
        iconName="search1"
        fillColor="green"
      />,
    )

    const buttonIcon = getByTestId('buttonIcon')

    expect(buttonIcon).toHaveStyle({
      backgroundColor: theme.colors.primary,
    })

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon
          testID="buttonIcon"
          action={() => ({})}
          iconName="search1"
          fillColor="white"
        />
        ,
      </ThemeProvider>,
    )

    expect(buttonIcon).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    })
  })
})
