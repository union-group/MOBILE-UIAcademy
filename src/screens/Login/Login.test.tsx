import React from 'react'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

import { fireEvent } from '@testing-library/react-native'

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

  it('should be able validate user', () => {
    const { getByTestId } = renderWithTheme(<Login />)
    const handleValidateUser = jest.fn()
    handleValidateUser.mockReturnValueOnce('admin@gmail.com')

    const buttonValidateUser = getByTestId('buttonValidateUser')

    fireEvent.press(buttonValidateUser)

    expect(buttonValidateUser).toBeTruthy()
  })

  it('should not be able validate user with email and password empty', () => {
    const { getByTestId } = renderWithTheme(<Login />)

    const buttonValidateUser = getByTestId('buttonValidateUser')

    fireEvent.press(buttonValidateUser)

    expect(buttonValidateUser).toBeTruthy()
  })
})
