import React from 'react'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

import { renderWithTheme } from '../../utils/test/helpers'

import { Login } from '.'

jest.mock(
  '@react-native-async-storage/async-storage',
  () => mockAsyncStorage,
)

describe('<Login />', () => {
  it('should render by default', () => {
    const { getByTestId } = renderWithTheme(<Login />)

    const container = getByTestId('containerLogin')

    expect(container).toBeTruthy()
  })
})
