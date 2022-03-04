import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { renderWithTheme } from '../../utils/test/helpers'

import { Tabs } from '.'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('<Tabs />', () => {
  it('should render Tabs', () => {
    const { getAllByTestId } = renderWithTheme(
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>,
    )

    const tabBar = getAllByTestId('tab-bar')

    expect(tabBar).toBeTruthy()
  })
})
