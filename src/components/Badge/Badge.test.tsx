import React from 'react'

import { RFValue } from 'react-native-responsive-fontsize'
import { theme } from '../../styles/theme'

import { renderWithTheme } from '../../utils/test/helpers'

import { Badge } from '.'

describe('<Badge />', () => {
  it('should render by default', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Badge text="ao vivo" />,
    )

    const container = getByTestId('container')
    const text = getByText('ao vivo')

    expect(text).toBeTruthy()

    expect(container).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      minWidth: RFValue(67),
    })
  })
  it('should render badge with circle', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Badge text="ao vivo" withCircle />,
    )

    const container = getByTestId('container')
    const text = getByText('ao vivo')
    const circleFilled = getByTestId('circleFilled')

    expect(container).toHaveStyle({
      backgroundColor: 'transparent',
      minWidth: RFValue(78),
      borderWidth: 1,
      borderColor: theme.colors.neutral,
    })

    expect(text).toBeTruthy()
    expect(circleFilled).toBeTruthy()
  })
})
