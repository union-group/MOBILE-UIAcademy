import React from 'react'

import { theme } from '../../styles/theme'

import { renderWithTheme } from '../../utils/test/helpers'

import { ButtonIcon } from '.'

describe('<ButtonIcon />', () => {
  it('should render by default', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <ButtonIcon
        action={() => ({})}
        iconName="search"
        testID="buttonIcon"
      />,
    )

    const buttonIcon = getByTestId('buttonIcon')

    expect(buttonIcon.props.iconName).toEqual('search')
  })
})
