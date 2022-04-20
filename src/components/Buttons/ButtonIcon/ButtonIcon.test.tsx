import React from 'react'

import { RFValue } from 'react-native-responsive-fontsize'
import { ThemeProvider } from 'styled-components/native'

import { theme } from '../../../styles/theme'

import { renderWithTheme } from '../../../utils/test/helpers'
import { selectSizeIcon } from '../../../utils/selectSizeIcon'

import { ButtonIcon } from '.'

import SearchSvg from '../../assets/search.svg'

describe('<ButtonIcon />', () => {
  it('should render by default', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonIcon
        svg={SearchSvg}
        size="medium"
        testID="buttonIcon"
      />,
    )

    const buttonIcon = getByTestId('buttonIcon')

    expect(buttonIcon).toBeTruthy()
    expect(buttonIcon).toHaveStyle({
      backgroundColor: 'transparent',
      paddingTop: RFValue(12),
      paddingRight: RFValue(12),
      paddingBottom: RFValue(12),
      paddingLeft: RFValue(12),
    })

    expect(selectSizeIcon('medium')).toBe(RFValue(24))
  })
  it('should be render only icon', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonIcon svg={SearchSvg} onlyIcon />,
    )

    const buttonIcon = getByTestId('button-icon')

    expect(buttonIcon).toHaveStyle({
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
    })
  })
  it('should be render button icon with text', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonIcon svg={SearchSvg} text="120" />,
    )

    const buttonIcon = getByTestId('text-icon')

    expect(buttonIcon.props.children).toEqual('120')
  })
  it('should be render button icon with respective fill color', () => {
    const { getByTestId, rerender } = renderWithTheme(
      <ButtonIcon
        testID="buttonIcon"
        svg={SearchSvg}
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
          svg={SearchSvg}
          fillColor="white"
        />
        ,
      </ThemeProvider>,
    )

    expect(buttonIcon).toHaveStyle({
      backgroundColor: theme.colors.white,
    })
  })
  it('should be render icon with text in respective size and padding', () => {
    const { getByTestId, rerender } = renderWithTheme(
      <ButtonIcon svg={SearchSvg} size="xsmall" />,
    )

    expect(selectSizeIcon('xsmall')).toBe(RFValue(12))

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon svg={SearchSvg} size="small" />,
      </ThemeProvider>,
    )

    expect(selectSizeIcon('small')).toBe(RFValue(16))

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon svg={SearchSvg} size="medium" />,
      </ThemeProvider>,
    )

    expect(selectSizeIcon('medium')).toBe(RFValue(24))

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon svg={SearchSvg} size="large" />,
      </ThemeProvider>,
    )

    expect(selectSizeIcon('large')).toBe(RFValue(30))

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon svg={SearchSvg} size="xsmall" text="120" />,
      </ThemeProvider>,
    )

    const iconWithText = getByTestId('text-icon')

    expect(iconWithText).toHaveStyle({
      paddingLeft: RFValue(6),
      fontSize: RFValue(theme.fonts.sizes.xsmall),
    })

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon svg={SearchSvg} size="small" text="120" />,
      </ThemeProvider>,
    )

    expect(iconWithText).toHaveStyle({
      paddingLeft: RFValue(6),
      fontSize: RFValue(theme.fonts.sizes.small),
    })

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon svg={SearchSvg} size="medium" text="120" />,
      </ThemeProvider>,
    )

    expect(iconWithText).toHaveStyle({
      paddingLeft: RFValue(6),
      fontSize: RFValue(theme.fonts.sizes.medium),
    })

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonIcon svg={SearchSvg} size="large" text="120" />,
      </ThemeProvider>,
    )

    expect(iconWithText).toHaveStyle({
      paddingLeft: RFValue(6),
      fontSize: RFValue(theme.fonts.sizes.large),
    })
  })
})
