import React from 'react'

import { renderWithTheme } from '../../../utils/test/helpers'

import { ButtonSocial } from '.'

import GoogleSvg from '../../assets/google.svg'

describe('<ButtonSocial />', () => {
  it('should render by default', () => {
    const { getByTestId } = renderWithTheme(
      <ButtonSocial
        testID="buttonSocial"
        svg={GoogleSvg}
        title="Google"
      />,
    )

    const buttonSocial = getByTestId('buttonSocial')
    const titleButtonSocial = getByTestId('title-button')

    expect(buttonSocial).toBeTruthy()
    expect(titleButtonSocial).toBeTruthy()
  })
  it('should match snapshot', () => {
    const { toJSON } = renderWithTheme(
      <ButtonSocial
        testID="buttonSocial"
        svg={GoogleSvg}
        title="Google"
      />,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
