import React from 'react'

import { RFValue } from 'react-native-responsive-fontsize'
import { theme } from '../../../styles/theme'

import { renderWithTheme } from '../../../utils/test/helpers'

import { Avatar } from '.'

describe('<Avatar />', () => {
  it('should render by default', () => {
    const { getByTestId } = renderWithTheme(
      <Avatar imgUrl="https://cdn.server.com/photo.png" />,
    )

    const roundImage = getByTestId('roundImage')

    expect(roundImage.props.source.uri).toEqual(
      'https://cdn.server.com/photo.png',
    )
    expect(roundImage).toHaveStyle({
      width: RFValue(50),
      height: RFValue(50),
      borderRadius: Number(theme.borderRadius[4]),
    })
  })
  it('should render Avatar with status', () => {
    const { getByTestId } = renderWithTheme(
      <Avatar imgUrl="https://cdn.server.com/photo.png" withStatus />,
    )

    const fillStatus = getByTestId('fillStatus')
    const imageWithStatus = getByTestId('imageWithStatus')

    expect(fillStatus).toHaveStyle({
      width: RFValue(22),
      height: RFValue(22),
      backgroundColor: theme.colors.primary,
      borderRadius: Number(theme.borderRadius[4]),
    })

    expect(imageWithStatus).toHaveStyle({
      borderRadius: Number(theme.borderRadius[2]),
    })
  })
})
