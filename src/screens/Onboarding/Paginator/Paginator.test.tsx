import React from 'react'

import { Animated } from 'react-native'

import { renderWithTheme } from '../../../utils/test/helpers'

import { slides } from '../slides'

import { Paginator } from '.'

describe('<Paginator />', () => {
  it('should render by default', () => {
    const scrollX = new Animated.Value(0)
    const { getByTestId, getAllByTestId } = renderWithTheme(
      <Paginator item={slides} scrollX={scrollX} />,
    )

    const container = getByTestId('container')
    const dot = getAllByTestId('dot')

    expect(container).toBeTruthy()
    expect(dot).toHaveLength(2)
  })
})
