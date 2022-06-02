import React from 'react'

import { fireEvent } from '@testing-library/react-native'
import { FlatList } from 'react-native'

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import { renderWithTheme } from '../../utils/test/helpers'

import { OnboardingItem } from './OnboardingItem'
import { slides } from './slides'

import { Onboarding } from '.'

jest.mock(
  '@react-native-async-storage/async-storage',
  () => mockAsyncStorage,
)

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  }
})

describe('<Onboarding />', () => {
  it('should render by default', () => {
    const { getAllByTestId, UNSAFE_getAllByType } = renderWithTheme(
      <Onboarding />,
    )

    const skip = getAllByTestId('skip')
    fireEvent.press(skip[0])

    expect(UNSAFE_getAllByType(FlatList).length).toBe(1)
    expect(UNSAFE_getAllByType(OnboardingItem).length).toBe(
      slides.length,
    )

    expect(skip).toBeTruthy()
  })
})
