import React from 'react'

import { fireEvent, waitFor } from '@testing-library/react-native'

import { renderWithTheme } from '../../utils/test/helpers'

import { Input } from '.'

describe('<Input />', () => {
  it('should render by default', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Input
        testID="input"
        label="Email"
        placeholder="Digite seu email"
      />,
    )

    const input = getByTestId('input')
    const label = getByText('Email')

    expect(input).toBeTruthy()
    expect(label).toBeTruthy()
  })

  it('should render with password variant', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Input
        variant="password"
        testID="input"
        label="Senha"
        placeholder="Digite sua senha"
      />,
    )

    const input = getByTestId('input')
    const label = getByText('Senha')
    const icon = getByTestId('icon-eye')

    expect(input).toBeTruthy()
    expect(label).toBeTruthy()
    expect(icon).toBeTruthy()
  })

  it('should change icon on click', async () => {
    const { getByTestId } = renderWithTheme(
      <Input
        variant="password"
        testID="input"
        label="Senha"
        placeholder="Digite sua senha"
      />,
    )

    const iconEye = getByTestId('icon-eye')
    const iconButton = getByTestId('icon-button')

    expect(iconEye).toBeTruthy()

    fireEvent.press(iconButton)

    await waitFor(() => {
      const iconEyeOff = getByTestId('icon-eye-off')
      expect(iconEyeOff).toBeTruthy()
    })
  })
})
