import React from 'react'

import { RFValue } from 'react-native-responsive-fontsize'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../styles/theme'

import { renderWithTheme } from '../../utils/test/helpers'

import { ButtonSocial } from '.'
import GoogleSvg from '../../assets/google.svg'

jest.mock('../../assets/google.svg', () => () => (
  <h1 style={{ width: 20, height: 20 }}>Esse é o meu svg</h1>
))

describe('<ButtonSocial />', () => {
  it('should render by default', () => {
    const { getByTestId, rerender } = renderWithTheme(
      <ButtonSocial
        testID="buttonSocial"
        svg={GoogleSvg}
        title="Google"
      />,
    )

    const buttonSocial = getByTestId('buttonSocial')

    expect(buttonSocial).toBeTruthy()
    expect(buttonSocial).toHaveStyle({
      width: RFValue(160),
      paddingTop: RFValue(16),
      paddingBottom: RFValue(16),
      paddingRight: RFValue(32),
      paddingLeft: RFValue(32),
      borderRadius: 10,
    })

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonSocial
          testID="buttonSocial"
          svg={GoogleSvg}
          title="Google"
        />
        ,
      </ThemeProvider>,
    )

    const titleButtonSocial = getByTestId('title-button')

    expect(titleButtonSocial).toHaveStyle({
      fontFamily: theme.fonts.medium,
      fontSize: RFValue(16),
      color: theme.colors.black,
      marginLeft: RFValue(8),
    })
  })
})
