import React from 'react'

import { theme } from '../../styles/theme'

import { renderWithTheme } from '../../utils/test/helpers'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render by default', () => {
    const { getByTestId } = renderWithTheme(<Logo />)

    const container = getByTestId('container')

    expect(container).toHaveStyle({
      width: 189,
      height: 26,
      color: theme.colors.primary,
    })
  })

  it('should render with small size', () => {
    const { getByTestId } = renderWithTheme(<Logo size="small" />)

    const container = getByTestId('container')

    expect(container).toHaveStyle({
      width: 116,
      height: 16,
    })
  })

  it('should render with large size', () => {
    const { getByTestId } = renderWithTheme(<Logo size="large" />)

    const container = getByTestId('container')

    expect(container).toHaveStyle({
      width: 210,
      height: 22,
    })
  })

  it('should render with black color', () => {
    const { getByTestId } = renderWithTheme(<Logo color="black" />)

    const container = getByTestId('container')

    expect(container).toHaveStyle({
      color: theme.colors.black,
    })
  })
})
